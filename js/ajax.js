"use strict"
document.addEventListener("DOMContentLoaded", load);




function load() {
    let but_reg = document.getElementById('registered');
    but_reg.addEventListener("click",SingUp);

    
}
function sendRequest(options) {
    var http;
    try {
        http = new XMLHttpRequest();
    }
    catch(e) {
        try {
            http = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch(e) {
        }
    }
    http.open(options.method, options.url);
    http.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status === 200) {
                options.success(this);
            } else {
                options.error(this);
            }
        }
    }
    if(options.data){
        if(options.contentType){
            http.setRequestHeader("Content-type",options.contentType);
        }
        http.send(options.data);
    }
    else http.send(options.data);
    
}

function getProducts() {
    console.log('start get products');
    sendRequest({
        method: 'GET',
        url: 'products.php',
        contentType: "application/x-www-form-urlencoded",
        data: "",
        success: function(http) {
            var products = JSON.parse(http.responseText);
            var prodBody = document.getElementById("products");
            str ="";
            for (var i=0;i<products.length;i++) {
                str += "<tr><td>" + products[i].product_id+ "</td><td>" + products[i].model+"</td></tr>"
            }
            prodBody.innerHTML = str;
        },
        error: function(http) {

        }
    });
}

function Registration(http){

}




function SingUp(e){
    e.preventDefault();
    console.log('start SingUp');
    let name = document.getElementById("name").value;
    let surname = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    sendRequest({
        method: 'POST',
        url: '/include/validate.php',
        contentType: "application/x-www-form-urlencoded",
        data: "name="+name+"&"+"surname="+surname+"&"+"phone="+phone+"&"+"email="+email+"&"+"password="+password,
        success: function(http) {
            Registration(http);            
        },
        error: function(http) {

        }
    });
}