const num1 = parseFloat( prompt('Enter the first number: '));
const operator = prompt('Enter Operator (+, -, /, *)');
const num2 = parseFloat( prompt('Enter the second number: '));

let result = 0;
if(isNaN(num1) || isNaN(num2)){
    alert('Invalid Input! Reload current page and provide accurate data!');
}else{
    if(operator == '+'){
        result = num1 + num2;
    }else if(operator == '-'){
        result = num1 - num2;
    }else if(operator == '*'){
        result = num1 * num2;
    }else if(operator == '/'){
        result = num1 / num2;
    }
    document.write(num1 + operator + num2 +' = ' + result);
}