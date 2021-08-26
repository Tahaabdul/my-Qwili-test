// const handleSubmit = (event) => {
//   event.preventDefault();

//   const prodId = document.getElementById("prodId").value;
//   const data = { prodId };

//   axios
//     .post("https://us-central1-qwili-test.cloudfunctions.net/submit", data)
//     .then(console.log("done"))
//     .catch((error) => {
//       console.log(error);
//     });
// };
const requestForm = document.querySelector(".request form");

const button = document
  .getElementById("button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const data = prodId;

    axios
      .post("https://us-central1-qwili-test.cloudfunctions.net/submit", data)
      .then(console.log(prodId))
      .catch((error) => {
        console.log(error);
      });
  });
