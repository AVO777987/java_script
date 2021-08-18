function summ(a,b)
{
    return a + b;
}
function difference(a,b)
{
    return a - b;
}
function division(a,b)
{
    return a / b;
}
function multiplication(a,b)
{
    return a * b;
}

let a = parseInt(prompt('Введите значение числа a'));
let b = parseInt(prompt('Введите значение числа b'));

alert('Сумма этих чисел равна: ' + summ(a,b));
alert('Разность этих чисел равна: ' + difference(a,b));
alert('Деление этих чисел равно: ' + division(a,b));
alert('Умножение этих чисел равно: ' + multiplication(a,b));
