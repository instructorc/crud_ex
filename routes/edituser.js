var express = require('express');
var router = express.Router();
var fs = require('fs');
var user = require('../model/user-structure.js');

let userData = fs.readFileSync('./users.json');
let siteUsers = JSON.parse(userData);

// Create user
router.post('/', function(req, res, next) { 
    user.name = req.body.name;
    user.password = req.body.password;
    siteUsers[req.body.selectedrow].name = user.name;
    siteUsers[req.body.selectedrow].password = user.password;
    

    const usersString = JSON.stringify(siteUsers);

        fs.writeFileSync('./users.json', usersString, err => {
            //error handling if, issue arises with file, else output to successfully wrote file
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
    res.render('display', user)
    });


module.exports = router;