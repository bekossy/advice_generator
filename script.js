const url = "	https://api.adviceslip.com/advice";

// const requestMethod = (url) => {
//     const httpRequest = new XMLHttpRequest();

//     httpRequest.addEventListener('readystatechange', () => {
//         if(httpRequest.readyState === 4){
//             if(httpRequest.status === 200){
//                 console.log(JSON.parse(httpRequest.responseText))
//                 // console.log(httpRequest.responseText)
//             }
//             else{
//                 console.log(httpRequest.status)
//             }
//         }
//     });
//     httpRequest.open('GET', url);
//     httpRequest.send();
// }

// requestMethod(url)

fetch(url)
  .then((data) => data.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  console.log("hello");
});
