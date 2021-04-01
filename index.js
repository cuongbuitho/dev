
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const connection = require('./configs/mysql')
const product = require('./routes/product')
app.use(cors())
app.use(bodyParser.json())
app.use('/product', product)


app.get('/product/page=:sotrang', function (req, res) {
	var limit = 3;
	var ofsset = (req.params.sotrang - 1) * limit;
	var sql = "SELECT * FROM `product` ORDER BY Pid desc LIMIT " + ofsset + " , " + limit;
	connection.query(sql, function (err, result, fields) {
		if (err) throw err;
		//console.log(result);
		res.json(result);
	});
})
app.listen(4000);