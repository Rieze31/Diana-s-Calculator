


let buttons = document.querySelectorAll(".cell");
let inputField = document.querySelector("#display");
let memory = 0;
let memoryLabel = document.querySelector("#memory");
let justEvaluated = false;
let count = 0;
let message = [
    "Hi Diana!...",
    "Ang ganda mo sobra haahhaha 😁😁...",
    "Goodluck satin this school year kakayanin natin to...",
    "Wag mo kalimutan buldak natin ah eme WHAHAHAHA...",
    "Laro tau rolbokss WHAHAHHA joke lng pasukan na...",
    "Sana matupad mga wish mo",
    "Thank Youu sayo ng maramiii...",
    "Have a great day Diana!❤❤",
]
buttons.forEach(button => {

  button.addEventListener("click", () => {



    const clickedLetter = button.value;
    // Clear input if last action was "=" and the next button is a number/operator
    if (justEvaluated && !["MR", "MC", "M+", "M-"].includes(clickedLetter)) {
      inputField.value = "";
      justEvaluated = false;
    }
    if (clickedLetter === "C") {
      inputField.value = "";
    } else if (clickedLetter === "=") {
      try {
         if (count == 0) {
          inputField.value = message[count];
          count++;
        } else if (count == 1) {
          inputField.value = message[count];
          
          count++;
        } else if (count == 2) {
          inputField.value = message[count];
          count++;
        } else if (count == 3) {
          inputField.value = message[count];
          count++;
        } else if (count == 4) {
          inputField.value = message[count];
          count++;
        } else if (count == 5) {
          inputField.value = message[count];
          count++;
        } else if (count == 6) {
          inputField.value = message[count];
          count++;
        } else if (count == 7){
          inputField.value = message[count];
          count++;
        } else {
          inputField.value = eval(inputField.value);
        }
      } catch (error) {
        inputField.value = "Error";
      }
      justEvaluated = false;
    } else if(clickedLetter == "DEL"){
        inputField.value = inputField.value.slice(0,-1)
        justEvaluated = false;
    } else if(clickedLetter == "M+"){
      try {
        memoryLabel.style.display = "block";
        inputField.value = eval(inputField.value);
        memory += Number(inputField.value);
      } catch (error) {
        inputField.value = "Error";
      }
      
      justEvaluated = true;
    } else if(clickedLetter == "M-"){
      try {
         memoryLabel.style.display = "block";
        inputField.value = eval(inputField.value);
        memory -= Number(inputField.value);
      } catch (error) {
        inputField.value = "Error";
      }
      justEvaluated = true;
    } else if(clickedLetter == "MR"){
      try {
        memoryLabel.style.display = "block";
        inputField.value = memory;
      } catch (error) {
        inputField.value = "Error";
      }
      
      justEvaluated = true;
    } else if(clickedLetter == "MC"){
      memoryLabel.style.display = "none";
      memory = 0;
      justEvaluated = true;
    }
    
    else{
        inputField.value += clickedLetter;
        justEvaluated = false;
    }
    
  });
 
});
