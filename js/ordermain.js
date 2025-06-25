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

let body = ``;
function check(){
    let view = JSON.parse(localStorage.getItem("itemdetails"));
    view.forEach(element => {
        let need = document.getElementById("nameBtn").innerText
        if(need==element.itemname){
        body = body + `<tr>
            <td>${element.itemcode}</td>
            <td>${element.itemcategory}</td>
            <td>${element.itemname}</td>
            <td>${element.itemquantity}</td>
            <td>${element.itemprice}</td>
            <td>${element.itemdiscount}</td>
            <td>${element.itemexpire}</td>
        </tr >`
        }
        document.getElementById("tblbody").innerHTML = body;
    });
}
