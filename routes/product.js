const express = require('express')
const route = express.Router()

const mysql = require('../configs/mysql')


route.get('/', async (req, res) => {

    const sql = 'select * from product ';
    mysql.query(sql, (err, results) => {

        res.json(results)
    })
})




module.exports = route;