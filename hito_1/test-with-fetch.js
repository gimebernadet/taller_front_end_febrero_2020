const API_URL = "http://tiendaonline2020.herokuapp.com/api";

function signUp(userName, pass) {
    // ACA COPIAR EL CODIGO DE LA FUNCION
}

function login(userName, pass) {
    // ACA COPIAR EL CODIGO DE LA FUNCION
}

function getProducts() {
    // ACA COPIAR EL CODIGO DE LA FUNCION
}


const user = `test-${Math.floor(
  Math.random() * Math.floor(10000000)
)}@gmail-test-${Math.floor(Math.random() * Math.floor(10000000))}.com`;
const pass = "lala1234567890";


async function test11() {
    try {

        const result11 = await signUp(user, pass);
        const data = await result11.json();

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
        console.error("ERROR 11:", err);
        console.groupEnd();
    }
}

test11();

async function test12() {
    try {
        const result12 = await login(user, pass);

        const data = await result12.json();
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
        console.error("ERROR 12:", err);
        console.groupEnd();
    }
}



async function test13() {
    try {
        const result13 = await getProducts();
        const data = await result13.json();
        console.group("TEST 13: getProducts");
        console.log(
            data && data.length == 15 ? "OK" : "ERROR"
        );
        //console.log("result 13: ", result13.data.length);
        console.groupEnd();


    } catch (err) {
        console.group("TEST 13: getProducts");
        console.error("ERROR 13:", err);
        console.groupEnd();
    }
}

test13();