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
let itemCodes = [
    "B1001", "B1002", "B1003", "B1004", "B1005", "B1006", "B1007", "B1008", "B1009", "B1010",
    "B1012", "B1013", "B1014", "B1015", "B1016", "B1017", "B1018", "B1019", "B1020", "B1021",
    "B1022", "B1023", "B1024", "B1025", "B1026", "B1027", "B1028", "B1029", "B1030", "B1031",
    "B1032", "B1033", "B1034", "B1035", "B1036", "B1037", "B1038", "B1039", "B1040", "B1041",
    "B1042", "B1043", "B1044", "B1045", "B1046", "B1047"
];

function loadcodes() {
    let body2 = ``;
    itemCodes.forEach(element => {
        body2 = body2 + `<li><a class="dropdown-item" href="#" onclick="selectcode('${element}')">${element}</a></li>`;
    });
    document.getElementById("dropdowncode2").innerHTML = body2;
}
function selectcode(item) {
    document.getElementById("nameBtn2").innerText = item;
}
function selectCategory(item) {
    document.getElementById("categoryBtn").innerText = item;
}
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


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function updateitem(){
    console.log("hello");
    let com = document.getElementById("nameBtn2").innerText;
    console.log(com);

    let itemdetails = JSON.parse(localStorage.getItem("itemdetails"));

    itemdetails.forEach(element => {        
        if(element.itemcode==com){
            let category = document.getElementById('categoryBtn').innerText.trim();
            if (category !== "") {element.itemcategory = category;}

            let name = document.getElementById('nameBtn').innerText.trim();
            if (name !== "") {element.itemname = name;}

            let quantity = document.getElementById('quantityfield').value.trim();
            if (quantity !== ""){ element.itemquantity = quantity;}

            let price = document.getElementById('pricefield').value.trim();
            if (price !== "") {element.itemprice = price;}

            let discount = document.getElementById('discountfield').value.trim();
            if (discount !== "") {element.itemdiscount = discount;}

            let expire = document.getElementById('expirefield').value.trim();
            if (expire !== ""){ element.itemexpire = expire;}

        }
        console.log(itemdetails);
        localStorage.setItem("itemdetails", JSON.stringify(itemdetails));
    });
    
}

