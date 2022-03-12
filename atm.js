// import account info
//functionality
// add functions get balance... 
const prompt = require('prompt-sync')();
const {personalAccount} = require('./account');
let {firstName, lastName, accountNumber, accountBalance, accountType, accountPin} = personalAccount;
// getBalance function
// call the peersonalAccount.accountBalance
//console.log or alert the account balance 
function getBalance(){
    console.log(`$${accountBalance}`);
};

// withdraw function
// pull the accountBalance
// take in an input for how much to withdraw
// change the account balance to the old balance - the withdraw ammount
// validate that the withdraw ammount is not greater than the present account balance
// alert or console log the new balance
function withdraw(){
    let withdrawAmount = parseInt(prompt(`Your balance is $${accountBalance}, how much would you like to withdraw?`));
    if (withdrawAmount > accountBalance){
        console.log(`Not enough in account`);
    } else {
        accountBalance = accountBalance - withdrawAmount;
        console.log(`Your new balance is $${accountBalance}`);
    }
};


// deposit function
// take in a input for the deposit amount
// add input to the account balance
//alert or console log the new balance
function deposit(){
    userInput = parseInt(prompt('How much would you like to deposit'));
    let newBalance = accountBalance + userInput;
    accountBalance = newBalance;
    return newBalance;
};


// validatePin function
function validatePin (){
    userInput = parseInt(prompt(`${firstName} ${lastName}, Please enter your pin`));
    if (userInput !== accountPin){
        console.log('Incorrect Pin');
        validatePin();
    }else if(userInput === accountPin) {console.log('Welcome');}
};




module.exports.validatePin = validatePin;
module.exports.deposit = deposit;
module.exports.withdraw = withdraw;
module.exports.getBalance = getBalance;

