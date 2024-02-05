const btnGenerateEl = document.querySelector('.btn-generate');
const passwordLengthEl = document.querySelector('.form-input')
const checkboxSymbolsEl = document.querySelector('.checkbox-symbols');
const checkboxNumbersEl = document.querySelector('.checkbox-numbers');
const containerEl = document.querySelector('.container')
const generatePasswordEl = document.querySelector('.generated-password')
const errorEl = document.querySelector('.error')

const isEmpty = (value) => (value === '') ? true : false;
const isNumber = (value) => isNaN(value) ? false : true;
const isBetween = (value) => value >= 12 && value <= 30 ? true : false;

function isValid (passwordLenght) {


    if (isEmpty(passwordLenght)) {
        showError('You must enter password lenght.')
        return
    } else if (!isNumber(passwordLenght)) {
        showError('Not a valid number!')
        return
    } else if (!isBetween(passwordLenght)) {
        showError('Password lenght must be between 12 and 30') 
        return
    } else {
        return true
    }
}


function showError (message) { 
    errorEl.textContent = message;
}

function generatePassword(lenght, useNumbers, useSymbols) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numChars = '012345689';
    const symbols = '!@#$%^&*()_+{}:<>,.?';
    let password = ''

    if (!useNumbers && !useSymbols) {

        for (let i=0; i<= lenght; i++) {
            randomNumber = Math.floor(Math.random() * letters.length)
            password += letters.substring(randomNumber, randomNumber +1)
        }

        return password

    } else if (useNumbers && !useSymbols) {
        const chars = letters + numChars;

        for (let i=0; i<= lenght; i++) {
            randomNumber = Math.floor(Math.random() * chars.length)
            password += chars.substring(randomNumber, randomNumber +1);
        }

        return password

    } else if (useSymbols && !useNumbers) {
        const chars = letters + symbols;

        for (let i=0; i<= lenght; i++) {
            randomNumber = Math.floor(Math.random() * chars.length)
            password += chars.substring(randomNumber, randomNumber +1);
        }

        return password
    } else if (useNumbers && useSymbols) {
        const chars = letters + symbols + numChars;

        for (let i=0; i<= lenght; i++) {
            randomNumber = Math.floor(Math.random() * chars.length)
            password += chars.substring(randomNumber, randomNumber +1);
        }

        return password
    }
}

btnGenerateEl.addEventListener('click', (e) => {
    e.preventDefault();

    const passwordLenght = passwordLengthEl.value;
    const useNumbers = checkboxNumbersEl.checked;
    const useSymbols = checkboxSymbolsEl.checked;
    const isFormValid = isValid(passwordLenght);

    if (isFormValid) {
        errorEl.textContent = ''     
        password = generatePassword(passwordLenght, useNumbers, useSymbols);
        generatePasswordEl.textContent = password
    }
})

