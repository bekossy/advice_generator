const url = "https://api.adviceslip.com/advice";
const container = document.querySelector(".holder");
const btn = document.querySelector(".btn");

let state = {};

btn.addEventListener("click", () => {
  requestMethod(url);
});

const requestMethod = (url) => {
  const httpRequest = new XMLHttpRequest();

  httpRequest.addEventListener("readystatechange", () => {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status >= 200 && httpRequest.status <= 299) {
        successUI(httpRequest.responseText);
      } else {
        errorUI();
      }
    }
  });
  httpRequest.open("GET", url);
  httpRequest.send();
};

const successUI = (data) => {
  const parsed = JSON.parse(data);
  state = {
    id: parsed.slip.id,
    advice: parsed.slip.advice,
  };

  container.innerHTML = `
    <div class="track">Advice #${state.id}</div>
    <div class="text">"${state.advice}"</div>
  `;
};

const errorUI = () => {
  container.innerHTML = `
        <div class="text">Unable to load advice <br /> Try again</div>
  `;
};
