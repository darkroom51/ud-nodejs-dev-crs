const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 4
}
var token = {
    data: data,
    hash: SHA256(JSON.stringify(data)+'somesecret').toString()
}

var token = jwt.sign(data, 'somesecret');
var decoded = jwt.verify(data, 'somesecret');


// basic examples below -----------------------------------------

// var message = 'Im user no 3';
// var hash = SHA256(message).toString();
// console.log(hash);


// // our data
// var data = {
//     id: 4
// }
// var token = {
//     data: data,
//     hash: SHA256(JSON.stringify(data)+'somesecret').toString()
// }
// //malicous actor
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(data)).toString();
// //result hash
// var resultHash = SHA256(JSON.stringify(data)+'somesecret').toString();
// if(resultHash === token.hash){
//     //OK
// } else {
//     //not OK
// }
