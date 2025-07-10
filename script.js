let buttons = document.querySelectorAll(".cell");
let inputField = document.querySelector("#display");
let count = 0;
let message = [
    "Hi Diana!...",
    "Ang ganda mo sobra haahhaha...",
    "Goodluck satin this school year kakayanin natin to...",
    "Wag mo kalimutan buldak natin ah eme WHAHAHAHA...",
    "Laro tau rolbokss WHAHAHHA joke lng matulog ka na...",
    "Huy bat andito ka pa, matulog ka na WHAHAHA...",
    "Goodnighttt Sleepwell ❤❤",
]
buttons.forEach(button => {

  button.addEventListener("click", () => {

    const clickedLetter = button.value;
    
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
        } 
      } catch (error) {
        inputField.value = "Error";
      }
    } else if(clickedLetter == "DEL"){
        inputField.value = inputField.value.slice(0,-1)
    } else{
        inputField.value += clickedLetter;
    }
    
  });
 
});
