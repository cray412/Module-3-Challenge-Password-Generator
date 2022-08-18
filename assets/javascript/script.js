
var generatePassword = function () {

    // Number Array
    var numbersArray = [];

    for (var i = 0; i < 10; i++) {
        numbersArray.push(i);
    }

    // Lowercase Letter Array
    var lowerCaseAlphabetsArray = [];

    for (var i = 0; i < 26; i++) {
        var lowerCaseChar = String.fromCharCode(97 + i);
        lowerCaseAlphabetsArray.push(lowerCaseChar);
    }

    // Uppercase Letter Array

    var upperCaseAlphabetsArray = [];

    for (var i = 0; i < 26; i++) {
        var upperCaseChar = String.fromCharCode(65 + i);
        upperCaseAlphabetsArray.push(upperCaseChar);
    }

    // Special Character Array

    var specialCharacterArray = ["!", "@", "#", "$", "%", "&", "*", "?", "/"];

    // User Choice Collection Section

    // Password length choice

    var length = prompt("Choose your password length (between 8 and 128 characters)");

    if (!length) {
        return;
    }
    else {

        // Check that value enetered is a number between 8 and 128 characters

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

    var masterCharArray = [];

    if (number) {
        var masterCharArray = masterCharArray.concat(numbersArray)
    }

    if (lowerCase) {
        var masterCharArray = masterCharArray.concat(lowerCaseAlphabetsArray)
    }

    if (upperCase) {
        var masterCharArray = masterCharArray.concat(upperCaseAlphabetsArray)
    }

    if (specialCharacter) {
        var masterCharArray = masterCharArray.concat(specialCharacterArray)
    }

    var finalPassword = "";

    for (var i = 0; i < length; i++) {

        var test = [Math.floor(Math.random() * masterCharArray.length)];

        finalPassword = finalPassword.concat(masterCharArray[test]);

    }

    return finalPassword;

    console.log(length);
    console.log(masterCharArray);
    console.log(test);
    console.log(finalPassword);

    // currently working on...
    // var userChoices = {

    //     length: length,
    //     number: number,
    //     lowerCase: lowerCase,
    //     upperCase: upperCase,
    //     specialCharacter: specialCharacter,
    // }

    // for (var key in userChoices) {
    //     if 
    // }

    // ... end of currently working on.




    // console.log(userChoices);

}

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
