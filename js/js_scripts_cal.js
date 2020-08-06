
//--Global Variables--
var products = [];
//var products = [
//    { Name: "Apple", price: "0.95" },
//    { Name: "Banana", price: "0.75" },
//    { Name: "Tomatoes", price: "0.55" }
//]
var strQuantity = "";
var shoppingCart = [];
var shoppingCartLength = 0;
//var rowStart = 5;

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//--Functions--
function addingItems() {
    var item = document.getElementById("product").value;

    var product = {
        name: item,
        price: 0
    }

    // Erase the entered value to reset "Product" input
    document.getElementById("product").value = "";

    if (item != "") {
        products.push(product);
        //document.getElementById("selection").add(document.createElement("option").text);
        //or
        var menuList = document.getElementById("selection");
        var myOption = document.createElement("option");

        myOption.text = product.name;
        menuList.add(myOption);
    }



}

function addPrice() {
    var item = document.getElementById("selection").value;
    var priceVar = document.getElementById("price").value;
    var i;

    if (priceVar != "") {
        for (i = 0; i < products.length; i++) {
            if (products[i].name == item) {
                products[i].price = priceVar;
                var unitMenuList = document.getElementById("weightprice");
                var myOption = document.createElement("option");
                myOption.text = products[i].name + " ($" + priceVar + "/unit)";
                unitMenuList.add(myOption);
                // or document.getElementById(unitMenuList).add(myOption);
            }
        }

        console.log(products);
    }

    // Erase the entered value to reset "Price" input
    document.getElementById("price").value = "";

}


function addProdQuantity1() {
    transaction.innerHTML += "1";
    strQuantity += "1";

}
function addProdQuantity2() {
    transaction.innerHTML += "2";
    strQuantity += "2";

}
function addProdQuantity3() {
    transaction.innerHTML += "3";
    strQuantity += "3";

}
function addProdQuantity4() {
    transaction.innerHTML += "4";
    strQuantity += "4";

}
function addProdQuantity5() {
    transaction.innerHTML += "5";
    strQuantity += "5";

}
function addProdQuantity6() {
    transaction.innerHTML += "6";
    strQuantity += "6";

}
function addProdQuantity7() {
    transaction.innerHTML += "7";
    strQuantity += "7";

}
function addProdQuantity8() {
    transaction.innerHTML += "8";
    strQuantity += "8";

}
function addProdQuantity9() {
    transaction.innerHTML += "9";
    strQuantity += "9";

}
function addProdQuantity0() {
    transaction.innerHTML += "0";
    strQuantity += "0";

}
function addProdQuantityComma() {

    strQuantity.innerHTML += ",";
}
function addProdQuantityDollar() {

    strQuantity.innerHTML += "$";
}

function addToCart() {
    var totalUnits = parseInt(strQuantity, 10);
    strQuantity = "";

    var item = document.getElementById("weightprice").value;

    for (var i = 0; i < products.length; i++) {
        if (item.search(products[i].name) >= 0) {
            var productWithQuantityObject = {
                product: products[i],
                units: totalUnits,
                totalPrice: products[i].price * totalUnits
            };

            shoppingCart.push(productWithQuantityObject);

            shoppingCartLength++;
        }
    }
    console.log(productWithQuantityObject);
    transaction.innerHTML = "";
}

function amountDue() {
    var grandPrice = 0;
    var rowStart = 5;
    var tax;
    var table = document.getElementById("thisTable");

    for (var i = 0; i < shoppingCart.length; i++) {
        var cartItem = shoppingCart[i];//added var
        var product2 = cartItem.product;
        console.log(product2);

        var total_Price = cartItem.totalPrice;
        grandPrice += total_Price;

        var myRow = table.insertRow(rowStart);
        rowStart++;

        var dataCell1 = myRow.insertCell(0);
        var dataCell2 = myRow.insertCell(1);
        var dataCell3 = myRow.insertCell(2);
        var dataCell4 = myRow.insertCell(3);

        dataCell1.innerHTML = product2.name;
        dataCell2.innerHTML = product2.price;
        dataCell3.innerHTML = cartItem.units;
        dataCell4.innerHTML = cartItem.totalPrice.toFixed(2);
    }
    tax = grandPrice * 0.05;
    if (shoppingCart.length > 0) {
        document.getElementById("totalPrice").innerHTML = "Total Price: " + grandPrice.toFixed(2);
        document.getElementById("totalTax").innerHTML = "Total Taxes: " + tax.toFixed(2);
        document.getElementById("totalAmt").innerHTML = "Amount Due : " + (grandPrice + tax).toFixed(2);
    }
    shoppingCart = [];
}

function resetReceipt() {

    var table = document.getElementById("thisTable");
    var rowStart = 5;
    for (var i = 0; i < shoppingCartLength; i++) {
        table.deleteRow(rowStart);
    }

    shoppingCartLength = 0;
    shoppingCart = [];

    totalPrice.innerHTML = "Total Price: ";
    totalTax.innerHTML = "Total Taxes: ";
    totalAmt.innerHTML = "Amount Due : ";
}

function myDisplayDataTime() {
    var dateFromTable = document.getElementById("date");
    var time = document.getElementsByTagName("time");
    var date = new Date();

    dateFromTable.innerHTML = "Date : " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();

    var hours = date.getHours();
    if (hours > 12) {
        var min = date.getMinutes();
        if (min < 10) {
            timeNow.innerHTML = "Time : " + (date.getHours() - 12) + " : 0" + date.getMinutes() + " PM";
        }
        else {
            timeNow.innerHTML = "Time : " + (date.getHours() - 12) + " : " + date.getMinutes() + " PM";
        }
    }
    else {
        var min = date.getMinutes();
        if (min < 10) {
            timeNow.innerHTML = "Time : " + (date.getHours()) + " : 0" + date.getMinutes() + " AM";
        }
        else {
            timeNow.innerHTML = "Time : " + (date.getHours()) + " : " + date.getMinutes() + " AM";
        }
    }

}