function splitNumber(number){
    let numObject = {};
    if (number > 999){
        console.log('Вы ввели число больше чем 999');
        return numObject;
    }
    else {
        for (let i = 0 ; number != 0 ; i++) {
            numObject[i] = number % 10;
            number = Math.floor(number / 10);
        }
        let resultObject = {
            units : numObject[0],
            tenner : numObject[1],
            hundreds : numObject[2],
        };
        return resultObject;
    }
}

let number = Number(prompt('Введите число от 0 до 999'));
console.log(splitNumber(number));
