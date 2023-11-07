const ratings = document.querySelectorAll(".rating");
const submit = document.querySelector("button.btn");
const ratingScreen = document.querySelector(".rating-state");
const thankYouScreen = document.querySelector(".thank-you-state");
const info = document.querySelector(".info");

let choice = -1;

const clearActive = () => {
  ratings.forEach((rating) => {
    rating.classList.remove("active");
  });
  choice = -1;
};

ratings.forEach((rating, index) => {
  rating.addEventListener("click", () => {
    clearActive();
    rating.classList.add("active");
    choice = index + 1;
  });
});

submit.addEventListener("click", () => {
  if (choice !== -1) {
    ratingScreen.classList.add("hidden");
    thankYouScreen.classList.remove("hidden");
    info.innerHTML = `You selected ${choice} out of 5`;
  } else {
    clearActive();
  }
});
