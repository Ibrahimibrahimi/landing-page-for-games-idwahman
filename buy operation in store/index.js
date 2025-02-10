/*
general idea : 
1. we have a paragraph that show total money
2. we have a container of products
3. every product has a price and a buy button
4. if price of product greater than money => disable its buy button 
5. if buy button clicked => decrease money by product price
6. reload money every 1s ==> check & disable buttons in case of "4" conditions
*/

var totalMoney = 200;

var products = [100,120,465,55,124,135,16,222,154,17,694]

products.forEach(product_price => {
    // create span for product and add the price
    var span = document.createElement("span");
    span.innerText = product_price;
    span.className = "product";
    document.querySelector(".container").appendChild(span);
    // create buy button
    var buyButton = document.createElement("button");
    // if money < price => disable button
    if (totalMoney < product_price){
        buyButton.className = "disable";
    }
    buyButton.innerHTML = "Buy Product";

    span.appendChild(buyButton);
    // onclick => Buy and decrease money
    buyButton.onclick = () => {
        if (buyButton.className != "disable" && totalMoney > 0 && totalMoney - product_price >= 0){
            totalMoney -= product_price;
        }
    }
});

// load money every 1s
setInterval(() => {
    document.getElementById("money").innerHTML = "Money : " + totalMoney;
    document.querySelectorAll("span").forEach(p=>{
        if (parseInt(p.innerText) > totalMoney){
            // after every buy => compare products price and moeny + disable greaters than money
            p.childNodes.forEach(btn=>{btn.className = "disable"})
        }
    })
},200);

