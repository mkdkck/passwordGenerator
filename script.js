// Assignment Code
var generateBtn = document.querySelector("#generate");

// define password libraries
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var ucLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
// cant put special cararcters ",[,] and \ init
var specialCharacters = [" ","!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","^","_","`","{","|","}","~"];
// define password libraries end

function generatePassword() {
  var passwordLength = window.prompt("Please choose the Length of your Password (Min 8, Max 128)");
  if (!passwordLength){
    return;
  } else if (passwordLength >= 8 && passwordLength <=128) {
    
    
  } else {window.alert ("Please enter a number between 8 to 128")}
}








function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
