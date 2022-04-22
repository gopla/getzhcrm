require('dotenv').config()
const zoho = require('@trifoia/zcrmsdk')
const FormData = require('form-data')
const fs = require('fs')

const config = require('./config/zoho.config')

let getDataFromCRM = async (pageNum, moduleName) => {
	let client = await zoho.initialize(config)
	let response = await client.API.MODULES.get({
		module: moduleName,
		params: {
			page: pageNum,
			per_page: 10,
		},
	})
	let data = await JSON.parse(response.body)
	return data
}

;(async () => {
	let pageNum = 12,
		dealsData = '',
		arrDeals = []

	// do {
	dealsData = await getDataFromCRM(pageNum, 'Deals')
	console.log(`Getting data at page ${pageNum}`)

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
			(isiArray['Tag'] = isiArray.Tag[0] == null ? null : isiArray.Tag[0].name)

		delete isiArray['$approval']
		delete isiArray['$review_process']

		arrDeals.push(isiArray)
	})
	pageNum++
	// } while (dealsData.info.more_records)

	fs.createWriteStream('./dealsData.json').write(
		JSON.stringify(arrDeals),
		(err) => {
			if (err) console.log('error : ', err)
			console.log('Deals Data Fetched')
		},
	)
})()
