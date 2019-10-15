const Car = require('../models/car');

module.exports = {
    index(req,res){
        res.render('');
    },

    async store(req, res) {
        var { placa, kilometroInicial, kilometroFinal, litrosAbastecidos  } = req.body;

        var average = (kilometroFinal - kilometroInicial)/litrosAbastecidos;
        var carExist = await Car.findOne({placa: placa});
        console.log(average)
        if(carExist){
                return await Car.findOneAndUpdate({ placa: placa }, {$push: {
                    averages: {average} }
                });  
      
        }else {
            var car = new Car({
                placa: placa,
                averages: {average},
            });

            await car.save( (error) => {
                if(error){
                    res.json(error);
                }
                else{
                    res.json(car)
                }
            });
        }
        return res.json(car);
    },
    async list(req, res) {
        var { placa } = req.params;
        var car = await Car.findOne( {placa} );
        res.json(car)
    }
    
}