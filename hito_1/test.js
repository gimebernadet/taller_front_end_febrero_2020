const services = require("./services");
const utils = require("./utils");

let products = require("./products.json");
//lista de productos harcodeada
let cart = require("./cart.json");
//carrito inicializado con 1 producto

console.group("TEST 1: filterProductsByName");
console.log("filter by: aceite");
const result1 = utils.filterProductsByName(products, "aceite");
//console.log('result 1: ', result1)
console.log(result1.length === 1 ? "OK" : "ERROR");
console.groupEnd();

console.group("TEST 2: filterProductsByName");
console.log("filter by: de");
const result2 = utils.filterProductsByName(products, "de");
//console.log('result 2: ', result2)
console.log(result2.length === 6 ? "OK" : "ERROR");
console.groupEnd();

console.group("TEST 3: addToCart");
console.log("addToCart item that does not exist");
const result3 = utils.addToCart(cart, {
    _id: "5e40b0ee97fef18946b150e8",
    name: "Guacamole",
    description: "Guacamole realizado con paltas de origen incaico, blandas y ricas, más que las de la feria.",
    price: 414.14,
    count: 2,
    photo: "http://tiendaonline2020.herokuapp.com/img/guacamole_delicioso.jpg"
});
//console.log("result 3: ", result3);
console.log(result3.length === 2 ? "OK" : "ERROR");
console.groupEnd();

console.group("TEST 4: addToCart");
console.log("addToCart item that already exists");
const result4 = utils.addToCart(result3, {
    _id: "5e40b0ee97fef18946b150e8",
    name: "Guacamole",
    description: "Guacamole realizado con paltas de origen incaico, blandas y ricas, más que las de la feria.",
    price: 414.14,
    count: 1,
    photo: "http://tiendaonline2020.herokuapp.com/img/guacamole_delicioso.jpg"
});
//console.log("result 4: ", result4);
console.log(result4.length === 2 && result4[1].count === 3 ? "OK" : "ERROR");
console.groupEnd();

console.group("TEST 5: countCartItems");
console.log("countCartItems of empty list");
const result5 = utils.countCartItems([]);
//console.log("result 5: ", result5);
console.log(result5 === 0 ? "OK" : "ERROR");
console.groupEnd();

console.group("TEST 6: countCartItems");
console.log("countCartItems of initial cart");
const result6 = utils.countCartItems(cart);
//console.log("result 6: ", result6);
console.log(result6 === 2 ? "OK" : "ERROR");
console.groupEnd();

console.group("TEST 7: countCartItems");
console.log("countCartItems of result4");
const result7 = utils.countCartItems(result4);
//console.log("result 7: ", result7);
console.log(result7 === 5 ? "OK" : "ERROR");
console.groupEnd();

console.group("TEST 8: countCartTotalAmount");
console.log("countCartTotalAmount of empty list");
const result8 = utils.countCartTotalAmount([]);
console.log("result 8: ", result8);
console.log(result8.total === 0 && result8.iva === 0 ? "OK" : "ERROR");
console.groupEnd();

console.group("TEST 9: countCartItems");
console.log("countCartItems of initial cart");
const result9 = utils.countCartTotalAmount(cart);
//console.log("result 9: ", result9);
console.log(
    result9.total === 2460 && result9.iva === 460 && result9.subtotal === 2000 ?
    "OK" :
    "ERROR"
);
console.groupEnd();

console.group("TEST 10: countCartItems");
console.log("countCartItems of result4");
const result10 = utils.countCartTotalAmount(result4);
//console.log("result 10: ", result10);
console.log(
    result10.total === 3988.1766000000002 &&
    result10.iva === 745.7566 &&
    result10.subtotal === 3242.42 ?
    "OK" :
    "ERROR"
);
console.groupEnd();

const user = `test-${Math.floor(
  Math.random() * Math.floor(10000000)
)}@gmail-test-${Math.floor(Math.random() * Math.floor(10000000))}.com`;
const pass = "lala1234567890";


async function test11() {
    try {

        let result11 = await services.signUp(user, pass);

        const data = result11.data
        console.group("TEST 11: sign-up");

        console.log(`signup with user ${user}`);
        console.log(
            data && data.email == user ? "OK" : "ERROR"
        );
        //console.log("result 11: ", result11.data);
        console.groupEnd();
        test12();

    } catch (err) {
        console.group("TEST 11: sign-up");
        console.error("ERROR 11:", err.response.data);
        console.groupEnd();
    }
}

test11();

async function test12() {
    try {
        const result12 = await services.login(user, pass);

        const data = result12.data
        console.group("TEST 12: login");
        console.log(`login with user ${user}`);
        console.log(
            data && data.email == user ? "OK" : "ERROR"
        );
        //console.log("result 12: ", result12.data);
        console.groupEnd();


    } catch (err) {
        console.group("TEST 12: login");
        console.log(`login with user ${user}`);
        console.error("ERROR 12:", err.response.data);
        console.groupEnd();
    }
}



async function test13() {
    try {
        const result13 = await services.getProducts();
        const data = result13.data
        console.group("TEST 13: getProducts");
        console.log(
            data && data.length == 15 ? "OK" : "ERROR"
        );
        //console.log("result 13: ", result13.data.length);
        console.groupEnd();


    } catch (err) {
        console.group("TEST 13: getProducts");
        console.error("ERROR 13:", err.response.data);
        console.groupEnd();
    }
}

test13();