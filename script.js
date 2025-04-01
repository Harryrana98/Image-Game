const wrapper = document.querySelector(".wrapper");
const startBtn = document.querySelector("#startBtn");
const gameContainer = document.querySelector(".game_container");
const imagesDivs = document.querySelectorAll(".imageDiv");
// const gamingZone = document.querySelector(".gamingZone");
const scoreDiv = document.querySelector(".scoreDiv");
const scoreSpan = document.querySelector("#scoreSpan");
const timerSpan = document.querySelector("#timerSpan");
const timerDiv = document.querySelector(".timerDiv");

let timming = 0;

imagesDivs.forEach((image) => {
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
  timerCount();
  scoreDiv.style.display = "block";

  gameContainer.style.display = "none";
  e.preventDefault();
  const mainDiv = document.createElement("div");
  mainDiv.className = "mainDiv";

  let imageCount = setInterval(() => {
    const imageSrc = e.target.src;
    const imagesDiv = document.createElement("div");
    imagesDiv.className = "imagesDiv";
    const img = document.createElement("img");
    img.addEventListener("click", function () {
      scoreSpan.innerHTML++;
      //   console.log(scoreSpan);
      // console.log();
    });
    img.src = imageSrc;

    // img.clientTop
    // img.clientLeft

    imagesDiv.append(img);
    mainDiv.append(imagesDiv);
    console.log(mainDiv);

    if (timming === 10) {
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

function RandomImagePosition() {}
