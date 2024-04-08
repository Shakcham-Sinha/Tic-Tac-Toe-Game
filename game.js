let boxes = document.querySelectorAll(".btn");
let button = document.querySelector("#reset-btn");
let msg_container = document.querySelector(".msg-container");
let message = document.querySelector(".msg");
let new_btn = document.querySelector(".new-btn");
let turnO = true;
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = () => {
  turnO = true;
  enabledButton();
  msg_container.classList.add("hidden");
};
boxes.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turnO) {
      btn.innerText = "O";
      turnO = false;
    } else {
      btn.innerText = "X";
      turnO = true;
    }
    btn.disabled = true;
    checkWinner();
  });
});
const disabledButton = () => {
  for (let btn of boxes) {
    btn.disabled = true;
  }
};
const enabledButton = () => {
  for (let btn of boxes) {
    btn.disabled = false;
    btn.innerText = "";
  }
};
const showWinner = (winner) => {
  message.innerText = `Congratulations winner is ${winner}`;
  msg_container.classList.remove("hidden");
  disabledButton();
};
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;
    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        console.log("winner", val1);
        showWinner(val1);
      }
    }
  }
};
new_btn.addEventListener("click", resetGame);
button.addEventListener("click", resetGame);
