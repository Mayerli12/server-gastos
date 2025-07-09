const Gastos = require('../models/gastos');
const gastosControllers = {};

/*gastosControllers.addGasto= async(req,res)=>{
    console.log(req.body);
    res.send("Nuevo gasto Registrado");
}*/

//metodo GET
gastosControllers.getGastos = (req, res) => {
    res.json([
        {
            id: 100,
            gasto: 'Salud', 
            monto: 14575.60,
            informacion: 'Corresponde a consultas médicas, pagos de seguros, medicinas'
        },
        { 
            id: 200,
            gasto: 'Educación',
            monto: 2500.00,
            informacion: 'Gastos en supermercado y restaurantes'
        },
        {
            id: 300,
            gasto: 'Vivienda',
            monto: 1200.00,
            informacion: 'Gastos en transporte público y gasolina'
        }
    ]);
}
//metodo POST 
//metodo POST
gastosControllers.addGasto= async(req,res)=>{
    const gasto=new Gastos({
        tipo: req.body.tipo,
        monto:req.body.monto,
        descripcion:req.body.descripcion
    });
    console.log(gasto);
    await gasto.save();
    res.json('status: Gasto guardado');
}

module.exports=gastosControllers;