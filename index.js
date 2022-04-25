require('dotenv').config()
const zoho = require('@trifoia/zcrmsdk')
const fs = require('fs')
const Deals = require('./models').Deals

const config = require('./config/zoho.config')

// Get data from Zoho CRM by Module name and Page number
let getDataFromCRM = async (pageNum, moduleName) => {
	let client = await zoho.initialize(config)
	let response = await client.API.MODULES.get({
		module: moduleName,
		params: {
			page: pageNum,
			per_page: 200,
		},
	})
	let data = await JSON.parse(response.body)
	return data
}

// Insert into local database, Deals table
let insertIntoTableDeals = async (dealsData) => {
	let response = await Deals.bulkCreate(dealsData, { loggging: false })
	return response
}

// Main function
;(async () => {
	// Setup variables
	let pageNum = 1,
		dealsData = '',
		arrDeals = []

	// Loop getDataFromCRM function as long as response has more_record
	do {
		dealsData = await getDataFromCRM(pageNum, 'Deals')
		console.log(`Getting data at page ${pageNum}`)
		dealsData.data
			? console.log('Ada Data')
			: console.log(`No Data? ${dealsData.data}`)

		// Mapping response data to clean it and push it into array
		dealsData.data.map((isiArray) => {
			;(isiArray['Owner'] = isiArray['Owner'].name),
				(isiArray['Product_2'] = isiArray.Product_2[0]),
				(isiArray['Created_By'] = isiArray['Created_By'].name),
				(isiArray['Modified_By'] = isiArray['Modified_By'].name),
				(isiArray['Account_Name'] = isiArray['Account_Name'].name),
				(isiArray['Contact_Name'] =
					isiArray['Contact_Name'] == null
						? null
						: isiArray['Contact_Name'].name),
				(isiArray['Tag'] =
					isiArray.Tag[0] == null ? null : isiArray.Tag[0].name)

			delete isiArray['$approval']
			delete isiArray['$review_process']

			arrDeals.push(isiArray)
		})
		pageNum++
	} while (dealsData.info.more_records)

	// Bulk insert into Deals table by Array from before
	await insertIntoTableDeals(arrDeals)

	// Create json file contains the data fetched from API
	// This process can be skipped
	fs.createWriteStream('./dealsData.json').write(
		JSON.stringify(arrDeals),
		(err) => {
			if (err) console.log('error : ', err)
		},
	)

	// Print how many data has been fetched into database
	console.log(`${arrDeals.length} Deals Data Fetched`)
})()
