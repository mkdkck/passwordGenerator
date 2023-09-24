// Assignment Code
var generateBtn = document.querySelector("#generate");

// define password libraries
var lcLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var ucLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
// cant put special cararcters ",[,] and \ init
var specialCharacters = [" ","!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","^","_","`","{","|","}","~"];
// define password libraries end


function generatePassword() {
  var passwordLength = window.prompt("Please input the length of your Password (Min 8, Max 128)");
  if (!passwordLength){
    return "Your Secure Password";
  } else if (passwordLength >=8 && passwordLength <=128) {
    passwordCombination()
  } else {
    window.alert ("\u274C\u274C\u274C  " + passwordLength + " is not valid, Please enter a number between 8 to 128");
    return generatePassword();
  }

  function passwordCombination() {
    var lsConfirm = window.confirm ("Do you want to include lowercases?");
    var usConfirm = window.confirm ("Do you want to include uppercases?");
    var numConfirm = window.confirm ("Do you want to include numbers?");
    var spConfirm = window.confirm ("Do you want to include Special Characters?");
    var password;
    var pwPool;
    
    // consideration of different options the user choose
    if (lsConfirm) {
      password = lcLetters[Math.floor(Math.random() * lcLetters.length)];
      pwPool = lcLetters;
      passwordLength--;    

      if (usConfirm) {
        password = password.concat(ucLetters[Math.floor(Math.random() * ucLetters.length)]);
        pwPool = pwPool.concat(ucLetters);
        passwordLength--;    
      }

      if (numConfirm) {
        password = password.concat(numbers[Math.floor(Math.random() * numbers.length)]);
        pwPool = pwPool.concat(numbers);
        passwordLength--;    
      }

      if (spConfirm) {
        password = password.concat(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
        pwPool = pwPool.concat(specialCharacters);
        passwordLength--; 
      }
    } else if (usConfirm) {
        password = ucLetters[Math.floor(Math.random() * ucLetters.length)];
        pwPool = ucLetters;
        passwordLength--;

        if (numConfirm) {
          password = password.concat(numbers[Math.floor(Math.random() * numbers.length)]);
          pwPool = pwPool.concat(numbers);
          passwordLength--;    
        }

        if (spConfirm) {
          password = password.concat(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
          pwPool = pwPool.concat(specialCharacters);
          passwordLength--; 
        }    
    } else if (numConfirm) {
        password = numbers[Math.floor(Math.random() * numbers.length)];
        pwPool = numbers;
        passwordLength--;   

        if (spConfirm) {
          password = password.concat(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
          pwPool = pwPool.concat(specialCharacters);
          passwordLength--; 
        }    
    }else if (spConfirm){
        password = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
        pwPool = specialCharacters;
        passwordLength--; 
    } else {
      window.alert ("\u274C\u274C\u274C Please choose at least one type of the characters to generate your password")
    }

    console.log(password);
   // generate password letters, guarantee with at least one character that the user choosed, the rest are randomly generated from the whole combined pool.
   for (var i=0; i<passwordLength; i++) {
    password = password.concat(pwPool[Math.floor(Math.random() * pwPool.length)]);
   }
   console.log(password);
   // suffle the password to create random result.
   password.sort(function(){return 0.5 - Math.random()});

   console.log(password);
  //  return password;
  }
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
