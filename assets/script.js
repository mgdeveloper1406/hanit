// Peter's slider function
// var slider = document.getElementById("range");

// slider.oninput = function () {
//   output.innerHTML = this.value;
// };
// Peter's slider function//


// started with the quote API and date display
var currentTimeEl = document.querySelector("#currentDay");
currentTimeEl.textContent = moment().format("dddd, MMMM Do YYYY");
var inApiEl = document.querySelector("#inApi");
var outApiEL = document.querySelector("#outApi");
var numRandom = Math.floor(Math.random() * 100);
function quoteAPI() {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      var quote = response[numRandom];
      var div = document.createElement("div");
      div.textContent = "💡  " + quote.text;
      inApiEl.append(div);
    });
}
quoteAPI();
// finished with the quote API and date display//

// started with the achievement img API
function imgAPI() {
  fetch(
    'https://api.giphy.com/v1/gifs/search?q=achievement&api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&limit=1'
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response)
      outApiEL.innerHTML = '';
      var gifImg = document.createElement('img');
      gifImg.setAttribute('src', response.data[0].images.fixed_height.url);
      outApiEL.appendChild(gifImg);
    })
}
imgAPI();
// Finished with the achievement img API//


