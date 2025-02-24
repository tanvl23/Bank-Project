const express = require('express')
let cors = require("cors");
//const { validateAuth}=require("./auth");
//const { getUserInfo}=require("./utils/user-info");
const { validateInput } = require("./validators");
let app = express();
app.disable('x-powered-by')
app.disable('etag')
app.use(express.json({ Limit: process.env.LIMIT }));
app.use(express.urlencoded({ extended: true }));

let corsOption = {
    origin: process.env.ORIGIN,
};
app.use(cors(corsOption));
app.use(express.json());
// app.use([validateAuth]);
// app.use([getUserInfo]);
// app.use([validateInput]);

app.use(function (req, res, next) {
    if (req.secure) {
        res.setHeader(
            "Strict-Transport-Security",
            "max-age=3156000; includeSubDomains; preload"
        );
    }
    next();
});

app.use("/banking", require("./routes/login-route").router);
app.use("/banking", require("./routes/faq-route").router);

app.use((req, res, next) => {
    console.log(req.body);
    console.log("Request URL : ", req?.originalUrl);
    console.log("Request Body : ", req?.body);
    let response = {
        responseCode: "-1",
        responseDesc: "Unable to process request"
    }
    console.log("Response ", response);
    return res.status(401).json(response)


})


module.exports = app 