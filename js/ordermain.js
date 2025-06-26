function goToPage(page) {
    window.location.href = page;
}

let itemNames = ["Classic Burger (Large)", "Classic Burger (Regular)", "Turkey Burger", "Chicken Burger (Large)",
    "Chicken Burger (Regular)", "Cheese Burger (Large)", "Cheese Burger (Regular)", "Bacon Burger", "Shawarma Burger",
    "Olive Burger", "Double-Cheese Burger", "Crispy Chicken Burger (Regular)", "Crispy Chicken Burger (Large)", "Paneer Burger",
    "Crispy Chicken Submarine (Large)", "Crispy Chicken Submarine (Regular)", "Chicken Submarine (Large)",
    "Chicken Submarine (Regular)", "Grinder Submarine", "Cheese Submarine", "Double Cheese n Chicken Submarine",
    "Special Horgie Submarine", "MOS Special Submarine", "Steak Fries (Large)", "Steak Fries (Medium)", "French Fries (Large)",
    "French Fries (Medium)", "French Fries (Small)", "Sweet Potato Fries (Large)", "Chicken n Cheese Pasta", "Chicken Penne Pasta",
    "Ground Turkey Pasta Bake", "Creamy Shrimp Pasta", "Lemon Butter Pasta", "Tagliatelle Pasta", "Baked Ravioli",
    "Fried Chicken (Small)", "Fried Chicken (Regular)", "Fried Chicken (Large)", "Hot Wings (Large)", "Devilled Chicken (Large)",
    "BBQ Chicken (Regular)", "Pepsi (330ml)", "Coca-Cola (330ml)", "Sprite (330ml)", "Mirinda (330ml)"];

function loaditems() {
    let body = ``;
    itemNames.forEach(element => {
        body = body + `<li><a class="dropdown-item" href="#" onclick="selectname('${element}')">${element}</a></li>`;
    });
    document.getElementById("dropdownitems").innerHTML = body;
}

function selectname(name) {
    document.getElementById("nameBtn").innerText = name;
}


let orderdetails = [];
let itemdetails = [];
let body = ``;
function cartProcess() {
    let name = document.getElementById("nameBtn").innerText
    let quantity = document.getElementById("orderquantityfield").value
    let orderid = document.getElementById("orderidfield").value
    let cusid = document.getElementById("cusidfield").value
    let cusname = document.getElementById("cusnamefield").value
    itemdetails = JSON.parse(localStorage.getItem("itemdetails"));
    console.log(name, quantity, orderid, cusid, cusname);
    itemdetails.forEach(element => {
        if (element.itemname == name && element.itemquantity >= quantity) {
            console.log("innerif");
            body = body + `<tr>
                        <td>${element.itemcode}</td>
                        <td>${element.itemcategory}</td>
                        <td>${element.itemname}</td>
                        <td>${quantity}</td>
                        <td>${element.itemprice}</td>
                        <td>${element.itemdiscount}</td>
                        <td>${element.itemexpire}</td>
                    </tr >`
            element.itemquantity = element.itemquantity - quantity;
            console.log(itemdetails);

            orderdetails.push({ itemcode: element.itemcode, itemcategory: element.itemcategory, itemname: name, itemquantity: quantity, itemorderid: orderid, itemcusid: cusid, itemcusname: cusname });
            console.log(orderdetails);

        }
        document.getElementById("tblbody").innerHTML = body;
        localStorage.setItem("itemdetails", JSON.stringify(itemdetails));
        localStorage.setItem("orderdetails", JSON.stringify(orderdetails));
    });
}

function adddiscount() {
    console.log("added");
    let orderdetails = [];
    orderdetails = JSON.parse(localStorage.getItem("orderdetails"));
    let orderid = document.getElementById("orderidfield").value;
    let finaldiscount = document.getElementById("finaldiscountfield").value;
    orderdetails.forEach(element => {
        if (orderid == element.itemorderid) {
            console.log("innerif");
            element.itemfinaldiscount = finaldiscount;
        }
    });
    console.log(orderdetails);
    localStorage.setItem("orderdetails", JSON.stringify(orderdetails));

    // let orderdetails2 = [];
    // orderdetails2 = JSON.parse(localStorage.getItem("orderdetails"));



}

