require('dotenv').config()
const zoho = require('@trifoia/zcrmsdk')
const Deals = require('./models').Deals
const cron = require('node-cron')
const http = require('http')

const config = require('./config/zoho.config')
const { sequelize } = require('./models')
const port = 3434

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

// Call Stored Procedure in database
let deleteOneYearSP = async () => {
	let data = await sequelize.query('CALL delete_one_year_data()')
	return data
}

// Create server
http
	.createServer(async (req, res) => {
		res.write('Application running')
		res.write(` -> Time now : ${new Date()}`)
		res.end()

		if (req.url != '/favicon.ico') {
			cron.schedule('55 09 * * *', async () => {
				console.log(` -> Cron Running`)
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

				// Delete up to 1 year data
				await deleteOneYearSP()

				// Print how many data has been fetched into database
				console.log(`${arrDeals.length} Deals Data Fetched`)
			})
		}
	})
	.listen(port, () => {
		console.log(` -> Hello World! Running on port ${port}`)
		console.log(` -> Time now : ${new Date()}`)
	})
