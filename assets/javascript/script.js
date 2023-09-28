// Assignment Code
var generateBtn = document.querySelector("#generate");

// define password libraries
var lcLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var ucLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];
// define password libraries end


function generatePassword() {
  var passwordLength = window.prompt("Please input the length of your Password (Min 8, Max 128)");
  var gPassword;
  var pwPool;

  if (!passwordLength){
    return "Your Secure Password";
  } else if (passwordLength >=8 && passwordLength <=128) {
    // set the type of characters
    var lsConfirm = window.confirm ("Do you want to include lowercases?");
    var usConfirm = window.confirm ("Do you want to include uppercases?");
    var numConfirm = window.confirm ("Do you want to include numbers?");
    var spConfirm = window.confirm ("Do you want to include Special Characters?");

    // consideration of different options the user choose
    // the following section considered the possiblities of when lowercase is chosen, all other 3 kinds are chosen or not. 8 possibilities total.
    if (lsConfirm) {
      gPassword = lcLetters[Math.floor(Math.random() * lcLetters.length)];
      pwPool = lcLetters;
      passwordLength--;    

      if (usConfirm) {
        gPassword = gPassword.concat(ucLetters[Math.floor(Math.random() * ucLetters.length)]);
        pwPool = pwPool.concat(ucLetters);
        passwordLength--;    
      }

      if (numConfirm) {
        gPassword = gPassword.concat(numbers[Math.floor(Math.random() * numbers.length)]);
        pwPool = pwPool.concat(numbers);
        passwordLength--;    
      }

      if (spConfirm) {
        gPassword = gPassword.concat(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
        pwPool = pwPool.concat(specialCharacters);
        passwordLength--; 
      }

     //the following section considered the possiblilities of when lowercase is not chosen, uppercase is chosen, all other 2 kinds are chosen or not. 4 possibilities total.
    } else if (usConfirm) {
        gPassword = ucLetters[Math.floor(Math.random() * ucLetters.length)];
        pwPool = ucLetters;
        passwordLength--;

        if (numConfirm) {
          gPassword = gPassword.concat(numbers[Math.floor(Math.random() * numbers.length)]);
          pwPool = pwPool.concat(numbers);
          passwordLength--;    
        }

        if (spConfirm) {
          gPassword = gPassword.concat(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
          pwPool = pwPool.concat(specialCharacters);
          passwordLength--; 
        }    

      //the following section considered the possiblilities of when lowercase and uppercase are not chosen, number is chosen, specialCharacters are chosen or not. 2 possibilities total.
    } else if (numConfirm) {
        gPassword = numbers[Math.floor(Math.random() * numbers.length)];
        pwPool = numbers;
        passwordLength--;   

        if (spConfirm) {
          gPassword = gPassword.concat(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
          pwPool = pwPool.concat(specialCharacters);
          passwordLength--; 
        }

      //the above section considered the possiblilities of when only specialCharacters is chosen. 1 possibilities total.
    } else if (spConfirm){
        gPassword = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
        pwPool = specialCharacters;
        passwordLength--; 

      //this section give a alert window of not choosing the correct type.
    } else {
      window.alert ("\u274C\u274C\u274C Please choose at least one type of the characters to generate your password")
      return "Your Secure Password";
    }

   // generate password letters, guarantee with at least one character that the user choose, the rest are randomly generated from the whole combined pool.
   for (var i=0; i<passwordLength; i++) {
    gPassword = gPassword.concat(pwPool[Math.floor(Math.random() * pwPool.length)]);
    
  }
   // suffle the password to create random result.
   // .split seperates the gPassword string into array with single characters. Use .sort to sort the variables into random order, Use .join to combine the array back to string.
    gPassword = gPassword.split("").sort(function(){return 0.5-Math.random()}).join("");
  return gPassword;
    
  //this section is when passwordlength is not a number or not within 8-128
  } else {
    window.alert ("\u274C\u274C\u274C  " + passwordLength + " is not valid, Please enter a number between 8 to 128");
    return generatePassword();
  }   
}
  
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
