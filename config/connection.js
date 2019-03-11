// database connected
var mysql = require('mysql');
var connection;

// add in the environment variable option for JAWSDB for heroku
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: 'mwgmw3rs78pvwk4e.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'budz4xhhzbluhl21	',
		password: 'psirdqixevjsgszk',
		database: 'l3k78cji8f38ns52'
	});
};

connection.connect(function(err) {
	if (err) {
		console.error('error conencting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

// export the connection back to orm
module.exports = connection;