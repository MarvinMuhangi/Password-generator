let display = document.querySelector('.text-field');
const copyBtn = document.querySelector('.copy-btn');
let slider = document.querySelector('.length-slider');
let lengthNum = document.querySelector('.length-num');
let lowerCase = document.querySelector('#lower');
let upperCase = document.querySelector('#Upper')
let number = document.querySelector('#Numbers');
let characters = document.querySelector('#Characters');
let generateBtn = document.querySelector('.btn');
let allCheckbox = document.getElementsByName('checkbox')


// console.log(allCheckbox)
window.onload = function() {;
    slider.value = 0; // Set your default value here
};



//creating an EventListener for all checkboxes.

    for(i = 0; i < allCheckbox.length; i++){
        allCheckbox[i].addEventListener('click', generatePassword);
        
    }


//Creating an event listener for the copy button
copyBtn.addEventListener('click', copy)
function copy(){
    navigator.clipboard.writeText(display.value)
};


//An event Listener for the generate password button.
generateBtn.addEventListener('click', pick)


// lengthNum.innerHTML= slider.vlaue
 slider.oninput = function () {
   lengthNum.innerHTML = slider.value;
   
}

//The fucntion that randomly genrates the Password.
function generatePassword(){
    let pass = '';
    let allowedChars = '';
    let lowercasechars = "qwertyuiopasdfghjklzxcvbnm";
    let uppercasechars = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let  numberchars = "0123456789";
    let symbolchars = "!@#$%^&*()_+-={}[];<>";
    if(lowerCase.checked){
        allowedChars += lowercasechars;
       
    } else if(lowerCase.checked === false){
        allowedChars += " "
    }

    if(upperCase.checked){
        allowedChars += uppercasechars;
 
    } else if(upperCase.checked === false){
        allowedChars += " "
    }

    if (number.checked ){
        allowedChars += numberchars

    } else if(number.checked === false){
        allowedChars += " "
    }

    if(characters.checked){
        allowedChars += symbolchars

    } else if(characters.checked === false){
        allowedChars += " "
    }
   
    for (let i = 0; i < lengthNum.innerHTML; i++){
        let randomIndex = Math.floor(Math.random() * allowedChars.length)
        pass+= allowedChars[randomIndex]; 
  
    }
display.value = pass

};


//The fucntion that listens on the generate password button
function pick(){   
   generatePassword()
};



































