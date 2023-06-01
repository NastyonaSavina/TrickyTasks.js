function validatePIN(pin) {

    console.log( /^(\d{4}|\d{6})$/.test(pin))
}

validatePIN('-12345');
