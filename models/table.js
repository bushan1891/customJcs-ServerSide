const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tableSchema = new Schema({
  tableName:String,
  tableHeader:Array,
  tableRows:Array,
  tableRowCount:Number,
  tableColumnCount:Number,
  slectedIndex:[],	
});

tableSchema.pre('save',function(next){
	next();
});
const ModelClass = mongoose.model('table',tableSchema);
module.exports = ModelClass;