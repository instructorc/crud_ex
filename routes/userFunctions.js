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
    console.log(user);
    siteUsers.push(user);
  
        const usersString = JSON.stringify(siteUsers);
        for(var x = 0; x < usersString.length; x++){
            if(user.name != usersString[x].name){
                siteUsers.push(user)
                x = usersString.length;

            }else{
                usersString[x].name = user.name;
                x = usersString.length;
            }
        }

        fs.writeFile('./users.json', usersString, err => {
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
