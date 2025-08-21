# 🎮 Guess My Number

A fun number guessing game built with **HTML, CSS (Tailwind)**, and **JavaScript**.  
The player tries to guess a random number between **1 and 20** while keeping track of their **score** and **highscore**.

---

## 🚀 Features
- 🎲 Randomly generated secret number between **1 and 20**
- ⌨️ User inputs guesses via a number field
- 🟢 Correct guess turns background green and reveals the number
- 🔼 Feedback messages ("Too high!" / "Too low!") for wrong guesses
- 💯 Score decreases by 1 on each wrong guess
- 🥇 Highscore is saved during the session
- 🔁 "Again" button resets the game with a new number

---

## ✨ Game logic
- Initial Screen:  
  - Score starts at **20**  
  - Secret number is hidden (`?`)  
  - Message shows **"🤔 Start guessing"**  

- On correct guess:  
  - Background turns **green**  
  - Secret number is revealed  
  - Message updates to **"✨ You guessed right!"**  

- On wrong guess:  
  - Message shows **"Too high!"** or **"Too low!"**  
  - Score decreases  

- On game over:  
  - Message shows **"Game over :("**  
  - Score becomes **0**

---

## 🛠️ Tech Stack
- **HTML5** for structure  
- **Tailwind CSS** for styling  
- **Vanilla JavaScript (ES6)** for game logic 