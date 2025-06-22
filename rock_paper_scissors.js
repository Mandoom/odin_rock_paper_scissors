//  function generatecomputerValue() {
//     let generateComputerVaule = Math.floor(Math.random() * (3 - 1 + 1)) + 1; // generates a an integer between (min, max) -> inclusive 
//     if (generateComputerVaule == 1){
//         return "Rock"
//     }
//     if (generateComputerVaule == 2){
//         return "Paper"  
//     }
//     if (generateComputerVaule == 3){
//         return "Scissors"
//     }
//  }

//Global Variables
let playerScore = 0;
let computerScore = 0;
let roundCounter = 1;

//Computer Generatiuon Value
const computerChoice = () => {
    let value = Math.floor(Math.random() * 3) + 1;  // 1…3 inclusive
    if (value == 1) return "Rock";
    if (value == 2) return "Paper";
    return "Scissors";
}



const humanChoice = () => {
    let value =  parseInt(prompt(`Please: make your choice: 
        1: Rock
        2: Paper
        3; Scissors`)); //make sure the input is treated as a number.
    if ( value == 1 ) return "Rock";
    if (value == 2) return "Paper";
    if(value == 3) return "Scissors";
}

const updateComputerScore = () => {
   computerScore += 1
   console.log("Computer Score Updated")   
}
const updatePlayerScore = () => {
   playerScore += 1   
   console.log("Player Score Updated") 
}

 function playRound() {
   const humanValue = humanChoice() 
   console.log(humanValue)
   const computerValue = computerChoice()
   console.log(computerValue)

   switch (humanValue) {
      case "Rock":
            if (computerValue == "Rock") {
               console.log(`It's a tie:
                  Rock vs Rock`)

            }
            if (computerValue == "Paper") {
               console.log(`You Loose:
                  Rock Looses vs Paper`);
                  updateComputerScore()
            }

            if (computerValue == "Scissors") {
               console.log(`You Win:
                  Rock wins vs Scissor!`);
                  updatePlayerScore()
            }
         
         break;
         
      case "Paper":
          if (computerValue == "Rock") {
               console.log(`You Win:
                  Paper wins vs Rock`);
                  updatePlayerScore()
            }
            if (computerValue == "Paper") {
               console.log(`It's a tie:
                  Paper vs Paper`)
            }

            if (computerValue == "Scissors") {
               console.log(`You loose:
                  Paper looses vs Scissors!`);
                  updateComputerScore()
            }
         
         break;
   
      case "Scissors":

            if (computerValue == "Rock") {
               console.log(`You loose:
                  Scissor looses vs Rock`);
               updateComputerScore()
            }
            if (computerValue == "Paper") {
               
               console.log(`You Win:
                  Scissor wins Paper`);
                  updatePlayerScore()
            }

            if (computerValue == "Scissors") {
               console.log(`It's a tie:
                  Scissors vs Scissors!`)
            }
         break;
   }

   console.log(`Scores: 
      Player: ${playerScore}
      Computer: ${computerScore}`);
 }

 do {
   console.log(`Round ${roundCounter}`);
   playRound();
   console.log(`Player Score: ${playerScore}`);
   console.log(`Computer Score: ${computerScore}`);
   roundCounter += 1;
   
 } while (roundCounter < 6 );

function declareWinner() {

      if (playerScore > computerScore) {
         console.log("Player Wins!!")
      }

      if (computerScore > playerScore) {
         console.log("Computer Wins")
      }

      if (computerScore == playerScore) {
         console.log("Computer Wins")
      }
    
}

declareWinner()