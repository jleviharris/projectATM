"use strict"
console.log('hello node.js')
// prompts
// user interaction
// what the user sees
const prompt = require('prompt-sync')();
const functions = require('./atm');
// const personalAccount = require('./account');
functions.validatePin();
mainMenu();

 function mainMenu (){
     let userInput = parseInt(prompt('Press 1 for Account Ballance, 2 for a Withdraw, 3 for a Deposit, or 0 to Exit'));
    switch (userInput){
        case 1:
        functions.getBalance();
        mainMenu();
        break;
        case 2:
        functions.withdraw();
        mainMenu();
        break;
        case 3:
        functions.deposit();
        mainMenu();
        break;
        case 0:
        console.log('Goodbye');
        break;

    }
}
