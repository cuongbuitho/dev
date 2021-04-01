const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ungdungphanmem'
});

connection.connect(function (error) {
    if (error) throw error;
    console.log('Connected Mysqlx')

});

module.exports = connection