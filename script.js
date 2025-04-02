const wrapper = document.querySelector(".wrapper");
const startBtn = document.querySelector("#startBtn");
const gameContainer = document.querySelector(".game_container");
const AvatarDivs = document.querySelectorAll(".AvatarDiv");
// const gamingZone = document.querySelector(".gamingZone");
const scoreDiv = document.querySelector(".scoreDiv");
const scoreSpan = document.querySelector("#scoreSpan");
const timerSpan = document.querySelector("#timerSpan");
const timerDiv = document.querySelector(".timerDiv");

let timming = 1;

AvatarDivs.forEach((image) => {
  image.addEventListener("click", displaygame);
  // console.log(image);
});

function timerCount() {
  timerDiv.style.display = "block";

  let time = setInterval(() => {
    timerSpan.innerHTML = timming;
    // console.log(timming);
    ++timming;

    if (timming > 10) {
      console.log(timming);
      clearInterval(time);
    }
  }, 1000);

  // timerSpan.innerHTML=--timming
}

function displaygame(e) {
  e.preventDefault();
  timerCount();
  scoreDiv.style.display = "block";

  gameContainer.style.display = "none";
  const mainDiv = document.createElement("div");
  mainDiv.className = "mainDiv";

  let imageCount = setInterval(() => {
    const imageSrc = e.target.src;
    const AllImageContainer = document.createElement("div");
    AllImageContainer.className = "AllImageContainer";
    const img = document.createElement("img");
    img.src = imageSrc;
    img.className = "imageImg";
    AllImageContainer.append(img);
    mainDiv.append(AllImageContainer);

    img.style.left = RandomImagePosition("x") + "px";
    img.style.top = RandomImagePosition("y") + "px";
    img.addEventListener("click", function () {
      scoreSpan.innerHTML++;
      img.remove();
    });

    console.log(mainDiv);

    if (timming === 10) {
      // gameContainer.style.display = "block";

      clearInterval(imageCount);
    }
  }, 1000);

  wrapper.append(mainDiv);
}

startBtn.addEventListener("click", button);

function button() {
  startBtn.style.display = "none";
  gameContainer.style.display = "block";
}

function RandomImagePosition(axis) {
  const RandomPosition = Math.floor(Math.random() * 1000);
  // return RandomPosition;

  if (axis === "x") {
    if (RandomPosition < 50 || RandomPosition > 1000)
      return RandomImagePosition(axis);
    else return RandomPosition;
  } else {
    if (RandomPosition < 50 || RandomPosition > 380)
      return RandomImagePosition(axis);
    else return RandomPosition;
  }
}
