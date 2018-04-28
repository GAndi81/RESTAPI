var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');


const dbPath = '../db';


/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('API is live.');
});


const getDBPath = (table) => {
    return path.join(__dirname, dbPath, `${table}.json`);
};


//generate ID

const genID = (length = 25) => {
    let chars = 'ABCDEFGHIJKLMN0123456789abcdefghijklmnoprstuvz';
    let id = "";
    for (let i = 0; i < chars.length; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
};


//Get all data from Json File

router.get('/:table', function (req, res, next) {
    console.log(genID());
    fs.readFile(
        getDBPath(req.params.table),
        'utf8', (err, jsonData) => {
            if (err) {
                console.error(err);
                return res.sendStatus(404);
            }
            res.send(jsonData);
        });
});


//Create object in json array

router.post('/:table', function (req, res, next) {
    const filePath = getDBPath(req.params.table);
    fs.readFile(
        getDBPath(req.params.table),
        'utf8', (err, jsonData) => {
            if (err) {
                console.error(err);
                return res.sendStatus(404);
            }
            jsonData = JSON.parse(jsonData);
            req.body._id = genID();
            jsonData.push(req.body);

            fs.writeFileSync(filePath, JSON.stringify(jsonData), 'utf8');
            res.json(req.body);
        });
});

// Get sepcified object from the json file.

router.get('/:table/:id', function (req, res, next) {
    fs.readFile(
        getDBPath(req.params.table),
        'utf8', (err, jsonData) => {
            if (err) {
                console.error(err);
                return res.sendStatus(404);
            }
            // TODO: find entity by _id.
            for (let i = 0; i < jsonData.length; i++) {
                let obj = jsonData[i];
                if (obj._id === req.params.id) {
                    res.send(obj);
                    return;
                }
            }
        });
});


// Update an object in the json array

router.put('/:table/:id', function (req, res, next) {
    const filePath = getDBPath(req.params.table);
    fs.readFile(
        getDBPath(req.params.table),
        'utf8', (err, jsonData) => {
            if (err) {
                console.error(err);
                return res.sendStatus(404);
            }
            jsonData = JSON.parse(jsonData);
            req.body._id = genID();
            jsonData.push(req.body);

            fs.writeFileSync(filePath, JSON.stringify(jsonData), 'utf8');
            res.json(req.body);
        });
});

// Delete an object from json array

router.delete('/:table/:id', function (req, res, next) {
    const filePath = getDBPath(req.params.table);
    fs.readFile(
        getDBPath(req.params.table),
        'utf8', (err, jsonData) => {
            if (err) {
                console.error(err);
                return res.sendStatus(404);
            }
            jsonData = JSON.parse(jsonData);
            req.body._id = genID();
            jsonData.push(req.body);

            fs.writeFileSync(filePath, JSON.stringify(jsonData), 'utf8');
            res.json(req.body);
        });
});

module.exports = router;