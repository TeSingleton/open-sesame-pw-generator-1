var numbers = ["0","1","2","3","4","5","6","7","8","9"];

var specialCharacters =["!","@","#","$","%","^","&","*","(",")","_","+"];

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const array = numbers.concat(specialCharacters, lowerCase, upperCase)

console.log(array);

// var numbers = "0123456789".split("") // split method
// var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")

// var characters = "0123457689abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+[];'./{}:>?|"
// prompt user for password length
  //Validate password length-- make sure its between 8-128 characters
  //prompt user for special characters

function generatePassword() {

  
  
  }


// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// complete JS code only
// what sort of data does my app need to work?
// What sorts of actions does my code need to complete?
// how to pull data into JS?
//storing all needed characters in variables.
//array collections.
// numbers   
//special characters
// lower case letters
// upper case latters




