import mongoose from 'mongoose';
const Schema = mongoose.Schema; 
const Mod = mongoose.Schema({ name : String , id : Number , password : String });
module.exports = mongoose.model('crud',Mod);

