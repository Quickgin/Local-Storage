var key = "pen";
var value = "blue";
window.localStorage.setItem( key, value );
var value = window.localStorage.getItem(key);
alert(value);



document.addEventListener("deviceready", onDeviceReady, false);
		
// device APIs are available
//
    function onDeviceReady() {
	    
	alert("device ready");
    }

