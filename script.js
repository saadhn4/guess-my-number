let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highscore = 0;

document.querySelector(".check-btn").addEventListener("click", () => {
  // getting the input value only after clicking
  const guess = Number(document.querySelector(".guess-value").value);

  if (!guess)
    document.querySelector(".message").textContent = "Enter a number.";

  if (guess === secretNumber) {
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    document.querySelector("body").style.backgroundColor = "green";

    document.querySelector(".number-box").textContent = secretNumber;

    document.querySelector(".message").textContent = "✨ You guessed right!";
  } else {
    if (score > 1) {
      score--;

      document.querySelector(".score").textContent = score;

      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too high!" : "Too low!";
    } else {
      document.querySelector(".message").textContent = "Game over :(";

      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;

  document.querySelector(".message").textContent = "🤔 Start guessing";

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number-box").textContent = "?";

  document.querySelector(".guess-value").value = "";
});
