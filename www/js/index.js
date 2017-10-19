window.localStorage.setItem( "pen", "blue");
window.localStorage.setItem( "computer", "black");
window.localStorage.setItem( "phone", "white");
var pen=window.localStorage.getItem("pen");
var com=window.localStorage.getItem("computer");
var phone=window.localStorage.getItem("phone");
//document.addEventListener("deviceready", onDeviceReady, false);

var myObj = { 
    "chocolate's name":"M&M's Choco Pouch", 
    "weight":"130g" ,
    "Energy":"2017kj/100g",
    "Salt":"0.13g"
    
};     
var myJSON = JSON.stringify(myObj);
window.localStorage.setItem("chocolate",myJSON);
var getchocolate = window.localStorage.getItem("chocolate");
var chocoJSON = JSON.parse(getchocolate);

alert(chocoJSON.weight);

//function onDeviceReady() {
	
	$(document).ready(function(){
        $("#pen").text("pen's colour is " + pen); 
        $("#com").text("computer's colour is " + com); 
        $("#phone").text("computer's colour is " + phone); 
        $("#weight").test(chocoJSON.weight);
        
    });
                         
	//alert("device ready");
    //}

