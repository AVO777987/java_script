'use strict';

let allproducts = new Map();
class Basket {
    addProductToBasket(product, count){
        this.product = product;
        allproducts.set(this.product, count);
        return allproducts;
    }
    countBasketPrice(){
        let allcost = 0;
        for(let [key, value] of allproducts) {
            allcost = allcost + (key.cost * value);
        }
    return allcost;
    }
}

class Product {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

let product1 = new Product('Intel Core i7-10700', 25000);
let product2 = new Product('Intel Core i7-11700', 35000);
let product3 = new Product('Intel Core i5-10500', 20000);
let product4 = new Product('Intel Core i5-10600K', 23000);
let product5 = new Product('Intel Core i7-10700K', 29000);

let basket = new Basket();
basket.addProductToBasket(product1, 1);
basket.addProductToBasket(product2, 1);
basket.addProductToBasket(product3, 3);
basket.addProductToBasket(product4, 1);
basket.addProductToBasket(product5, 3);
console.log(basket.countBasketPrice());
