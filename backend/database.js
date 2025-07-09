const mongoose=require('mongoose');
//const URI='mongodb://127.0.0.1/gastos';
const URI='mongodb+srv://mayerli:1234@cluster0.8waor14.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(URI)
.then(db=> console.log('BD conectada'))
.catch(err => console.error(err));
module.exports=mongoose;