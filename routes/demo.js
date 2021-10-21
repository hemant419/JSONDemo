var express = require('express');
var router = express.Router();

const fs = require('fs');

const db = require('./bio.json');




router.get("/", function(req, res) {
    const record = db.forEach(data2=>{
        res.send(data2.name);
        return;
    });
    
});



module.exports = router;
