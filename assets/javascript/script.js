// Number Array
var numbersArray = [];

for (var i = 0; i < 10; i++) {
    numbersArray.push(i);
}

console.log(numbersArray);

// Lowercase Letter Array
var lowerCaseAlphabetsArray = [];

for (var i = 0; i < 26; i++) {
    var lowerCaseChar = String.fromCharCode(97 + i);
    lowerCaseAlphabetsArray.push(lowerCaseChar);
}

console.log(lowerCaseAlphabetsArray);

// Uppercase Letter Array

var upperCaseAlphabetsArray = [];

for (var i = 0; i < 26; i++) {
    var upperCaseChar = String.fromCharCode(65 + i);
    upperCaseAlphabetsArray.push(upperCaseChar);
}

console.log(upperCaseAlphabetsArray);

var specialCharacter = ["!", "@", "#", "$", "%", "&", "*", "?", "/"];

console.log(specialCharacter);

var length = prompt("Pick a number");

var upperCase = confirm("Do want to use uppercase letters?");

var userChoices = {

    length: length,

    upperCase: upperCase,    

}


var test = [Math.floor(Math.random() * upperCaseAlphabetsArray.length)]

console.log(test);



// console.log(userChoice, upperCase);

function generatePassword() {
    var finalPassword = "display here";
    return finalPassword
    
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
