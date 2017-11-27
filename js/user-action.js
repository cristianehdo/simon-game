
const CARDS = {
 "one": document.querySelector(".one"),
 "two": document.querySelector(".two"),
 "three": document.querySelector(".three"),
 "four": document.querySelector(".four")
}

const speedBtn = document.querySelectorAll('.speed');
const START = document.getElementById("start");
const NUMBERS = ["zero", "one", "two", "three", "four"];

start.addEventListener("click", () => {
  start.classList.add("selected");
  startGame();
});

// const getSelectedCard = (card) => {
//   NUMBERS.forEach((number) => {
//     if (card.classList.contains(number)) {
//       animateCard(card, number);
//       verifySequence(number);
//     }
//   });
// };

  CARDS["one"].addEventListener("click", (event) => {
    if (USER_TURN === true) {
      animateCard(CARDS["one"], "one");
      verifySequence("one");
    }
  });
  CARDS["two"].addEventListener("click", (event) => {
    if (USER_TURN === true) {
      animateCard(CARDS["two"], "two");
      verifySequence("two");
    }
  });
  CARDS["three"].addEventListener("click", (event) => {
    if (USER_TURN === true) {
      animateCard(CARDS["three"], "three");
      verifySequence("three");
    }
  });
  CARDS["four"].addEventListener("click", (event) => {
    if (USER_TURN === true) {
      animateCard(CARDS["four"], "four");
      verifySequence("four");
    }
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

