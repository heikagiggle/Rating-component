const containerMain = document.querySelector(".container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

// submit button

submitButton.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden");
  containerMain.style.display = "none";
});

// rate Again
rateAgain.addEventListener("click", () => {
  thanksContainer.classList.add("hidden");
  containerMain.style.display = "block ";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    // console.log(rate.innerHTML);
    rating.innerHTML = rate.innerHTML;
  });
});
