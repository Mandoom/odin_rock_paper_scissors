 function generateComputerChoice() {
    let generateComputerVaule = Math.floor(Math.random() * (3 - 1 + 1)) + 1; // generates a an integer between (min, max) -> inclusive 
    if (generateComputerVaule == 1){
        return "Rock"
    }
    if (generateComputerVaule == 2){
        return "Paper"  
    }
    if (generateComputerVaule == 3){
        return "Scissors"
    }
 }



 
 let computerChoice = generateComputerChoice();
 console.log(computerChoice)