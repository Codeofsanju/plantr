const {db, Gardener, Plot, Vegetable} = require('./model');


// const someaVeg = Vegetable.build({})



db.sync({force: true}) 
    .then(() => {
        console.log('db connected!');
    })
    .catch((err)=>{
        console.log(err.message);
        db.close();
    }); 
