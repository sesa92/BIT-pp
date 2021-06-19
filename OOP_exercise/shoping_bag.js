// In your IDE of choice, create a new JavaScript file named shopping.js and make it so that all code written in the file follows strict mode. Create an anonymous immediately-invoking function that will hold the main execution of all program calls. Writing a simple command console.log(“Hi”) inside this function and running the code should output “Hi“ in the console.
// Create constructor functions with properties representing the following “things”:
// ● Product - product id (random number of 5 digits generated on every product creation), name, price (with 2 decimal places), expiration date
// ● ShoppingBag - a list of products (initially empty; function constructor does not have any input parameters)
// Add getInfo method to Product. It should return a formatted string containing product code (the first and last letter of the name together with the product id), name and price.
// "Banana" -> BA32784, Banana, 129.31
// Add addProduct method to ShoppingBag. It should receive a Product and add it to the product list. You can add a product to the list only if it has a valid expiration date. 
// Add a method to ShoppingBag that calculates the average product price of products in your product list and prints out this value with the precision of three decimals. 
// Add getMostExpensive method that finds the most expensive product and prints out its info.
// Add calculateTotalPrice method to ShoppingBag that calculates the total price of products in the shopping bag list. 
// Create a constructor function with properties representing the following:
// PaymentCard - account balance (number with 2 decimal places), active or inactive status, valid until date
// Create checkoutAndBuy function which receives shopping bag and payment card and prints if the purchase is successful or not. Purchase is successful only if the amount on the card is greater or equal to the total price of products in the shopping bag. If there is not enough money, print out the amount that is missing to complete the purchase.


'use strict';


(function shoping(){
    console.log('Hi!');

    function productCode(string) {
        var str = '';
        var num = Math.floor(Math.random() * 90000) + 10000;
        str = string[0].toUpperCase() + (string[string.length - 1]).toUpperCase() + num;
        return str;
    }

    function compareDate(date, active, inactive) {
        var today = new Date(); // Date is definded in string YYYY-MM-DD
        if (+date > +today) {
            return active;
        } else {
            return inactive;
        }
    }

 
    function Product(name, price, expirationDate) {
        this.name = name;
        this.price = price;
        this.expirationDate = expirationDate;
        var expiration = new Date(expirationDate);
        this.expirationDate = compareDate(expiration, true, false);
        this.getInfo = function() {
            return productCode(this.name) + ', ' + this.name + ', ' + this.price.toFixed(2);
        }
        
    }

    function ShopingBag() {
        this.listOfProducts = [];
        this.addProduct = function(product) {
            if(product.expirationDate)
            this.listOfProducts.push(product);
        }
        this.avgPrice = function() {
            var sum = 0;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                sum += this.listOfProducts[i].price;
            }
            return (sum/this.listOfProducts.length).toFixed(3);
        }
        this.getMostExpensive = function() {
            var mostExpensive = 0;
            var index = 0;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                if (this.listOfProducts[i].price > mostExpensive) {
                    mostExpensive = this.listOfProducts[i].price;
                    index = i;
                }
            }
            return this.listOfProducts[index];
        }
        this.calculateTotalPrice = function() {
            var sum = 0;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                sum += this.listOfProducts[i].price;
            }
            return sum;
        }
    }

    function PaymentCard(accountBalance, status, validUntilDate) {
        this.accountBalance = accountBalance;
        this.status = status;
        this.validUntilDate = validUntilDate;
        var valid = new Date(validUntilDate); // Date is definded in string YYYY-MM-DD
        this.status = compareDate(valid, 'active', 'inactive');
    }



        function checkoutAndBuy(shoppingBag, paymentCard) {
            if(paymentCard.accountBalance < shoppingBag.calculateTotalPrice()) {
                var res = shoppingBag.calculateTotalPrice() - paymentCard.accountBalance;
                res.toFixed(2);
                return `Shopping is not successful, you need ${res}`
            } else {
                return 'Shopping is successful.'
            }
        }
    

        
    

    var product1 = new Product('Banana', 129.3154568, '2020-10-05');
    var product2 = new Product('Orange', 130.48595, '2025-10-05');

    

    var shopBag = new ShopingBag();

    shopBag.addProduct(product1);
    shopBag.addProduct(product2);

    var payCard = new PaymentCard(100, 'inactive', '2022-10-05');
    // console.log(payCard.status);
   var check = checkoutAndBuy(shopBag, payCard);
   //console.log(check);

// console.log(product1.expirationDate);
console.log(product2.getInfo());

// console.log(shopBag);

})()