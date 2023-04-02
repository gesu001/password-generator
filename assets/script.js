
var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", generatePassword);



function generatePassword() {
    const passwordOption = {
        specialChars : "`~!@#$%^&*()_+{}|:<>?-=[]\;',./",
        num : "0123456789",
        upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowerCase: "abcdefghijklmnopqrstuvwxyz"
    };

    var userChoice = "";
        
    var password = ""; 
    
    var passwordLength = window.prompt("How many charaters would you like your password to contain?");
    
   
    if (passwordLength < 8 || passwordLength > 128) {
        window.alert("password length must be between 8 to 128 charaters!")
        return generatePassword();
    }

    if (passwordLength >= 8 && passwordLength <= 128) {
    
        var getSpecial = window.confirm("click OK to confirm including special characters");

        
        if (getSpecial) {
            userChoice += passwordOption.specialChars;
            

            function getRandomSpecial() {
                return passwordOption.specialChars[Math.floor(Math.random() * passwordOption.specialChars.length)];
            } 
            password += getRandomSpecial();
        }

  
        var getNum = window.confirm("click OK to confirm including numeric characters");
        if (getNum) {
            userChoice += passwordOption.num;
            

            function getRandomNumber() {
                return passwordOption.num[Math.floor(Math.random() * 10)];
            }
            password += getRandomNumber();
        }

   
        var getUpper = window.confirm("click OK to confirm including uppercase characters");
        if (getUpper) {
            userChoice += passwordOption.upperCase;

         
            function getRandomUpper() {
                return passwordOption.upperCase[Math.floor(Math.random() * 26)];
            }
            password += getRandomUpper();
        }

    
        var getLower = window.confirm("click OK to confirm including lowercase characters");
        if (getLower) {
            userChoice += passwordOption.lowerCase;

          
            function getRandomLower() {
                return passwordOption.lowerCase[Math.floor(Math.random() * 26)];
            }
            password += getRandomLower();
        }

     
        if(!userChoice) {
            window.alert("You must choose at least one charater! Please try again.")
            return generatePassword();
        }
    
     
        while(password.length < passwordLength) {
            
          
            function getRandomeChars() {
                return userChoice[Math.floor(Math.random() * userChoice.length)]
            }
            password += getRandomeChars();
        }
        
    
        let arr = password.split("");

     
        for (let i = arr.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = arr[i];
        arr[i] = arr[j];
        arr[j] = k;
        
    
        document.querySelector("#password").value = arr.join("");
        }
    }
}
