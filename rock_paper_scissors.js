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


 const computerValue = () => {
    let value = Math.floor(Math.random() * 3) + 1;  // 1…3 inclusive
    if (value == 1) return "Rock";
    if (value == 2) return "Paper";
    return "Scissors";
 }

 
 let computerChoice = computerValue();
 console.log(computerChoice)