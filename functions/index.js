/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
/* eslint-disable require-jsdoc */
const functions = require("firebase-functions");
const cors = require("cors");
const fetch = require("node-fetch");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.submit = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== "POST") {
      return;
    }
    const id = req.body.id;
    const url = `https://fakestoreapi.com/produts/${id}`;
    let prodDetails;
    async function getProduct() {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          prodDetails = {
            id: data.id,
            title: data.title,
            desc: data.description,
            image: data.image,
          };
          res.header("Access-Control-Allow-Origin", "*");
          res.status(200).send(`<!doctype html>
  <head>
    <title>Product</title>
  </head>
  <body>
    <h3>Product id: ${prodDetails.id}</h3>
    <h3>Title: ${prodDetails.title}</h3>
    <h3>Desc: ${prodDetails.desc}</h3>
    <img src="${prodDetails.image}" width="200" height="90"/>
  </body>
</html>`);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getProduct();
  });
});
