// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


// Password generator function
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
    
       // Alert if password length < 8 or > 128
    if (passwordLength < 8 || passwordLength > 128) {
        window.alert("password length must be between 8 to 128 charaters!")
        return generatePassword();
    }

    if (passwordLength >= 8 && passwordLength <= 128) {
    
        var getSpecial = window.confirm("click OK to confirm including special characters");

        // Include special charaters and get one random special character 
        if (getSpecial) {
            userChoice += passwordOption.specialChars;
            
            // Get random special character function
            function getRandomSpecial() {
                return passwordOption.specialChars[Math.floor(Math.random() * passwordOption.specialChars.length)];
            } 
            password += getRandomSpecial();
        }

        // Include number characters and get one random number
        var getNum = window.confirm("click OK to confirm including numeric characters");
        if (getNum) {
            userChoice += passwordOption.num;
            
            // Get random number function
            function getRandomNumber() {
                return passwordOption.num[Math.floor(Math.random() * 10)];
            }
            password += getRandomNumber();
        }

        // Include uppercase characters and get one random uppercase
        var getUpper = window.confirm("click OK to confirm including uppercase characters");
        if (getUpper) {
            userChoice += passwordOption.upperCase;

            // Get random uppercase function
            function getRandomUpper() {
                return passwordOption.upperCase[Math.floor(Math.random() * 26)];
            }
            password += getRandomUpper();
        }

        // Include lowercase characters and get one random lowercase
        var getLower = window.confirm("click OK to confirm including lowercase characters");
        if (getLower) {
            userChoice += passwordOption.lowerCase;

            // Get random lowercase function
            function getRandomLower() {
                return passwordOption.lowerCase[Math.floor(Math.random() * 26)];
            }
            password += getRandomLower();
        }

        // Alert user to choose at least one type of charater
        if(!userChoice) {
            window.alert("You must choose at least one charater! Please try again.")
            return generatePassword();
        }
    
        // Continue to get random charaters from use's choices to match the required passwordlength 
        while(password.length < passwordLength) {
            
            // Get random charater function base on userChoice
            function getRandomeChars() {
                return userChoice[Math.floor(Math.random() * userChoice.length)]
            }
            password += getRandomeChars();
        }
        
        // Convert password string to array
        let arr = password.split("");

        // Shuffle the password charaters by using The Fisher Yates Method
        for (let i = arr.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = arr[i];
        arr[i] = arr[j];
        arr[j] = k;
        
        //Output the value to of password to #password element
        document.querySelector("#password").value = arr.join("");
        }
    }
}
