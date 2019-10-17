const Car = require('../models/car');

module.exports = {
    index(req,res){
        res.render('');
    },

    async store(req, res) {
        const { placa, kilometroInicial, kilometroFinal, litrosAbastecidos  } = req.body;

        const average = (kilometroFinal - kilometroInicial)/litrosAbastecidos;
        let carExist = await Car.findOne({placa: placa});

        if( carExist != null ){
            carExist.averages.push(average);
            carExist.dateAverages.push(Date.now());
            await carExist.save( (error) => {
                if(error){
                    res.json(error);
                }else {
                    res.json(carExist);
                }
            });
        }else {
            const car = new Car({
                placa: placa,
                averages: average,
                dateAverages: Date.now(),
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
    },
   
}