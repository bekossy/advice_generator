const url = "https://api.adviceslip.com/advice";
const id = document.querySelector(".track");
const text = document.querySelector(".text");
const btn = document.querySelector(".btn");

const getQuote = () => {
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      id.innerHTML = `Advice #${data.slip.id}`;
      text.innerHTML = `"${data.slip.advice}"`;
    })
    .catch((err) => console.log(err));
};

btn.addEventListener("click", () => {
  getQuote();
});
