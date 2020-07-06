const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const tokenBlacklist = new Schema({
    token: String
});

module.exports = new Model('TokenBlacklist', tokenBlacklist);