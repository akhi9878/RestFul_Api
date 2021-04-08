const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`,{
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology:true,
    useFindAndModify:false
})
.then(()=>{
    console.log("Connected to DataBase")
})
.catch((err)=>{
    console.log("There is an error connectinf DataBase");

})