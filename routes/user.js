var express = require('express');
var router = express.Router();
var fs = require('fs');
var user = require('../model/user-structure.js');
let userData = fs.readFileSync('./users.json');
let siteUsers = JSON.parse(userData);
    //render display of users
    router.get('/', function(req,res,next){
        //Assigning the parsed array of objects read-in from boxers.json to a variable called createdBoxers
        var createduser = siteUsers;
        res.render('listofusers', {createduser});
})

module.exports = router;
