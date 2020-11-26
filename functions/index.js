const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")('sk_test_51HrgBnCHlNhW787uifYnYlaUB8pHJojvOItxPZQUOdZenye6nMi8PLKcxx7GCF2dezcQSw41DwYLOxPGuN6h2oUg00mV1CMa2T');

//API

// app config
const app = express();

//MIDDLEWARE
app.use(cors({origin: true}));
app.use(express.json());


//API routes
app.get('/', (request, response) => response.status(200).send('Hello World'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved BOOM! for this amount >> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret, 
    })
})

//Listen command
exports.api = functions.https.onRequest(app);


//Example endpoint
//http://localhost:5001/challenge-f55b5/us-central1/api