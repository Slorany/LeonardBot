const config = require('../config.json');
module.exports = client => {
  var connection = mysql.createConnection({
    host      : config.mysqlHost,
    user      : config.mysqlUser,
    password  : config.mysqlPassword,
    database  : config.mysqlDatabase
  });

  var isConnected = false;

  connection.connect(function(err) {
    if (err) {
      systemMessage('error connecting: ' + err.stack);
      return;
    } else {
      isConnected = true;
      systemMessage('mySQL isConnected = ' + isConnected + '\nas id ' + connection.threadId)
    }
  });
};
