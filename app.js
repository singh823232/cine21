require('dotenv').config();
const { response, json } = require("express");
const express = require("express");
const nodemailer = require("nodemailer");
const cookieParser = require("cookie-parser");
const cors = require("cors")


const app = express();

require("./src/db/conn.js");
const candidate = require("./src/models/registers");
const { Mongoose } = require("mongoose");

const port = process.env.PORT || 8000;



app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(cors());
app.use((req, res, next) => {  // To remove CROS (cross-resource-origin-platform) problem
    res.setHeader('Access-Control-Allow-Origin', "*"); // to allow all client we use *
    res.setHeader('Access-Control-Allow-Methods', "OPTIONS,GET,POST,PUT,PATCH,DELETE"); //these are the allowed methods
    res.setHeader('Access-Control-Allow-Headers', "*"); // allowed headers (Auth for extra data related to authoriaztiom)
    next();
})


app.get("/", (req, res) => {
    res.send("working");
});

// console.log(process.env.EMAIL)

app.post("/register", async (req, res) => {
    try {
        const condidateSchema = new candidate(req.body)
        const studentData = await condidateSchema.save()
        console.log(studentData);

        // ##################### using  nodemailer #################//
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS_E
            }
        });
        const mailOption = {
            from: process.env.EMAIL,
            to: req.body.email,
            subject: "CINE'21",    // https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbGZVWUJFbnFPUFk1aGVkMm9UVHhnaWJjc1FYUXxBQ3Jtc0tuZnFNa3BMVkR5SkZIWm5lLWw0NEF5b0tsYnF3T2dnR3pXUm1xNVo4YTJ2cFJiLVJsdGpfc24zYkpaWGx5bnFiT3lLb0NGQk9zcVlqaF9lRXI3alN6Qm5XVXBHNEdNS2NkeERuY0tZaDg5ZW1aUkZEYw&q=https%3A%2F%2Fmyaccount.google.com%2Flesssecureapps
            html: "<h3>CONGRATULATION,</h3><br>" + "<h1 style='font-weight:bold;'>You are successfully registered</h1>"
        };

        transporter.sendMail(mailOption, function (error, info) {
            if (error) {
                console.log(error)
                res.send(error);
            }
            else {
                console.log(mailOption)
                res.send(mailOption);
            }
        });
        res.status(200).send(mailOption);

    }
    catch (error) {
        console.log(error)
        res.status(400).send("You are already exist");
    }
})



app.listen(port, () => {
    console.log(`server is running on port no ${port}`);
})



