function generatePassword({
  // prompt user for password length
  //Validate password length-- make sure its between 8-128 characters
  //prompt user for special characters
  
  })


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




