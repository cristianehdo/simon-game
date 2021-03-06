// easy model 4 possibilities
const counter = document.getElementById("count");
let sequence = [];
let rightNumber;
let count;
let sequenceIndex;
let USER_TURN = false;
let SPEED = 1000;
// const sounds = {
//   "one": "simonSound1.mp3",
//   "two": "simonSound2.mp3",
//   "three": "simonSound3.mp3",
//   "four": "simonSound4.mp3",
//   "failure": "failure.mp3"
// }

const sounds = {
  "one": new Audio('sounds/simonSound1.mp3'),
  "two": new Audio('sounds/simonSound2.mp3'),
  "three": new Audio('sounds/simonSound2.mp3'),
  "four": new Audio('sounds/simonSound2.mp3'),
  "failure": new Audio('sounds/failure.mp3')
}

const makeSound = (sound) => {
    sound.play();
}

// addding class card-active to card
const unAnimateCard = (card) => {
  card.classList.remove("card-active");
}

const animateCard = (card, number) => {
  makeSound(sounds[number]);
  card.classList.add("card-active");
  setTimeout(function () {
    unAnimateCard(card)
  }, 500);
}

//display the level number
const dislpayCount = (count) => {
  while (counter.firstChild) {
    counter.removeChild(counter.firstChild); // cleaning first
  }
  counter.insertAdjacentHTML("afterbegin", count)
};

// convert number string to integer
const convertToInteger = (number) => {
  numbers = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4
  }
  return numbers[number];
}

const entryIsCorrect = (number) => {
  return number == rightNumber;
}

const verifySequence = (number) => { //number is as string "one"...
  USER_TURN = false;
  num = convertToInteger(number); //convert to integer
  rightNumber = sequence[sequenceIndex];
  if (entryIsCorrect(num)) {
    sequenceIndex += 1;
    USER_TURN = true;
  }
  else {
    dislpayCount("!!");
    makeSound("failure");
    START.classList.remove("selected");
  }
  if (sequence.length == sequenceIndex) {
    USER_TURN = false;
    sequenceIndex = 0;
    setTimeout(function () {
      incrementSequence();
    }, 500);

  }
}

const displaySequence = (sequence) => {
  let i = 0;
  const playCard = () => {
    USER_TURN = false;
    let num = sequence[i];
    let cardNum = NUMBERS[num];
    let card = CARDS[cardNum];
    animateCard(card, cardNum);
    i += 1;
    if (i >= sequence.length) {
      stopInterval();
    }
  }
  let interval = setInterval(playCard, SPEED);
  const stopInterval = () => {
    clearInterval(interval);
    USER_TURN = true;
  }
}

const randomNum = () => {
// random number from 1 to 4
  return Math.floor(Math.random() * 4) + 1;
}

// push into sequence array another number from 1 to 4
const incrementSequence = () => {
  USER_TURN = false;
  count += 1;
  dislpayCount(count);
  sequence.push(randomNum());
  displaySequence(sequence);
}
//reset everything and start a new sequence
const startGame = () => {
  sequence = [];
  count = 0;
  sequenceIndex = 0;
  incrementSequence();
}
// function to debug
const debug = () => {
  console.log("use_turn: " + USER_TURN);
  console.log(sequence);
  console.log("index: " + sequenceIndex);
  console.log(rightNumber);
}
