//  function generateComputerChoice() {
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
const playerScore = 0;
const computerScore = 0;
//Computer Generatiuon Value
 const computerValue = () => {
    let value = Math.floor(Math.random() * 3) + 1;  // 1…3 inclusive
    if (value == 1) return "Rock";
    if (value == 2) return "Paper";
    return "Scissors";
 }

 console.log(computerValue())



 const humanChoice = () => {
    let value =  parseInt(prompt(`Please: make your choice: 
        1: Rock
        2: Paper
        3; Scissors`)); //make sure the input is treated as a number.
    if ( value == 1 ) return "Rock"
    if (value == 2) return "paper"
    return "Scissors"

 }


