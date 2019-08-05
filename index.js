
var prix = [100,50,80];// Unit prix tab
var Total = 0;
var totalitem1 = 0,totalitem2=0,totalitem3=0;

function increment() {

    var count = parseInt(document.querySelector(".shopping-item-quantity1").textContent);
    count++;
    console.log(count);
    document.querySelector(".shopping-item-quantity1>span").innerHTML =count;
    var total1 = parseInt((document.querySelector(".shopping-item-price1").textContent));
    var total1 = count * prix[0];
    totalitem1 = total1;
    console.log(totalitem1);
    document.getElementsByClassName("shopping-item-price1")[0].innerHTML =""+totalitem1+"dt";
    Total = totalitem1+totalitem2+totalitem3;
    document.getElementsByClassName("total du panier")[0].innerHTML =""+Total+"dt";
}

function increment2() {

    var count = parseInt(document.querySelector(".shopping-item-quantity2").textContent);
    count++;
    console.log(count);
    document.querySelector(".shopping-item-quantity2>span").innerHTML =count;
    var total1 = parseInt((document.querySelector(".shopping-item-price2").textContent));
    var total1 = count * 100;
    totalitem2 = total1;
    console.log(totalitem2);
    document.getElementsByClassName("shopping-item-price2")[0].innerHTML =""+totalitem2+"dt";
    Total = totalitem1+totalitem2+totalitem3;
    document.getElementsByClassName("total du panier")[0].innerHTML =""+Total+"dt";
}

function increment3() {

    var count = parseInt(document.querySelector(".shopping-item-quantity3").textContent);
    count++;
    console.log(count);
    document.querySelector(".shopping-item-quantity3>span").innerHTML =count;
    var total1 = parseInt((document.querySelector(".shopping-item-price3").textContent));
    var total1 = count * 100;
    totalitem3 = total1;
    console.log(totalitem3);
    document.getElementsByClassName("shopping-item-price3")[0].innerHTML =""+totalitem3+"dt";
    Total = totalitem1+totalitem2+totalitem3;
    document.getElementsByClassName("total du panier")[0].innerHTML =""+Total+"dt";
}


function decrement() {

    var count = parseInt(document.querySelector(".shopping-item-quantity1").textContent);
    console.log(count);
    if (count!=0)
    {
     count--;  
   
    
    document.querySelector(".shopping-item-quantity1>span").innerHTML =count;
    var total1 = parseInt((document.querySelector(".shopping-item-price1").textContent));
    var total1 = total1-100;
    totalitem1 = total1;
    console.log(totalitem1);
    document.getElementsByClassName("shopping-item-price1")[0].innerHTML =""+totalitem1+"dt";
    Total = totalitem1+totalitem2+totalitem3;
    document.getElementsByClassName("total du panier")[0].innerHTML =""+Total+"dt";
} }

function decrement2() {

    var count = parseInt(document.querySelector(".shopping-item-quantity2").textContent);
    console.log(count);
    if (count!=0)
    {
     count--;  
    
    document.querySelector(".shopping-item-quantity2>span").innerHTML =count;
    var total1 = parseInt((document.querySelector(".shopping-item-price2").textContent));
    var total1 = total1-100;
    totalitem2 = total1;
    console.log(totalitem2);
    document.getElementsByClassName("shopping-item-price2")[0].innerHTML =""+totalitem2+"dt";
    Total = totalitem1+totalitem2+totalitem3;
    document.getElementsByClassName("total du panier")[0].innerHTML =""+Total+"dt";
}}

function decrement3() {

    var count = parseInt(document.querySelector(".shopping-item-quantity3").textContent);
    console.log(count);
    if (count!=0)
    {
     count--;  
    
    document.querySelector(".shopping-item-quantity3>span").innerHTML =count;
    var total1 = parseInt((document.querySelector(".shopping-item-price3").textContent));
    var total1 = total1-100;
    totalitem3 = total1;
    
    console.log(totalitem3);
    document.getElementsByClassName("shopping-item-price3")[0].innerHTML =""+totalitem3+"dt";
    
    Total = totalitem1+totalitem2+totalitem3;
document.getElementsByClassName("total du panier")[0].innerHTML =""+Total+"dt";
}}


