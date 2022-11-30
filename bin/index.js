#! /usr/bin/env node
import { question, prompt } from 'readline-sync';
import clear from 'clear';
import figlet from 'figlet';
import colors from 'colors';
import chalk from 'chalk';
function main() {
    clear();
    console.log(chalk.bgGray(figlet.textSync('Cli Calculator', { horizontalLayout: 'full' })));
    console.log("");
    let firstStr = question(colors.rainbow('Enter your First number \n'));
    console.log("");
    let secondStr = question(colors.rainbow('Enter your Second number \n'));
    console.log("");
    console.log(colors.rainbow("Enter operator"));
    let operatorStr = prompt({ limit: ['+', '-', '*', '/', '%'] });
    const isOperator = (operatorStr) => {
        switch (operatorStr) {
            case '+':
            case '-':
            case '*':
            case '/':
            case '%':
                return true;
            default: return false;
        }
    };
    //const operator=isOperator(operatorStr)
    const isNumber = (str) => {
        const convertToNum = parseInt(str);
        const isNum = Boolean(!isNaN(convertToNum));
        return isNum;
    };
    const firstNum = parseInt(firstStr);
    const secondNum = parseInt(secondStr);
    const isValidInput = isNumber(firstStr) && isOperator(operatorStr) && isNumber(secondStr);
    const calculate = (firstNum, secondNum, operatorStr) => {
        switch (operatorStr) {
            case '+':
                return firstNum + secondNum;
            case '-':
                return firstNum - secondNum;
            case '*':
                return firstNum * secondNum;
            case '/':
                return firstNum / secondNum;
            case '%':
                return firstNum % secondNum;
            default: return 0;
        }
    };
    if (isValidInput) {
        console.log(colors.rainbow(`${firstNum} ${operatorStr} ${secondNum} is ${calculate(firstNum, secondNum, operatorStr)}`));
    }
    else
        console.log('something is not valid');
}
main();
