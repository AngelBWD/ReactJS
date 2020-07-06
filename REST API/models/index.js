const User = require('./User');
const Origami = require('./Origami');
const TokenBlacklist = require('./TokenBlacklist');


// Origami.create({
//     "_id": '32452626',
//     "author": {'Angel'},
//     "description": {"Hello. How are you ?"},
//     "__v": 0
// },{
//     "_id": '8765432',
//     "author": {'Pesho'},
//     "description": {"I am fine. "},
//     "__v": 0
// })

module.exports = {
    User,
    Origami,
    TokenBlacklist
};