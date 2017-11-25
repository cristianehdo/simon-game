const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const cards = document.querySelectorAll(".card");
const numbers = ["one", "two", "three", "four"];



const getSelectedCard = (card) => {
  numbers.forEach((number) => {
    if (card.classList.contains(number)) {
      animateCard(card, number);
      verifySequence(number);
    }
  });
};

cards.forEach((card) => {
  card.addEventListener("click", (event) => {
    getSelectedCard(event.currentTarget);
  });
});
