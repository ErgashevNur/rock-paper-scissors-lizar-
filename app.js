const icons = document.querySelectorAll(".NanBox");
const buttonBox = document.querySelector(".button-box");
const hiddenNav = document.getElementById("hidden-nav");
const human = document.getElementById("ImageHuman");
const ai = document.getElementById("ImageAi");
const text = document.getElementById("Result");
const schot = document.querySelector(".score__number");
const refreshBtn = document.getElementById("refresh-btn");
const hidd = document.querySelector(".hidd");

let choice;
let voice;

// Ai Robot shaxshiy
const [scissors, rock, paper] = [
  `img/scissors.svg`,
  `img/rock.svg`,
  `img/paper.svg`,
];

const aiHands = () => {
  const hands = [scissors, rock, paper];
  const randomIndex = Math.round(Math.random() * (hands.length - 1));
  return hands[randomIndex];
};

const robot = aiHands();
ai.src = robot;

//Tekshirish
let num = 0;
let result = "";

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    buttonBox.classList.add("hidden");
    hiddenNav.classList.remove("hidden");

    choice = icon.querySelector("img").getAttribute("data-info");
    human.src = choice;
    voice = choice;

    console.log(voice);
    console.log(robot);

    if (voice == robot) {
      result = "DRAW!";
      human.classList.add("animate-bounce");
      ai.classList.add("animate-bounce");

      setTimeout(() => {
        human.classList.remove("animate-bounce");
      }, 2500);
      setTimeout(() => {
        ai.classList.remove("animate-bounce");
      }, 2500);
    } else if (voice == "img/scissors.svg" && robot == "img/paper.svg") {
      result = "YOU ARE WINNER";
      human.classList.add("animate-bounce");

      setTimeout(() => {
        human.classList.remove("animate-bounce");
      }, 2500);
      if (num >= 0) {
        num++;
      }
      human.style.boxShadow = "1px 3px 0px 19px rgba(254,246,246,0.2)";
    } else if (voice == "img/paper.svg" && robot == "img/rock.svg") {
      result = "YOU ARE WINNER";
      human.classList.add("animate-bounce");

      setTimeout(() => {
        human.classList.remove("animate-bounce");
      }, 2500);
      if (num >= 0) {
        num++;
      }
      human.style.boxShadow = "1px 3px 0px 19px rgba(254,246,246,0.2)";
    } else if (voice == "img/rock.svg" && robot == "img/scissors.svg") {
      result = "YOU ARE WINNER";
      human.classList.add("animate-bounce");

      setTimeout(() => {
        human.classList.remove("animate-bounce");
      }, 2500);
      if (num >= 0) {
        num++;
      }
      human.style.boxShadow = "1px 3px 0px 19px rgba(254,246,246,0.2)";
    } else {
      result = "ROBOT IS WINNER";
      ai.classList.add("animate-bounce");

      setTimeout(() => {
        ai.classList.remove("animate-bounce");
      }, 2500);
      ai.style.boxShadow = "1px 3px 0px 19px rgba(254,246,246,0.2)";
      if ((num = 0)) {
        num;
      } else if (num > 0) {
        num--;
      }
    }

    text.innerHTML = `${result}`;
    schot.innerHTML = `${num}`;
  });
});
let score = parseInt(localStorage.getItem("score")) || 0;
schot.textContent = score;

refreshBtn.addEventListener("click", () => {
  hiddenNav.classList.remove("block");
  buttonBox.classList.add("hidden");
});
