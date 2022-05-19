// DOM elements
let inputValue = document.getElementById("range-el");
let lengthValue = document.getElementById("length-el");
let strengthValue = document.getElementById("strength-el");
let lowercaseEl = document.getElementById("lowercase");
let uppercaseEl = document.getElementById("uppercase");
let numbersEl = document.getElementById("numbers");
let symbolsEl = document.getElementById("symbols");
let passwordOne = document.getElementById("password-el1");
let passwordTwo = document.getElementById("password-el2");
let passwordThree = document.getElementById("password-el3");
let passwordFour = document.getElementById("password-el4");

//assignments
const randomFunc = {
    lower: randomLowercase,
    upper: randomUppercase,
    number: randomNumber,
    symbol: randomSymbol,
}

//check inputs
function checkInputs() {
    const length = +inputValue.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
    
    passwordOne.value = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
    passwordTwo.value = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
    passwordThree.value = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
    passwordFour.value = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
}

//generate password function
function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = "";

    const typesCount = lower + upper + number + symbol;

    // console.log("typesCount: ", typesCount);

    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter (item => Object.values(item)[0]);

    // console.log("typesArr: ", typesArr);

    if (typesCount === 0) {
        return '';
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            
            // console.log("funcName: ", funcName)

            generatedPassword += randomFunc[funcName]();
        })
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}

//generator functions
function randomLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 27) + 97);
}

function randomUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 27) + 65);
}

function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.'"
    return symbols[Math.floor(Math.random() * symbols.length)];
}

//renders text
function renderText() {
    lengthValue.textContent = inputValue.value + " characters";
    if (inputValue.value < 7) {
        strengthValue.textContent = "Weak";
    } else if (inputValue.value < 9) {
        strengthValue.textContent = "Fairly Strong";
    } else if(inputValue.value <18) {
        strengthValue.textContent = "Strong";  
    } else if (inputValue.value < 28) {
        strengthValue.textContent = "Unbreakable";
    } else strengthValue.textContent = "Overkill"
}

//runs functions on input
function runFunctions() {
    renderText();
    checkInputs();
}

//runs functions on page load
window.addEventListener('load', (event) => {
    runFunctions();
  });

// One click copy feature
function copyToClipboard1() {
    var copyPassword = document.querySelector("#password-el1");
    copyPassword.select();
    navigator.clipboard.writeText(copyPassword.value);
}

function copyToClipboard2() {
    var copyPassword = document.querySelector("#password-el2");
    copyPassword.select();
    navigator.clipboard.writeText(copyPassword.value);
}

function copyToClipboard3() {
    var copyPassword = document.querySelector("#password-el3");
    copyPassword.select();
    navigator.clipboard.writeText(copyPassword.value);
}

function copyToClipboard4() {
    var copyPassword = document.querySelector("#password-el4");
    copyPassword.select();
    navigator.clipboard.writeText(copyPassword.value);
}

//lottie files
let playAnim = document.getElementById('animContainer')

var animItem = bodymovin.loadAnimation({
    container: document.getElementById('animContainer'),
    renderer: 'svg',
    autoplay: false,
    loop: false,
    path: 'https://assets8.lottiefiles.com/packages/lf20_vmpyxuza.json' // lottie file path
  })

 playAnim.addEventListener("click", () => {
    animItem.goToAndPlay(0, true);
 })
