'use strict';


const container = document.querySelector('.basket');
let allproducts = new Map();


class Basket {
    addProductToBasket(product, count){
        this.product = product;
        allproducts.set(this.product, count);
        return allproducts;
    }
    countBasketPrice(){
        let allcost = 0;
        let allcount = 0;
        for(let [key, value] of allproducts) {
            allcost = allcost + (key.cost * value);
            allcount = allcount + value;

        }
    return 'В корзине: ' + allcount + ' товаров на сумму '+ allcost + ' рублей';
    }

    viewBasket(){
        let basket_text = document.createElement('DIV');
        if(allproducts.size == 0){
            basket_text.textContent = 'Корзина пуста';
            container.appendChild(basket_text);
        }
        else {
            basket_text.textContent = basket.countBasketPrice();
            container.appendChild(basket_text);
        }

    }

    viewProducts(){
        let product_text = document.createElement('DIV');
        if(allproducts.size == 0){
            product_text.textContent = 'Товаров нет';
            container.appendChild(product_text);
        }
        else {
            let product_list = '';
            for(let [key, value] of allproducts) {
            product_list = product_list + 'Товар: ' + key.name + ' стоимость: ' + key.cost;
            }
            product_text.textContent = product_list;
            container.appendChild(product_text);
        }
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
basket.viewBasket();
basket.viewProducts();