/* eslint-disable comma-dangle */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
const functions = require("firebase-functions");
const fetch = require("node-fetch");

exports.addMessage = functions.https.onRequest((req, res) => {
  const id = req.query.text;
  let prodDetails;
  async function getProduct() {
    await fetch(`http://fakestoreapi.com/products/${id}`, {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
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
        res.send(error);
      });
  }
  getProduct();
});
