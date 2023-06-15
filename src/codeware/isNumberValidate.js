function validatePIN(pin) {

   return( /^(\d{4}|\d{6})$/.test(pin))
}

validatePIN('-12345');
