'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Deals extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Deals.init(
		{
			row_id: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			Owner: DataTypes.STRING,
			Product_2: DataTypes.STRING,
			Status_Edit: DataTypes.STRING,
			Proposal_Quote_Date: DataTypes.DATE,
			Target_Jumlah_Pemasangan_GPS: DataTypes.INTEGER,
			First_Visit_Date: DataTypes.DATE,
			Last_Activity_Time: DataTypes.DATE,
			Tanggal_Trial: DataTypes.DATE,
			Exchange_Rate: DataTypes.NUMBER,
			Deal_Name: DataTypes.STRING,
			Trial_Request: DataTypes.STRING,
			Currency: DataTypes.STRING,
			nd_Owner: DataTypes.STRING,
			Stage: DataTypes.STRING,
			id: DataTypes.STRING,
			Deal_Won_Date: DataTypes.DATE,
			Sales_Duration: DataTypes.INTEGER,
			Deal_Complete: DataTypes.DATE,
			Tag_Leadgen: DataTypes.STRING,
			Deal_Lost_Date: DataTypes.DATE,
			Aging_Duration_Time: DataTypes.FLOAT,
			Created_Time: DataTypes.DATE,
			Last_Activity_Date: DataTypes.DATE,
			Confidance_Level_Date: DataTypes.DATE,
			Status_Confidence_Level: DataTypes.STRING,
			Deal_ke2: DataTypes.STRING,
			First_Visit_Date1: DataTypes.DATE,
			Last_Activity_Meeting: DataTypes.DATE,
			Request_Khusus_TMS: DataTypes.STRING,
			Created_By: DataTypes.STRING,
			Last_CallResult: DataTypes.STRING,
			Confidence_Level_Date_2: DataTypes.DATE,
			Confidence_Level_Date_1: DataTypes.DATE,
			Final_Negotiation_Date: DataTypes.DATE,
			Confidence_Level_Date_4: DataTypes.DATE,
			Target_Jumlah_Pemasangan_TMS: DataTypes.INTEGER,
			Confidence_Level_Date_3: DataTypes.DATE,
			Description: DataTypes.STRING,
			Campaign_Source: DataTypes.STRING,
			Total_Amount: DataTypes.INTEGER,
			Qualified_Potential_Customer_Date: DataTypes.DATE,
			Checkbox_DEALTrigger: DataTypes.BOOLEAN,
			Tanggal_Berakhir_Trial: DataTypes.DATE,
			Amount_One_Time_Fee: DataTypes.INTEGER,
			Closing_Date: DataTypes.DATE,
			Date_Churn: DataTypes.DATE,
			Modified_By: DataTypes.STRING,
			Lead_Conversion_Time: DataTypes.INTEGER,
			Target_Jumlah_Pemasangan_Driver_Apps: DataTypes.INTEGER,
			Total_unit_Churn: DataTypes.INTEGER,
			Stage_Changed_Date: DataTypes.DATE,
			Overall_Sales_Duration: DataTypes.FLOAT,
			Account_Name: DataTypes.STRING,
			Amount_TMS: DataTypes.INTEGER,
			Identify_Decision_Makers_Date: DataTypes.DATE,
			Modified_Time: DataTypes.DATE,
			Status_Data: DataTypes.STRING,
			Amount_Driver_Apps: DataTypes.INTEGER,
			Expected_Revenue_New: DataTypes.INTEGER,
			Amount: DataTypes.INTEGER,
			Jumlah_Trial: DataTypes.INTEGER,
			Probability: DataTypes.INTEGER,
			Next_Step: DataTypes.STRING,
			Customer_Category: DataTypes.STRING,
			Contact_Name: DataTypes.STRING,
			Sales_Cycle_Duration: DataTypes.STRING,
			Type: DataTypes.STRING,
			TARGET_Closing_Date: DataTypes.DATE,
			Confidence_Level1: DataTypes.STRING,
			Deal_Name1: DataTypes.STRING,
			Lead_Source: DataTypes.STRING,
			Tag: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Deals',
		},
	)
	return Deals
}
