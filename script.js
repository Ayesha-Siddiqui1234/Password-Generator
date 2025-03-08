// Selectors
const range = document.getElementById("range");
const lengthValue = document.getElementById("lengthValue");
const passwordDisplay = document.querySelector(".upperBox");  //Use querySelector() when selecting elements by class, tag, attribute, or CSS selectors 
const generate = document.getElementById("generate");
const weak = document.getElementById("weak");
const boxes = document.querySelectorAll(".boxesForDiffLevel span");  //select all divs Selects all matching elements and returns an array.
const upperCase = document.getElementById("upperCase");
const lowerCase = document.getElementById("lowerCase");// Use getElementById() when selecting element

const Numbers = document.getElementById("Numbers");
const Symbols = document.getElementById("Symbols");

// Character Sets
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  //0-26   these are the indexes
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";   //26-51
const numbers = "0123456789";                       //52-61
const symbols = "!@#$%^&*()_+=-{}[]|:;,.<>?/";     //62-72

// Update Character Length Display
range.oninput = () => {       //The oninput event is a built-in event in JavaScript that triggers whenever the value of an input element changes.When the user types, slides, or selects any value in an input field (like a text box, slider, or number input), the oninput event fires immediately.
  lengthValue.textContent = range.value; //range value of sli bar of character length shown here
  updateStrength();
};

// Update Strength Bar
function updateStrength(){    //it will return the total number of checkboxes which we tick
let selectedOptions = [upperCase, lowerCase, Numbers, Symbols].filter(  
      (checkbox) => checkbox.checked).length;
       //The .filter() method filters out only the checked options.


  boxes.forEach((box) => (box.style.background = "transparent"));    //for each box it will mke the box transparent before applying the new color 
    if (range.value >= 14) {
    weak.textContent = "STRONG";
    boxes[0].style.background = "green";   //applying css on each box as an array
    boxes[1].style.background = "green";
    boxes[2].style.background = "green";
} else if (range.value >= 10) {
    weak.textContent = "MEDIUM";    //textContent just give the text not the other things
    boxes[0].style.background = "orange";
    boxes[1].style.background = "orange";
} else if (range.value >= 6) {
    weak.textContent = "TOO WEAK!";
    boxes[0].style.background = "red";
}
}

// Generate Password
function generatePassword(length) {  //it will generate the password
  let characters = "";
  if (upperCase.checked) characters += upperLetters;   //checking by id that upperCase check box if tick so in character (empty string ) we add the pre defined string of upperLettters e.g ABCDE.......
  if (lowerCase.checked) characters += lowerLetters;
  if (Numbers.checked) characters += numbers;
  if (Symbols.checked) characters += symbols;

  if (characters === "") return "Select Options!"; //if not seelcted so the character is empty

  let password = "";  //empty string to store the password
  for (let i = 0; i < length; i++) {   
    password += characters[Math.floor(Math.random() * characters.length)];  //we add in password the character and we get the characters by maths.randomgenerate the value from 0 to 1 0 is added 1 is not so e.g 0.7*characters.length characters.length would be the value which we have in password like we have NG57&j in so chaarter.length would be 6 so 0.7*6=4.2 and maths.floor make it onfloor like 4.2=4 so we get the 4th caharcter which is    similarly the loop work till the length end NG57&j so loop runs 6 times and then we get the password
  }
  return password;
}

// Generate Button Click
generate.onclick = () => {  //when click on the button to generate password
  const length = parseInt(range.value);     //it will convert the range value which we get from slide bar to int as it give us string as "12" so it convert 12
  passwordDisplay.textContent = generatePassword(length);    //it will call generate password function and new password is generated and just text or just passsword would display 
  updateStrength();
};

// Initialize
updateStrength();   //it will update the strength accoding to the weak strong or medium and call the updateStrength function
lengthValue.textContent = range.value; //it will change the charcter length according to the side bar as side bar change it also changes




range.oninput = () => {  //when user drag the slider
    lengthValue.textContent = range.value; // Automatically updates span the character length
    updateStrength(); // Updates password strength function call
    passwordDisplay.textContent = generatePassword(parseInt(range.value)); // Automatically generates password
  };
    