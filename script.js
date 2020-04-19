/* Hands-on Project 7-5
Honami Sasahara
4/15/2020
*/

"use strict" 
var delivInfo = [];
function processDeliveryInfo(){
    delivInfo.name = document.getElementById("nameinput").value;
    delivInfo.addr = document.getElementById("addrinput").value;
    delivInfo.city = document.getElementById("cityinput").value;
    delivInfo.email = document.getElementById("emailinput").value;
    delivInfo.phone = document.getElementById("phoneinput").value;
            
    for(var prop in delivInfo){
        document.getElementById("deliverTo").innerHTML += "<p>" +"&nbsp"+ delivInfo[prop]+ "  </p>";
        } 
            
    }

function previewOrder(){
    processDeliveryInfo();
    document.getElementsByTagName("section")[0].style.display = "block";
    processFood();
    }

function createEventListeners(){
    var trigger = document.getElementById("previewBtn");
    if (trigger.addEventListener){
        trigger.addEventListener("click",previewOrder, false);
    } else if (trigger.attachEvent){
        trigger.attachEvent("onclick",previewOrder);
    }
}
    if (window.addEventListener){
        window.addEventListener("load", createEventListeners, false);
    } else if (window.attachEvent){
        window.attachEvent("onload", createEventListeners);
    }

// 7-5//
var foodInfo=[];
var foodSummary = document.getElementById("order").value;

function processFood(){
    var crustOpt = document.getElementsByName("crust");
    var toppings = 0;
    var toppingBoxes = document.getElementsByName("toppings");
    var instr = document.getElementById("instructions").value;
    //crust
    if (crustOpt[0].checked){
        foodInfo.crust= crustOpt[0].value;
    } else if (crustOpt[1].checked){
        foodInfo.crust=crustOpt[1].value;
    }
    //size
    var selectedSize = document.getElementById("size").value;
    foodInfo.size = selectedSize;
    //Toppings
    for (var i = 0; i < toppingBoxes.length; i++) {
        if (toppingBoxes[i].checked)
            toppings += 1;
            foodInfo.topping= toppingBoxes[i].value;
    }
    
    if (instr.length >0)
        foodInfo.instructions= instr;
    else 
        foodInfo.instructions= "N/A";
    
        document.getElementById("order").innerHTML +="<p><span>Crust</span>: "+foodInfo.crust +"</p>";
        document.getElementById("order").innerHTML +="<p><span>Size</span>: "+foodInfo.size +"</p>";
        document.getElementById("order").innerHTML +="<p><span>Toppings</span>: " +"</p>";
        document.getElementById("order").innerHTML +="<ul>";
        for (var i = 1; i <  6; i++){
            if (foodInfo["topping" + i]){
                document.getElementById("order").innerHTML +="<li>" + foodInfo["topping" + i] +"</li>";
            }
        }
        document.getElementById("order").innerHTML +="</ul>";
        document.getElementById("order").innerHTML +="<p><span>Instructions</span>: "+ foodInfo.instructions;
        document.getElementsById("order")[0].style.display = "block";
}