const btnGenerateEl = document.querySelector('.btn-generate');
const passwordLengthEl = document.querySelector('.form-input')
const checkboxSymbolsEl = document.querySelector('.checkbox-symbols');
const checkboxNumbersEl = document.querySelector('.checkbox-numbers');
const containerEl = document.querySelector('.container')
const generatePasswordEl = document.querySelector('.generated-password')
const errorEl = document.querySelector('.error')
const btnCopyEl = document.querySelector('.btn-copy');
const textCopiedEl = document.querySelector('.text-copied');

const isEmpty = (value) => (value === '') ? true : false;
const isNumber = (value) => isNaN(value) ? false : true;
const isBetween = (value) => value >= 12 && value <= 30 ? true : false;

function isValid (passwordLength) {


    if (isEmpty(passwordLength)) {
        showError('You must enter password length.')
        return
    } else if (!isNumber(passwordLength)) {
        showError('Invalid number.')
        return
    } else if (!isBetween(passwordLength)) {
        showError('Password length must be between 12 and 30.') 
        return
    } else {
        return true
    }
}


function showError (message) { 
    errorEl.textContent = message;
}

function generatePassword(length, useNumbers, useSymbols) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numChars = '012345689';
    const symbols = '!@#$%^&*()_+{}:<>,.?';
    let password = ''

    if (!useNumbers && !useSymbols) {

        for (let i=0; i<= length; i++) {
            randomNumber = Math.floor(Math.random() * letters.length)
            password += letters.substring(randomNumber, randomNumber +1)
        }

        return password

    } else if (useNumbers && !useSymbols) {
        const chars = letters + numChars;

        for (let i=0; i<= length; i++) {
            randomNumber = Math.floor(Math.random() * chars.length)
            password += chars.substring(randomNumber, randomNumber +1);
        }

        return password

    } else if (useSymbols && !useNumbers) {
        const chars = letters + symbols;

        for (let i=0; i<= length; i++) {
            randomNumber = Math.floor(Math.random() * chars.length)
            password += chars.substring(randomNumber, randomNumber +1);
        }

        return password
    } else if (useNumbers && useSymbols) {
        const chars = letters + symbols + numChars;

        for (let i=0; i<= length; i++) {
            randomNumber = Math.floor(Math.random() * chars.length)
            password += chars.substring(randomNumber, randomNumber +1);
        }

        return password
    }
}

btnGenerateEl.addEventListener('click', (e) => {
    e.preventDefault();

    const passwordLength = passwordLengthEl.value;
    const useNumbers = checkboxNumbersEl.checked;
    const useSymbols = checkboxSymbolsEl.checked;
    const isFormValid = isValid(passwordLength);
    textCopiedEl.classList.add('hidden');

    if (isFormValid) {
        errorEl.textContent = ''     
        password = generatePassword(passwordLength, useNumbers, useSymbols);
        generatePasswordEl.textContent = password
        btnCopyEl.classList.remove('hidden')
    }
})


btnCopyEl.addEventListener('click', ()=> {
    const password = document.querySelector('.generated-password').textContent
    navigator.clipboard.writeText(password)
    textCopiedEl.classList.remove('hidden');
})

