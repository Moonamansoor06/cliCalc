#! /usr/bin/env node


import clear from "clear";
import figlet from "figlet";
import colors from "colors";
import chalk from "chalk";
import inquirer from "inquirer"; 
import chalkAnimation from 'chalk-animation'


function main(): void {
  clear();{
  console.log(``)
  console.log(
    chalk.green( figlet.textSync("Cli Calculator", { horizontalLayout: "full" }))   )
     console.log(`
     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    
     `)

     console.log(` ____,____,____,____, ____,  ____, ____,__,  ____,_, _,__,   ____,____,__, ____, _,  _,____, 
     (-(__(-|  (-/_|(-|__)(-|    (-/   (-/_|(-|  (-/  (-|  (-|   (-/_|(-|  (-| (-/  \(-|\ |(-(__  
      ____)_|, _/  |,_|  \,_|,    _\__,_/  |,_|__,_\__,_|__/_|__,_/  |,_|,  _|_,_\__/,_| \|,____) 
      `)
console.log('\n')


  const msg1=colors.rainbow("Select  the opeartor for calculation ")

  const msg2=colors.rainbow("input first number  ")
  const msg3=colors.rainbow("input second number  ")
  console.log("");
  const listofFiles = ["+", "-", "*", "/", "%"];
  async function oper() {
    await inquirer
      .prompt([
        {
          name: "operator",
          type: "list",
          message: msg1,
          choices: listofFiles,
        },
        {
          name: "number1",
          type: "number",
          message: msg2,
        },
        {
          name: "number2",
          type: "number",
          message: msg3,
        },
      ])
      .then((answers) => {
    
        const operatorStr = answers.operator;

      
        const firstNum=answers.number1
        const secondNum=answers.number2
    
       const calculate = (
    firstNum: number,
    secondNum: number,
    operatorStr: string
  ): number => {
    switch (operatorStr) {
      case "+":
        return firstNum + secondNum;
      case "-":
        return firstNum - secondNum;
      case "*":
        return firstNum * secondNum;
      case "/":
        return firstNum / secondNum;
      case "%":
        return firstNum % secondNum;
      default:
        return 0;
    }
  };


  console.log(chalk.blueBright.bold(`\n \n ${firstNum} ${operatorStr} ${secondNum} is ${calculate(firstNum,secondNum,operatorStr)}`))
   
    });
  
  }
 
  async function doAgain() {
  let msg4=chalk.greenBright('\n Do you wish to continue, press y or Yes')
  let playAgain
  do{
  await oper()
  playAgain=await inquirer.prompt([{
      name:"play",
      type:"input",
      message:msg4
  }])

  }while(playAgain.play=='yes'||playAgain.play=='y'||playAgain.play=='Yes'||playAgain.play=='Y')
 };
 doAgain()


  // let firstStr = question( colors.rainbow('Enter your First number \n', )) ;
  // console.log("")

  // let secondStr = question(colors.rainbow('Enter your Second number \n') );
  // console.log("")
  // console.log(colors.rainbow("Enter operator"))

  // let operatorStr=Operator.opeartor
  // console.log(operatorStr)

  // let operatorStr = prompt({limit:['+','-','*','/','%']}) ;

  // const isNumber=(str:string):boolean=>{
  //   const convertToNum=parseInt(str)
  //   const isNum:boolean=Boolean(!isNaN(convertToNum) )
  //   return isNum
  // }

  // const firstNum=parseInt(firstStr)
  // const secondNum=parseInt(secondStr)

  //const isValidInput:boolean=isNumber(firstStr) && isOperator(operatorStr) && isNumber(secondStr)

 
}
}
main();
