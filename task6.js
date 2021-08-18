function mathOperation(arg1, arg2, operation)
{
    let result;
    switch (operation)
    {
        case 'summ':
            result = arg1 + arg2;
            break;
        case 'diff':
            result = arg1 - arg2;
            break;
        case 'divi':
            result = arg1 / arg2;
            break;
        case 'multi':
            result = arg1 * arg2;
            break;
    }
    return result;
}

let a = parseInt(prompt('Введите значение числа a'));
let b = parseInt(prompt('Введите значение числа b'));
let operation = prompt('Введите операцию summ, diff, divi или multi');

alert(mathOperation(a, b , operation))
