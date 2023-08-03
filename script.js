// Assignment code here
var password = document.getElementById("password");
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
var selectedChars = "";
var password = ""


// var lowercase = confirm("Include lowercase characters?");
// var uppercase = confirm("Include uppercase characters?");
// var numeric = confirm("Include numeric characters?");
// var special = confirm("Include special characters?");

function generatePassword() {
  var length = prompt("Enter the desired length of your password (between 8 and 128 characters):");

  var lowercase = confirm("Include lowercase characters?");
  var uppercase = confirm("Include uppercase characters?");
  var numeric = confirm("Include numeric characters?");
  var special = confirm("Include special characters?");


  if (length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return "";
  }
  if (lowercase) {
    selectedChars += lowercaseChars;
  }
  if (uppercase) {
    selectedChars += uppercaseChars;
  }
  if (numeric) {
    selectedChars += numericChars;
  }
  if (special) {
    selectedChars += specialChars;
  }
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * selectedChars.length);
    password += selectedChars[randomIndex];
  }
  return password;


}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);