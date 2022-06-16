var numbers = ["0","1","2","3","4","5","6","7","8","9"];

var specialCharacters =["!","@","#","$","%","^","&","*","(",")","_","+"];

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var passwordLength

var generatePassword

var passwordText

// var allChar = array // these may need to move

const array = numbers.concat(specialCharacters, lowerCase, upperCase)

console.log(array);

// Validate password length-- make sure its between 8-128 characters
  // prompt user for special characters
  // If password length is greater than or equal to 8 and password length is greater than or equal to 128


// prompt user for password length  //prompt code sourced from javapoint.com
var passwordLength = true
function passwordLength () {
var a = prompt("Enter Password Length")
  
}

function generatePassword() {
 var hello = "Enter Password Length";
  var input = prompt (hello, "8-128 characters");
  if (i => 8) {
    prompt ("Password must be atleast 8 Characters")
  } else if (i ==< 8){
    prompt ("Apply Special Characters")
  }
//  let input = { 
//   newPassword

  

  }

//  confirm(input);

// if(!variableA && variableB ) {
//   //end the function early
//   //alert the user they had bad data
//   return"";
// }
  

  
  
  
//declare a new empty string to store the password characters

for (i = 0; i < passwordLength; i++)

//randomly select chars
//adding that chat to building password string

//return completed string;


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




