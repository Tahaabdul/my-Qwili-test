const requestForm = document.querySelector(".request form");
const prodId = requestForm.prodId.value;

requestForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = { prodId };
  axios
    .post("https://us-central1-qwili-test.cloudfunctions.net/submit", data)
    .then(console.log(prodId))
    .catch((error) => {
      console.log(error);
    });
});
