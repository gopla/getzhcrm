require('dotenv').config()

module.exports = {
	client_id: process.env.ZOHO_CLIENT_ID,
	client_secret: process.env.ZOHO_CLIENT_SECRET,
	redirect_url: process.env.REDIRECT_URL,
	refresh_token: process.env.ZOHO_REFRESH_TOKEN,
	user_identifier: process.env.ZOHO_USER_IDENTIFIER,
	mysql_module: 'local',
}
