const Neas = require('../models/queryNeas');

const getNeas = async(req,res) => {
    let orbitClass = req.query.class
    if(orbitClass){
        try {
            let nea =  await Neas.getOrbit(orbitClass);// lo que esta entre comillas es para filtrar lo que quiero que me muestre
            res.status(200).json({nea});
         
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(404).json( {"message":"Nea por orbit class no encontrado"}); // lo ponemos aqui a esto para que si falla el fetch no me de timeout y me pinte el array vacio
           //el .status(200) es para que me devuelva ese numero de codigo de que todo ha ido bien (200) o error(404)
        }
    }
}

module.exports={
    getNeas,
}