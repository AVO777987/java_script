function power(val, pow)
{
    if (pow == 1)
    {
        return val;
    }
    else {
        return val * power(val, pow - 1);
    }
    return
}

let val = parseInt(prompt('Введите значение числа a'));
let pow = parseInt(prompt('Введите значение степени числа a'));

alert(power(val,pow))