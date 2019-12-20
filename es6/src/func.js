import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const schema = new mongoose.Schema({ name : String , id : Number , password : String });

module.exports = mongoose.model('crud',schema);