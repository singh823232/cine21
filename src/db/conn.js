const mongoose = require("mongoose");

const db = 'mongodb+srv://aman:12345@cluster0.jusdn.mongodb.net/cine?retryWrites=true&w=majority';


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

