// import account info
//functionality
// add functions get balance... 

const personalAccount = require('./account');

// getBalance function
// call the peersonalAccount.accountBalance
//console.log or alert the account balance 
function getBalance(){

};

// withdraw function
// pull the accountBalance
// take in an input for how much to withdraw
// change the account balance to the old balance - the withdraw ammount
// validate that the withdraw ammount is not greater than the present account balance
// alert or console log the new balance
function withdraw(){

};


// deposit function
// take in a input for the deposit amount
// add input to the account balance
//alert or console log the new balance
function deposit(){

};


// validatePin function
function validatePin (userInput){
    userInput = parseInt(prompt('Please enter your pin'));
    if (userInput !== personalAccount.accountPin){
        alert('Incorrect Pin');
        validatePin;
    }else alert('Welcome')
};




let functions = [
    {validatePin, 
    deposit,
    withdraw,
    getBalance}];

modules.export.functions = functions;