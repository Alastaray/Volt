"use strict"
document.addEventListener("DOMContentLoaded", load);

function load() {
    let but_open_reg= document.getElementById('reg-logo');
    but_open_reg.addEventListener("click",open_reg_form);
    let close_reg= document.getElementById('eclipse');
    close_reg.addEventListener("click",close_reg_form);

    let but_reg = document.getElementById('registered');
    but_reg.addEventListener("click",SingUp);

    
}

function open_reg_form(){
    let eclipse= document.getElementById('eclipse');
    let register= document.getElementById('register');
    if(register.style.display != "block"){
        register.style.display = "block";
        eclipse.style.display = "block";
    }
}
function close_reg_form(){
    let eclipse= document.getElementById('eclipse');
    let register= document.getElementById('register');

    if(register.style.display == "block"){
        register.style.display = "none";
        eclipse.style.display = "none";
    }          
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
    http.send();
}

function getProducts() {
    console.log('start get products');
    sendRequest({
        method: 'GET',
        url: 'products.php',
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

function SingUp(){
    
}