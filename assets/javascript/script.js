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

// Special Character Array

var specialCharacter = ["!", "@", "#", "$", "%", "&", "*", "?", "/"];

console.log(specialCharacter);

// User Choice Collection Section


// Password length choice

var generatePassword = function () {

    var length = prompt("Choose your password length (between 8 and 128 characters)");

    if (!length) {
        return;
    }
    else {

        while (length < 8 || length > 128 || isNaN(length)) {
            var length = prompt("Please choose a password between 8 and 128 characters");

            if (!length) {
                return;
            }
        }
    }

    do {

        var number = confirm("Do want to use numbers?")

        var lowerCase = confirm("Do want to use lowercase letters?")

        var upperCase = confirm("Do want to use uppercase letters?");

        var specialCharacter = confirm("Do want to use special characters?");

        if (!number && !lowerCase && !upperCase && !specialCharacter) {
            alert("Please choose at least one character type to be included in your password.");
        }
    } while (!number && !lowerCase && !upperCase && !specialCharacter);


    var userChoices = {

        length: length,
        number: number,
        lowerCase: lowerCase,
        upperCase: upperCase,
        specialCharacter: specialCharacter,
    }

    masterCharArray = [];

    console.log(number);
    console.log(lowerCase);
    console.log(upperCase);
    console.log(specialCharacter);

}
var test = [Math.floor(Math.random() * numbersArray.length)]

console.log(length);

console.log(test);



// console.log(userChoice, upperCase);

// function generatePassword() {
//     var finalPassword = "display here";
//     return finalPassword

// }

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
