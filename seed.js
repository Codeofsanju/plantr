const {db} = require('./model');



db.sync({force: true}) 
    .then(() => {
        console.log('db connected!');
    })
    .catch((err)=>{
        console.log(err.message);
        db.close();
    }); 
