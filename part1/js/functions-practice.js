//STEP 1
function halfNumber(number) {
    return "Half of " + number + " is " + (number/2) + ".";
}

//STEP 2
function squareNumber(number) {
    return "The result of squaring the number " + number + " is " + (number * number) + ".";
} 

//STEP 3
function percentOf(number1, number2) {
    const res =  (number1*100) / number2;
    return number1 + " is " + res + "% of " + number2 + ".";
}

//STEP 4
function findModulus(number1, number2) {
        const res =  number1 % number2;
        return res + " is the modulus of " + number1 + " and " + number2 + "." ;
}

//STEP 5
function sumNumbers(numbersArr){
    var sum = 0;
    numbersArr.forEach(element => {
        sum = sum + parseInt(element);
    });
    return "The total sum of all numnbers is " + sum + "."; 
}

function main() {
    var choice, number1, number2, numbersArray;
    do {
        choice = parseInt(window.prompt("Options:\n1: Half the given Number\n2: Square the given Number\n3: Percent of a Number\n4: Modulus of the Numbers\n5: Find the sum of Numbers\n6: Exit by entering other numbers"));
        switch(choice) {
            case 1: {
                number1 = window.prompt("Enter the number ");
                window.console.log(halfNumber(number1));
                break;
            }
            case 2: {
                number1 = window.prompt("Enter the number to be squared");
                window.console.log(squareNumber(number1));
                break;
            }
            case 3: {
                number1 = window.prompt("Enter the first number");
                number2 = window.prompt("Enter the second number");
                window.console.log(percentOf(number1, number2));
                break;
            }
            case 4: {
                number1 = window.prompt("Enter the first number");
                number2 = window.prompt("Enter the second number");
                window.console.log(findModulus(number1, number2));
                break;
            }
            case 5: {
                number1 = window.prompt("Enter the numbers separated by commas");
                numbersArray = number1.split(",");
                window.console.log(sumNumbers(numbersArray));
                break;
            }
            default: break
        }
    } while (choice >= 1 && choice <= 5)
}

main();