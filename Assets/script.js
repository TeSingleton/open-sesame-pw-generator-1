var characterLength = []; //open array to be called--characters
var pwArray = []; // open array to be called --compiled characters for password

var specialCharArr = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
];
var lowerCaseArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Assignment Code

var generateBtn = document.querySelector("#generate");
// copy btn added to project as a way to test my understanding
var copyBtn =document.querySelector ("#copy")

function thePrompts() { //this function allows application to select characters via page prompts--- code snippet sourced via 
  pwArray = [];

  characterLength = parseInt(
    prompt("How many characters do you want fam? 8-128")
  ); //NaN= not a number //parseInt- allows the string to be converted into an interger.

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    // if character length is not a number or character length is greater than 128   //confirmation that the stored value is not a number
    alert("Come on mannnn, Pick ......betweeeeen.....8 and 128!!"); //figure out how to make the prompt retun upon invalid inputs
    return false;
  }

  if (confirm("You need some lowercase letters in that password fam?")) {
    pwArray = pwArray.concat(lowerCaseArr);
  }
  if (confirm("What about some Uppercase letters ?")) {
    pwArray = pwArray.concat(upperCaseArr);
  }
  if (confirm(".....You need some of them (whispers)....Special Characters?"));
  {
    pwArray = pwArray.concat(specialCharArr);
  }
  if (confirm("Any numbers?")) {
    pwArray = pwArray.concat(numberArr);
  }
  return true;
}

generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
  var theRightPrompts = thePrompts(); //returns true or false
  var passwordText = document.querySelector("#password");

  if (theRightPrompts) {
    var finalPassword = generatePassword();

    passwordText.value = finalPassword;
  } else {
    passwordText.value = "";
  }
  // debugger
  function generatePassword() {
    var password = "";
    for (var i = 0; i < characterLength; i++) {
      var randomChar = Math.floor(Math.random() * pwArray.length);
      password = password + pwArray[randomChar];
    }
    // console.log("woord")

    return password;
  }

  copyBtn.addEventListener("click", copyPassword);

  function copyPassword() {
    var copyText = document.getElementById("password");

    copyText.select();
    copyText.setSelectionRange(0,99999)

    navigator.clipboard.writeText(copyText.value);

    alert("Password Copied To Clipboard ✅: " )
  }
}