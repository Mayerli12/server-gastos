const Gastos = require('../models/gastos');
const gastosControllers = {};

/*gastosControllers.addGasto= async(req,res)=>{
    console.log(req.body);
    res.send("Nuevo gasto Registrado");
}*/

//metodo GET
gastosControllers.getGastos = async (req, res) => {
  try {
    const gastos = await Gastos.find(); // Obtiene todos los documentos de la colección "gastos"
    res.json(gastos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los gastos', detalles: error.message });
  }
};

/*gastosControllers.getGastos = (req, res) => {
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
}*/

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

//metodo PUT
gastosControllers.updateGasto = async (req, res) => {
    const { id } = req.params;
    const { tipo, monto, descripcion } = req.body;

    try {
        const resultado = await Gastos.findByIdAndUpdate(
            id,
            { tipo, monto, descripcion },
            { new: true }
        );

        if (!resultado) {
            return res.status(404).json({ error: 'Gasto no encontrado' });
        }

        res.json({ status: 'Gasto actualizado', data: resultado });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el gasto' });
    }
};

//metodo DELETE
gastosControllers.deleteGasto = async (req, res) => {
  const { id } = req.params;

  try {
    const eliminado = await Gastos.findByIdAndDelete(id);

    if (!eliminado) {
      return res.status(404).json({ error: 'Gasto no encontrado' });
    }

    res.json({ status: 'Gasto eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el gasto', detalles: error.message });
  }
};


module.exports=gastosControllers;