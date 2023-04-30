window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  //<canvas id="canvas" width="500" height="700"></canvas>
  //W3 flappy bird tutorial https://www.w3schools.com/graphics/game_intro.asp

  let canvas =  document.getElementById("canvas");
  let ctx = canvas.getContext("2d");

  let image = document.createElement("img");
    image.src = "images/road.png";
    image.alt = "road";

  let carImage = document.createElement("img");
    carImage.src = "images/car.png";
    carImage.alt = "car";

  const car = {
    image: carImage,
    x: 215
  };

  let randomX = Math.floor(Math.random() * 370) + 30;
  let randomWidth = Math.floor(Math.random()*300)
  let obstacles = []
  //ctx.fillRect(randomX, 0, randomWidth, 20);


  function startGame() {
    this.intervalId = setInterval(function (){
      ctx.clearRect(0, 0, 500, 700);
      ctx.drawImage(image, 0, 0, 500, 800);
      ctx.drawImage(carImage, car.x, 450, 70, 140);
    }, 60);
  }

  document.addEventListener("keydown", function (e){
    if(e.code == "ArrowLeft"){
      if(car.x>30) car.x-=10;
    };
    if(e.code == "ArrowRight"){
      if (car.x<405) car.x+=10;
    };
  })
};

// Make the car move 

