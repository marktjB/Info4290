// //Random number generator in node.js

// function makeid(length) {
//     var result           = '';
//     var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';  //add the characters you want to allow
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//        result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     result = "sufl" + result;
//     return result;
//  }
 
//  console.log(makeid(8));

//  //http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
//  console.log(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));

// // need to grab persons location from somewhere. Do we enter format into database or create it based off by auto removing all but first 4 plus watchin hypens
// //  https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript?page=1&tab=votes#tab-top
// // bigger

const crypto = require('crypto');

var name = "Surrey";
var prefix_surrey = "surr";

function randomGenerator(prefix) {
    console.log("function start");
    // crypto.randomBytes(4, function(err, buffer) {
    //     var token = buffer.toString('hex');
    //     // console.log(token);
    //     var result = prefix + token;
    //     // console.log("token 1 " + token); //this prints last why??
    //     console.log("stevens function " + result); //this prints last why??
    //     console.log("raizha function " + buffer);
    //     return result;
    //   });

    // crypto.randomBytes(4, (err, buf) => {
    //   if (err) throw err;
    //   console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`);
    // });
    // console.log("token 2 " + token); //this prints last why??
    // console.log("just after " + buf);
    // console.log("End function");
    var result = prefix + crypto.randomBytes(4).toString('hex');
    // return crypto.randomBytes(4).toString('hex'); //originals return
    console.log("Var before end " + result)
    console.log("End of function")
    return result;
  }

if (name=="Surrey"){
  console.log("calling function");
  var results = randomGenerator(prefix_surrey);
  console.log("if statement " + results);
}
else{
  console.log("not from surrey");
}
// console.log("this is outside " + results);




  //https://stackoverflow.com/questions/8855687/secure-random-token-in-node-js
  //https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback

//   The voter's unique IDs will based on their residency and a unique string that represent them
// Areas will be represented as 4 characters taken from the name of their area. Such Surrey-Fleetwood = sufl or Chilliwack = chil
// PLUS
// A unique ID will consist of 8 alphanumeric characters = abcd1234
// Example ID could be - suflabdc1234

// These of course are given to the user prior


// https://en.wikipedia.org/wiki/List_of_British_Columbia_provincial_electoral_districts