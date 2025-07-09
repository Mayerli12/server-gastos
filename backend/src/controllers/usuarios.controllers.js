const usuariosControllers = {};

// Método POST
usuariosControllers.addUsuario = async (req, res) => {
    console.log(req.body);
    res.send("Nuevo usuario registrado");
}

// Método GET
usuariosControllers.getUsuarios = async (req, res) => {
    res.json([{
         usuario:'Jorge',
            edad:24,
            informacion:'Jugador del chancla dura' 
    }]);
}
module.exports=usuariosControllers;