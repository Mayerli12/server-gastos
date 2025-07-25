const { create } = require('domain');
const mongoose=require('mongoose');
const {Schema}=mongoose;
const GastoSchema=new Schema({
tipo:{type:String, required:true},
monto:{type:Number, required:true},
descripcion:{type:String, required:true},
createdAt : {type:Date, default:Date.now}
})

module.exports=mongoose.model('gastos',GastoSchema);
