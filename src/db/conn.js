const mongoose = require("mongoose");

const db = 'mongodb://aman:12345@cluster0-shard-00-00.jusdn.mongodb.net:27017,cluster0-shard-00-01.jusdn.mongodb.net:27017,cluster0-shard-00-02.jusdn.mongodb.net:27017/cine?ssl=true&replicaSet=atlas-lrwrk4-shard-0&authSource=admin&retryWrites=true&w=majority';


mongoose.connect(db, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(e);
})

