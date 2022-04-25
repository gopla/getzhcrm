'use strict'
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Deals', {
			row_id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
			},
			id: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			Owner: {
				type: Sequelize.STRING,
			},
			Product_2: {
				type: Sequelize.STRING,
			},
			Status_Edit: {
				type: Sequelize.STRING,
			},
			Proposal_Quote_Date: {
				type: Sequelize.DATE,
			},
			Target_Jumlah_Pemasangan_GPS: {
				type: Sequelize.INTEGER,
			},
			First_Visit_Date: {
				type: Sequelize.DATE,
			},
			Last_Activity_Time: {
				type: Sequelize.DATE,
			},
			Tanggal_Trial: {
				type: Sequelize.DATE,
			},
			Exchange_Rate: {
				type: Sequelize.INTEGER,
			},
			Deal_Name: {
				type: Sequelize.TEXT,
			},
			Trial_Request: {
				type: Sequelize.TEXT,
			},
			Currency: {
				type: Sequelize.STRING,
			},
			nd_Owner: {
				type: Sequelize.STRING,
			},
			Stage: {
				type: Sequelize.STRING,
			},
			Deal_Won_Date: {
				type: Sequelize.DATE,
			},
			Sales_Duration: {
				type: Sequelize.INTEGER,
			},
			Deal_Complete: {
				type: Sequelize.DATE,
			},
			Tag_Leadgen: {
				type: Sequelize.STRING,
			},
			Deal_Lost_Date: {
				type: Sequelize.DATE,
			},
			Aging_Duration_Time: {
				type: Sequelize.FLOAT,
			},
			Created_Time: {
				type: Sequelize.DATE,
			},
			Last_Activity_Date: {
				type: Sequelize.DATE,
			},
			Confidance_Level_Date: {
				type: Sequelize.DATE,
			},
			Status_Confidence_Level: {
				type: Sequelize.STRING,
			},
			Deal_ke2: {
				type: Sequelize.TEXT,
			},
			First_Visit_Date1: {
				type: Sequelize.DATE,
			},
			Last_Activity_Meeting: {
				type: Sequelize.DATE,
			},
			Request_Khusus_TMS: {
				type: Sequelize.TEXT,
			},
			Created_By: {
				type: Sequelize.STRING,
			},
			Last_CallResult: {
				type: Sequelize.STRING,
			},
			Confidence_Level_Date_2: {
				type: Sequelize.DATE,
			},
			Confidence_Level_Date_1: {
				type: Sequelize.DATE,
			},
			Final_Negotiation_Date: {
				type: Sequelize.DATE,
			},
			Confidence_Level_Date_4: {
				type: Sequelize.DATE,
			},
			Target_Jumlah_Pemasangan_TMS: {
				type: Sequelize.INTEGER,
			},
			Confidence_Level_Date_3: {
				type: Sequelize.DATE,
			},
			Description: {
				type: Sequelize.TEXT,
			},
			Campaign_Source: {
				type: Sequelize.STRING,
			},
			Total_Amount: {
				type: Sequelize.INTEGER,
			},
			Qualified_Potential_Customer_Date: {
				type: Sequelize.DATE,
			},
			Checkbox_DEALTrigger: {
				type: Sequelize.BOOLEAN,
			},
			Tanggal_Berakhir_Trial: {
				type: Sequelize.DATE,
			},
			Amount_One_Time_Fee: {
				type: Sequelize.INTEGER,
			},
			Closing_Date: {
				type: Sequelize.DATE,
			},
			Date_Churn: {
				type: Sequelize.DATE,
			},
			Modified_By: {
				type: Sequelize.STRING,
			},
			Lead_Conversion_Time: {
				type: Sequelize.INTEGER,
			},
			Target_Jumlah_Pemasangan_Driver_Apps: {
				type: Sequelize.INTEGER,
			},
			Total_unit_Churn: {
				type: Sequelize.INTEGER,
			},
			Stage_Changed_Date: {
				type: Sequelize.DATE,
			},
			Overall_Sales_Duration: {
				type: Sequelize.FLOAT,
			},
			Account_Name: {
				type: Sequelize.STRING,
			},
			Amount_TMS: {
				type: Sequelize.INTEGER,
			},
			Identify_Decision_Makers_Date: {
				type: Sequelize.DATE,
			},
			Modified_Time: {
				type: Sequelize.DATE,
			},
			Status_Data: {
				type: Sequelize.STRING,
			},
			Amount_Driver_Apps: {
				type: Sequelize.INTEGER,
			},
			Expected_Revenue_New: {
				type: Sequelize.INTEGER,
			},
			Amount: {
				type: Sequelize.INTEGER,
			},
			Jumlah_Trial: {
				type: Sequelize.INTEGER,
			},
			Probability: {
				type: Sequelize.INTEGER,
			},
			Next_Step: {
				type: Sequelize.TEXT,
			},
			Customer_Category: {
				type: Sequelize.STRING,
			},
			Contact_Name: {
				type: Sequelize.STRING,
			},
			Sales_Cycle_Duration: {
				type: Sequelize.STRING,
			},
			Type: {
				type: Sequelize.STRING,
			},
			TARGET_Closing_Date: {
				type: Sequelize.DATE,
			},
			Confidence_Level1: {
				type: Sequelize.STRING,
			},
			Deal_Name1: {
				type: Sequelize.TEXT,
			},
			Lead_Source: {
				type: Sequelize.STRING,
			},
			Tag: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		})
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Deals')
	},
}
