let noOfChances = 10;
let dangerMode = false;

 function enterDangerMode(){
    danger = document.querySelector(".container-danger").classList.remove("hidden");
   };
    
  function onDangerMode(){
    dangerMode = true;
  body = document.querySelector("body");
    setTimeout(() => {
    let dangerInfo = document.querySelector(".danger-info");

    dangerInfo.innerHTML = `<span class="loading hidden">Wait till we are setting the environment</span>`;
    
    setTimeout(() => {
      dangerInfo.innerHTML += `<span class="loading hidden">Connecting the dark web</span>`;
    }, 500);
    
    setTimeout(() => {
      dangerInfo.innerHTML += `<span class="loading hidden">Submitting the bond</span>`;
    }, 1000);
    
    setTimeout(() => {
      dangerInfo.innerHTML += `<span class="loading hidden">Finishing up!</span>`;
    }, 1500);

    setTimeout(showDangerUI, 4000);
    
  document.querySelector(".loading").classList.remove("hidden");
  body.classList.remove("bg-indigo-950");
  body.classList.add("bg-black");
  })};
  
  function showDangerUI(){
    body.innerHTML = `<div class="container border border-amber-100 min-h-screen">
    <button class="border h-8 w-20 border-white text-red-800 float-right danger mt-1" onclick="enterDangerMode()">Exit Mode!</button>
    <p class="text-white mt-12">You have ${noOfChances} chance.</p>
  <div class="button-group flex justify-evenly mx-4 my-10">
    <button class="btn border border-orange-500 px-2 py-1 h-10 w-20" onclick="
      let userMove = 'Rock';
      let compMove = compChoice();
      let decision = deciding(userMove, compMove);
      result(userMove, compMove, decision)
      ">ROCK
    </button>
    
    <button class="btn border px-2 py-1 h-10 w-20 border-white text-blue-800" onclick="
      let userMove = 'Paper';
      let compMove = compChoice();
      let decision = deciding(userMove, compMove);
      result(userMove, compMove, decision)
      ">PAPER
    </button>
    
    <button class="btn border px-2 py-1 h-10 w-20 border-green-800" onclick="
      let userMove = 'Scissor';
      let compMove = compChoice();
      let decision = deciding(userMove, compMove);
    result(userMove, compMove, decision);
      ">SCISSOR
    </button>
  </div>
  
  <div class="score-displayer">
  <h4 id="user-choice"></h4>
  <h4 id="comp-choice"></h4>
  <h4 class="result mb-10"></h4>
  <h4 class="score flex flex-col"></h4>
  </div>
  <div class="game-over"></div>
  </div>`;
  retrieveScore();
  updateScore();
  };
  
  function check(){
  if(dangerMode){
      noOfChances--;
      showDangerUI();
    };
  if(noOfChances === 0){
      let btn = document.querySelectorAll(".btn");
      document.querySelector(".score-displayer").classList.add("hidden");
      let gameOver = document.querySelector(".game-over");
      btn[0].disabled = true;
      btn[1].disabled = true;
      btn[2].disabled = true;
    let h = document.createElement("h3");
    if(score.won > score.lost){
      alert("Ypu Won");
      h.innerText = "You won";
    }else if(score.won < score.lost){
      alert("You Lost");
      h.innerText = "You Lost";
    }else{
      alert("Out")
      h.innerText = "Tie";
    }
    gameOver.append(h);
    setTimeout(() => {
      window.location.href = "./index.html";
    },1000);
  }};