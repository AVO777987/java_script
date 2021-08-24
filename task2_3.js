function countBasketPrice(basket){
    let cost = 0;
    for(let [key, value] of basket) {
        cost = cost + Number(value);
    }
    return cost;
}

let basket = new Map();
basket.set('Intel Core i7-10700', 25000);
basket.set('Intel Core i7-11700', 35000);
basket.set('Intel Core i5-10500', 20000);
basket.set('Intel Core i5-10600K', 23000);
basket.set('Intel Core i7-10700K', 29000);

console.log(countBasketPrice(basket));

