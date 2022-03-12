"use strict"
console.log('hello node.js')
const prompt = require('prompt-sync')();
const functions = require('./atm');
// const personalAccount = require('./account');
functions.checkWallet();
functions.validatePin();
mainMenu();

 function mainMenu (){
     let userInput = parseInt(prompt('PRESS \n1 for Account Ballance \n2 for a Withdraw \n3 for a Deposit \n4 to change Pin \n5 to view account info \n0 to Exit'));
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
        case 4:
        functions.changePin();
        mainMenu();
        break;
        case 5:
        functions.info();
        mainMenu();
        break;
        case 0:
        console.log('Goodbye');
        return;
        default:
        mainMenu();
        break;

    }
}
