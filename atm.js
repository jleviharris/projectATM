"use strict"
let {wallet} = require('./wallet');
const prompt = require('prompt-sync')();
const {personalAccount} = require('./account');
let {firstName, lastName, accountNumber, accountBalance, accountType, accountPin} = personalAccount;

function getBalance(){
    console.log(`$${accountBalance}`);
};
function checkWallet(){
    console.log(`There is $${wallet} in your wallet.`);
}
function info(){
    console.log(`${firstName} ${lastName} \n${accountType}\nAccount Number - ${accountNumber}\nAccount Balance $${accountBalance}\n${accountPin}`);
};

function withdraw(){
    let withdrawAmount = parseInt(prompt(`Your balance is $${accountBalance}, how much would you like to withdraw? `));
    if (withdrawAmount > accountBalance){
        console.log(`Not enough in account`);
    } else {
        accountBalance = accountBalance - withdrawAmount;
        console.log(`Your new balance is $${accountBalance}`);
        let newWallet= wallet + withdrawAmount;
        wallet = newWallet;
        checkWallet();
    }
};


// deposit function
// take in a input for the deposit amount
// add input to the account balance
//alert or console log the new balance
function deposit(){
    let userInput = parseInt(prompt('How much would you like to deposit?'));
    if (wallet<userInput){
        console.log('Not enough money in wallet')
    } else if (wallet>= userInput){
    let newBalance = accountBalance + userInput;
    let newWallet = wallet - userInput;
    accountBalance = newBalance;
    wallet = newWallet;
    console.log(`Your new balance is $${accountBalance}`);
    checkWallet();};
};


// validatePin function
function validatePin (){
   let userInput = parseInt(prompt(`${firstName} ${lastName}, Please enter your pin`));
    if (userInput !== accountPin){
        console.log('Incorrect Pin');
        validatePin();
    }else if(userInput === accountPin) {
        console.log('Welcome');}
};

function changePin (){
    let userInput = parseInt(prompt(`Please enter your new 4 digit pin number.`));
    if (userInput.toString().length !== 4){
        console.log(`Pin must be 4 digits`);
        changePin();
    }else {
        let userInputTwo = parseInt(prompt('Please re-enter your new pin number'));
        if (userInputTwo !== userInput){
            console.log(`The pins did not match`);
            changePin();
        } else if (userInputTwo === userInput){
            accountPin = userInput;
            console.log(`Your new pin is ${userInput}`);
        }
    } }


module.exports.checkWallet = checkWallet;
module.exports.info = info;
module.exports.changePin = changePin;
module.exports.validatePin = validatePin;
module.exports.deposit = deposit;
module.exports.withdraw = withdraw;
module.exports.getBalance = getBalance;

