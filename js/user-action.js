
const CARDS = {
 "one": document.querySelector(".one"),
 "two": document.querySelector(".two"),
 "three": document.querySelector(".three"),
 "four": document.querySelector(".four")
}

const speedBtn = document.querySelectorAll('.speed');

const cards = document.querySelectorAll(".card");
const START = document.getElementById("start");
const NUMBERS = ["zero", "one", "two", "three", "four"];

start.addEventListener("click", () => {
  start.classList.add("selected");
  startGame();
});

const getSelectedCard = (card) => {
  NUMBERS.forEach((number) => {
    if (card.classList.contains(number)) {
      animateCard(card, number);
      verifySequence(number);
    }
  });
};

cards.forEach((card) => {
  card.addEventListener("click", (event) => {
    if (USER_TURN === true) {
      getSelectedCard(event.currentTarget);
    }
  });
});

speedBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    clickedBtn = event.currentTarget;
    speedBtn.forEach((bt) => { //remove disable class from all buttons
        bt.classList.remove("selected");
      });
    clickedBtn.classList.add("selected");
    if (clickedBtn.classList.contains("easy")){
      SPEED = 1000;
    }
    else if (clickedBtn.classList.contains("medium")){
      SPEED = 500;
    }
    else {
      SPEED = 300;
    }
  });
});

