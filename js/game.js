// easy model 4 possibilities
const soundUrl = {
  "one": "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
  "two": "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",
  "three": "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",
  "four": "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
}

const makeSound = (number) => {
  let url = soundUrl[number];
  let sound = new Audio(url);
    sound.play();
}
const randomEasy = () => {
// random number from 1 to 4
  return Math.floor(Math.random() * 4) + 1;
}

const delayAction = (func, time) => {
   window.setTimeout(func, time);
}

const verifySequence = (number) => {
  console.log(number);
}

const unAnimateCard = (card) => {
  // console.log("hello");
  card.classList.remove("card-active");
}

const animateCard = (card, number) => {
  makeSound(number);
  card.classList.add("card-active");
  setTimeout(function () {
    unAnimateCard(card)
  }, 500);
}

