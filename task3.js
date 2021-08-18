let a = parseInt(prompt('Введите значение a'));
let b = parseInt(prompt('Введите значение b'));
if (a >= 0 && b >= 0)
{
    c = a - b;
    alert('Разность равна: ' + c);
}
else if (a < 0 && b < 0)
{
    c = a * b;
    alert('Произведение равно: ' + c);
}
else
    {
        c = a + b
        alert('Сумма равна: ' + c );
    }