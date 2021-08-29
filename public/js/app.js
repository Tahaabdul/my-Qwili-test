const requestForm = document.querySelector(".request form");
const h2 = document.getElementById("new");

requestForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const search = requestForm.search.value;
  console.log(search);

  window.location.href = `https://us-central1-qwili-test.cloudfunctions.net/addMessage?text=${search}`;
});
