
var generatePassword = function () {

    // generate number array
    var numbersArray = [];

    for (var i = 0; i < 10; i++) {
        numbersArray.push(i);
    }

    // generate lowercase letter array
    var lowerCaseAlphabetsArray = [];

    for (var i = 0; i < 26; i++) {
        var lowerCaseChar = String.fromCharCode(97 + i);
        lowerCaseAlphabetsArray.push(lowerCaseChar);
    }

    // generate uppercase letter array

    var upperCaseAlphabetsArray = [];

    for (var i = 0; i < 26; i++) {
        var upperCaseChar = String.fromCharCode(65 + i);
        upperCaseAlphabetsArray.push(upperCaseChar);
    }

    // special character array

    var specialCharacterArray = ["!", "@", "#", "$", "%", "&", "*", "?", "/"];

    // get user password length

    var length = prompt("Choose your password length (between 8 and 128 characters)");

    if (!length) {
        return "";
    }
    else {

        // check that value enetered is a number between 8 and 128 characters

        while (length < 8 || length > 128 || isNaN(length)) {
            var length = prompt("Please choose a password between 8 and 128 characters");

            if (!length) {
                return "";
            }
        }
    }

    // get user choice for characters to use in password

    do {

        var number = confirm("Do want to use numbers?")

        var lowerCase = confirm("Do want to use lowercase letters?")

        var upperCase = confirm("Do want to use uppercase letters?");

        var specialCharacter = confirm("Do want to use special characters?");

        // check that at least one of the character options is chosen

        if (!number && !lowerCase && !upperCase && !specialCharacter) {
            alert("Please choose at least one character type to be included in your password.");
        }
        
    } while (!number && !lowerCase && !upperCase && !specialCharacter);

    // create master array of characters available to use in password from user choices

    var finalPassword = "";

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

    // generate string of random characters from master array matching password length chosen by user

    for (var i = 0; i < length; i++) {

        var test = [Math.floor(Math.random() * masterCharArray.length)];

        finalPassword = finalPassword.concat(masterCharArray[test]);

    }

    return finalPassword;

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
