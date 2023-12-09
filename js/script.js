function reverseString() {
    let input = document.getElementById("input-str").value;
    let outputstr = document.getElementById("output");
    outputstr.innerHTML = input.split("").reverse().join("");
  }


//random number
  var answer = Math.ceil(Math.random() * 10) + 1; 

function checkGuess() {
var guess = Number(document.getElementById("guess").value);
  
  if (guess == answer) {
      document.getElementById("result").innerHTML = "Congratulations! You guessed the number";
  }  else {
      document.getElementById("result").innerHTML = "Try again!.";

  }

}
// favourite Number
function Prediction() {
  let input = document.getElementById("Input").value;
  let num;
  switch (input) {
    case "1":
      num = "You are kind hearted person and keep smile always to bring colours in your life";
      break;
    case "2":
      num = "Work hard to reach your goal ,faithfull towards your work then success will come automaticlly";
      break;
    case "3":
      num = "You will gain special respect in your society and respects elders";
      break;
    case "4":
      num = "Thinking process is different from others and you are special  attraction in any occassion";
      break;
    case "5":
      num = "Take strong decisions in your life and stay on it";
      break;
    case "6":
      num = "Take your failures as lessons keep try unitil you win";
      break;
    case "7":
      num = "Respect people and trust your self always think positive";
      break;
      case "8":
      num = "Don't Disrespect your self, make the self proud ";
      break;
      case "9":
      num = "Learning things will take time keep prctice ";
      break;
      case "10":
      num = "Be patient things/situations will come under your control";
      break;
    default:
      num = "Please enter a number only between 1 and 10";
  }
  document.getElementById("Prediction").innerHTML = num;
}