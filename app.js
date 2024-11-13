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

let robot;

icons.forEach((button) => {
  button.addEventListener("click", () => {
    const aiHands = () => {
      const hands = [scissors, rock, paper];
      const randomIndex = Math.floor(Math.random() * hands.length);
      return hands[randomIndex];
    };

    robot = aiHands();
    ai.src = robot;

    buttonBox.style.display = "none";
    hiddenNav.style.display = "block";

    refreshBtn.addEventListener("click", () => {
      buttonBox.style.display = "block";
      hiddenNav.style.display = "none";
    });

    const choice = button.querySelector("img").getAttribute("data-info");
    human.src = choice;
    const voice = choice;

    console.log(voice);

    if (voice === robot) {
      result = "DRAW!";
      human.classList.add("animate-bounce");
      ai.classList.add("animate-bounce");

      setTimeout(() => {
        human.classList.remove("animate-bounce");
      }, 2500);
      setTimeout(() => {
        ai.classList.remove("animate-bounce");
      }, 2500);
    } else if (
      (voice === scissors && robot === paper) ||
      (voice === paper && robot === rock) ||
      (voice === rock && robot === scissors)
    ) {
      result = "YOU ARE WINNER";
      human.classList.add("animate-bounce");

      setTimeout(() => {
        human.classList.remove("animate-bounce");
      }, 2500);

      num++;
      human.style.boxShadow = "1px 3px 0px 19px rgba(254,246,246,0.2)";
    } else {
      result = "ROBOT IS WINNER";
      ai.classList.add("animate-bounce");

      setTimeout(() => {
        ai.classList.remove("animate-bounce");
      }, 2500);
      ai.style.boxShadow = "1px 3px 0px 19px rgba(254,246,246,0.2)";

      if (num > 0) {
        num--;
      } else {
        num = 0;
      }
    }

    text.innerHTML = result;
    schot.innerHTML = num;
  });
});

let num = Number(0);
let result = "";

let score = parseInt(localStorage.getItem("score")) || 0;
schot.textContent = score;
