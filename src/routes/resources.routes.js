const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database'); 

//Todos los componentes
router.get('/', async (req, res) => {
    mysqlConnection.query('SELECT * FROM color', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});



module.exports = router;