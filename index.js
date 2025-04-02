const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const passwordOne = document.getElementById("pwd-one");
const passwordTwo = document.getElementById("pwd-two");
const generatePassword = document.getElementById("generate-password");
const pwdSize = document.getElementById("password-size");

function fallbackCopyText(text) {
      const textarea = document.createElement('textarea');
      textarea.value = text;

      // Position off-screen so it's not visible
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';

      document.body.appendChild(textarea);
      textarea.select();

      try {
        document.execCommand('copy');
      } catch (err) {
        console.error("Failed to copy text with fallback:", err);
      }

      document.body.removeChild(textarea);
}

passwordOne.addEventListener('click', async () => {
    const textToCopy = passwordOne.textContent;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(textToCopy);
        showSnackbar();
      } catch (err) {
        console.error("Failed to copy with Clipboard API, trying fallback: ", err);
        fallbackCopyText(textToCopy);
      }
    } else {
      fallbackCopyText(textToCopy);
    }
})

passwordTwo.addEventListener('click', async () => {
    const textToCopy = passwordTwo.textContent;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(textToCopy);
        showSnackbar();
      } catch (err) {
        console.error("Failed to copy with Clipboard API, trying fallback: ", err);
        fallbackCopyText(textToCopy);
      }
    } else {
      // Fallback
      fallbackCopyText(textToCopy);
    }
})

generatePassword.addEventListener('click', async () => {
    let inputVal = pwdSize.value;
    let pwdOne = "";
    let pwdTwo = "";
    
    if(inputVal=="" || inputVal===0){
        inputVal = 8;
    }
    
    for(let i=0; i<inputVal; i++){
        const randomCharOne = Math.floor(Math.random() * characters.length);
        const randomCharTwo = Math.floor(Math.random() * characters.length);
        
        pwdOne += characters[randomCharOne];  // characters[randomCharOne], not randomCharOne
        pwdTwo += characters[randomCharTwo];
    }
    passwordOne.textContent = pwdOne;
    passwordTwo.textContent = pwdTwo;
})

function showSnackbar() {
  snackbar.textContent = "Password has been copied!"; // Update the message if desired
  
  // Add the "show" class to fade in
  snackbar.classList.add("show");
  
  // After 3 seconds, remove the show class to fade out
  setTimeout(() => {
    snackbar.classList.remove("show");
  }, 1200);
}


