let score;
retrieveScore();

function retrieveScore(){
  let scoreString;
  if(!dangerMode){
   scoreString = localStorage.getItem('YourScore');
  } else{
   scoreString = null;
  }
    score = scoreString ? JSON.parse(scoreString) : {
      won: 0,
      lost: 0,
      tie: 0,
    }};
    
    updateScore();
    function updateScore(){
    document.querySelector('.score').innerText = `Score: 
      Won:- ${score.won} Lost:- ${score.lost} Tie:- ${score.tie}`;
    };

    function compChoice() {
      check();
      let randomNo = (Math.random() * 3);
      if (randomNo > 0 && randomNo <= 1) {
        return 'Rock';
      } else if (randomNo > 1 && randomNo <= 2) {
        return 'Paper';
      } else {
        return 'Scissor';
      }
    };

    function deciding(userMove, compMove) {
      if (userMove === 'Rock') {
        if (userMove === compMove) {
          score.tie++;
          return `It's a tie.`;
        } else if (compMove === 'Paper') {
          score.lost++;
          return `Computer won.`;
        } else {
          score.won++;
          return `User won.`;
        }
      } else if (userMove === 'Paper') {
        if (userMove === compMove) {
          score.tie++;
          return `It's a tie.`;
        } else if (compMove === 'Rock') {
          score.won++;
          return `User won.`;
        } else {
          score.lost++;
          return `Computer won.`;
        }
      } else {
        if (userMove === compMove) {
          score.tie++;
          return `It's a tie.`;
        } else if (compMove === 'Rock') {
          score.lost++;
          return `Computer Won.`;
        } else {
          score.won++;
          return `User won.`;
        }
      }
    };
    
   function result(userMove, compMove, decision){
     if(!dangerMode){
      localStorage.setItem('YourScore', JSON.stringify(score));
     }
      updateScore();
      scoreBoard(userMove, compMove, decision);
   };
    
   function scoreBoard(userMove, compMove, decision){
    document.querySelector('#user-choice').innerText = `User choice is ${userMove}`
    document.querySelector('#comp-choice').innerText = `Comp choice is ${compMove}`
    document.querySelector('.result').innerText = `And ${decision}`
   };
   
   function resetScore(){
     localStorage.clear();
     retrieveScore();
     updateScore();
   };