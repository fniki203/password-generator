
// Maybe creating an object; like -> combination = {alphabet: "abcdefghijklmnopqrstuvwxyz", numbers: "0123456789"......}
let alphabet = "abcdefghijklmnopqrstuvwxyz"; //to upper
let numbers = '0123456789';
let symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
let enabled = true
let lowerEnabled = true

function passwordGenerator(len) {
    if (enabled === true && lowerEnabled === true) {
        let length = (len) ? (len) : (10);
        let password = "";
        let character = "";
        while (password.length < length) {
            //Maybe change the name "item1,2,3" to more understandable name?? like "apl" or "num"
            item1 = Math.ceil(Math.random() * alphabet.length);
            item2 = Math.ceil(Math.random() * numbers.length);
            item3 = Math.ceil(Math.random() * symbols.length);
            element = alphabet.charAt(item1);
            element = (password.length % 2 == 0) ? (element.toUpperCase()) : (element);
            character += element;
            character += numbers.charAt(item2);
            character += symbols.charAt(item3);
            password = character;
            if (password.length < 1) {
                break;
            }
        }
        password = password.split('').sort(function () { return 0.5 - Math.random() }).join('');
        return password.substr(0, len);
    }
}

function passwordGeneratorLower(len) {
    if (lowerEnabled === true) {
        let length = (len) ? (len) : (10);
        let password = "";
        let character = "";
        while (password.length < length) {
            //Maybe change the name "item1,2,3" to more understandable name?? like "apl" or "num"
            item1 = Math.ceil(Math.random() * alphabet.length);
            item2 = Math.ceil(Math.random() * numbers.length);
            item3 = Math.ceil(Math.random() * symbols.length);
            element = alphabet.charAt(item1);
            character += element;
            character += numbers.charAt(item2);
            character += symbols.charAt(item3);
            password = character;
            if (password.length < 1) {
                break;
            }
        }
        password = password.split('').sort(function () { return 0.5 - Math.random() }).join('');
        return password.substr(0, len);
    }
}

function passwordGeneratorUpper(len) {
    let length = (len) ? (len) : (10);
    let password = "";
    let character = "";
    while (password.length < length) {
        //Maybe change the name "item1,2,3" to more understandable name?? like "apl" or "num"
        item1 = Math.ceil(Math.random() * alphabet.length);
        item2 = Math.ceil(Math.random() * numbers.length);
        item3 = Math.ceil(Math.random() * symbols.length);
        element = alphabet.charAt(item1);
        character += element.toUpperCase();
        character += numbers.charAt(item2);
        character += symbols.charAt(item3);
        password = character;
        if (password.length < 1) {
                break;
            }
    }
    password = password.split('').sort(function () { return 0.5 - Math.random() }).join('');
    return password.substr(0, len);
}

const arrow = document.querySelector('#arrow')
document.querySelector("#pwInput").value = passwordGenerator(12)
const pwInput = document.querySelector('#pwInput')




arrow.addEventListener('click', function () {
    if (lowerEnabled === false) {
        pwInput.value  = passwordGeneratorUpper(howLongRange.value);
    }
    else if (enabled === false) {
        pwInput.value = passwordGeneratorLower(howLongRange.value);
    }
    else {
        pwInput.value = passwordGenerator(howLongRange.value)

    }
})




//Maybe change the "hoeLongRange" to "range"
const howLongRange = document.querySelector('#howLongRange')
//This one as well; "intRange"
const howLongInt = document.querySelector('#howLongInt')
howLongRange.addEventListener('input', function () {
    howLongInt.value = howLongRange.value
    passwordGenerator(howLongInt.value)
    pwInput.value = passwordGenerator(howLongInt.value)
})
howLongInt.addEventListener('change', function () {
    if (howLongInt.value < 1) {
        howLongInt.value = 1;
        howLongRange.value = 1;
        pwInput.value = passwordGenerator(howLongRange.value)
    } else if (howLongInt.value > 50) {
        howLongInt.value = 50;
        howLongRange.value = 50;
        pwInput.value = passwordGenerator(howLongRange.value)
    }
    else {
        howLongRange.value = howLongInt.value;
        pwInput.value = passwordGenerator(howLongRange.value)
    }
})


document.querySelector('#copyPw').addEventListener('click', function execCopy() {
    pwInput.select();
    document.execCommand("copy");
});

pwInput.addEventListener('input', function () {
    howLongInt.value = pwInput.value.length;
    howLongRange.value = pwInput.value.length
})

let checkSymbols = document.querySelector('#checkSymbols')
checkSymbols.addEventListener('change', function () {
    if (this.checked) {
        symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
        if (lowerEnabled === false) {
            pwInput.value = passwordGeneratorUpper(howLongRange.value);
        }
        else if (enabled === false) {
            pwInput.value = passwordGeneratorLower(howLongRange.value)
        }
        else {
            pwInput.value = passwordGenerator(howLongRange.value)
        }
    } else {
        symbols = "";
        if (lowerEnabled === false) {
            pwInput.value = passwordGeneratorUpper(howLongRange.value);
        }
        else if (enabled === false) {
            pwInput.value = passwordGeneratorLower(howLongRange.value)
        }
        else {
            pwInput.value = passwordGenerator(howLongRange.value)
        }
    }
})

let checkNumbers = document.querySelector('#checkNumbers')
checkNumbers.addEventListener('change', function () {
    if (this.checked) {
        numbers = '0123456789';
        if (lowerEnabled === false) {
            pwInput.value = passwordGeneratorUpper(howLongRange.value);
        }
        else if (enabled === false) {
            pwInput.value = passwordGeneratorLower(howLongRange.value)
        }
        else {
            pwInput.value = passwordGenerator(howLongRange.value)
        }
    } else {
        numbers = "";
        if (lowerEnabled === false) {
            pwInput.value = passwordGeneratorUpper(howLongRange.value);
        }
        else if (enabled === false) {
            pwInput.value = passwordGeneratorLower(howLongRange.value)
        }
        else {
            pwInput.value = passwordGenerator(howLongRange.value)
        }
    }
})

let upperCase = document.querySelector('#Uppercase')
upperCase.addEventListener('change', function () {
    if (this.checked) {
        alphabet = "abcdefghijklmnopqrstuvwxyz";
        enabled = true;
        if (lowerEnabled === false) {
            pwInput.value = passwordGeneratorUpper(howLongRange.value);
        }
        else {
            pwInput.value = passwordGenerator(howLongRange.value)
        }
    }
    else if (this.checked === false && lowerCase.checked === false) {
        enabled = false;
        alphabet = "";
        pwInput.value = passwordGeneratorUpper(howLongRange.value)
    }
    else {
        alphabet = "abcdefghijklmnopqrstuvwxyz";
        enabled = false;
        if (lowerEnabled === true) {
            pwInput.value = passwordGeneratorLower(howLongRange.value);
        }
        else {
            pwInput.value = passwordGenerator(howLongRange.value)
        }
    }
})

let lowerCase = document.querySelector('#Lowercase')
lowerCase.addEventListener('change', function () {
    if (this.checked) {
        alphabet = "abcdefghijklmnopqrstuvwxyz";
        lowerEnabled = true;
        if (enabled === false) {
            pwInput.value = passwordGeneratorLower(howLongRange.value)
        }
        else {
            pwInput.value = passwordGenerator(howLongRange.value)
        }
    }
    else if (this.checked === false && upperCase.checked === false) {
        lowerEnabled = false;
        alphabet = "";
        pwInput.value = passwordGeneratorUpper(howLongRange.value)
    }
    else {
        lowerEnabled = false;
        if (lowerEnabled === false) {
            pwInput.value = passwordGeneratorUpper(howLongRange.value);
        }
        else if (enabled === false) {
            pwInput.value = passwordGeneratorLower(howLongRange.value)
        }
        else {
            pwInput.value = passwordGenerator(howLongRange.value)
        }
    }
})