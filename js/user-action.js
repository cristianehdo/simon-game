
const CARDS = {
 "one": document.querySelector(".one"),
 "two": document.querySelector(".two"),
 "three": document.querySelector(".three"),
 "four": document.querySelector(".four")
}
 const cards = document.querySelectorAll(".card");
 const start = document.getElementById("start");
 const NUMBERS = ["zero", "one", "two", "three", "four"];

start.addEventListener("click", () => {
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
