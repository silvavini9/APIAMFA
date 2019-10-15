const Car = require('../models/car');
const Json = {
    "placa": "htt3233",
    "kilometroAtual": "2000",
    "kilometroFinal": "3000",
    "litrosAbastecidos": "25",
}

module.exports = {
    average(req, res){
        const { placa, kilometroAtual, kilometroFinal, litrosAbastecidos  } = Json;

        const media = (kilometroFinal - kilometroAtual)/litrosAbastecidos;

        return  media;    
    },

    store(req, res) {
        const {placa} = Json;
        
        const media = average(req,res);

        const car = new Car({
            placa
            media,
        })

        return res.json(car);
    },
    
}