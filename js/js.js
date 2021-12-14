"use strict"
document.addEventListener("DOMContentLoaded", load);

function load() {
    let but_open_reg= document.getElementById('reg-logo');
    but_open_reg.addEventListener("click",open_reg_form);
    let close_reg= document.getElementById('eclipse');
    close_reg.addEventListener("click",close_reg_form);

    let but_enter= document.getElementById('open_entering');
    but_enter.addEventListener("click",open_enter);       
    let but_reg= document.getElementById('open_reg');
    but_reg.addEventListener("click",open_reg); 

    let but_singup = document.getElementById('registered');
    but_singup.addEventListener("click",SingUp);   
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
    else http.send();
    
}


function Registration(http){
    let json = JSON.parse(http.responseText);
    console.log(json);
    if(json.validate){
        if(json.insert){
            alert("Регистрация успешная!");
            close_reg_form();
        }else{
            alert("Регистрация не успешная!");
        }     
        
    }else{        
        if(!json.name){
            document.getElementById("validate_name").classList.remove('success');
            document.getElementById("validate_name").classList.add('error');
        }else{
            document.getElementById("validate_name").classList.remove('error');
            document.getElementById("validate_name").classList.add('success');
        }
        if(!json.surname){
            document.getElementById("validate_surname").classList.remove('success');
            document.getElementById("validate_surname").classList.add('error');
        }
        if(!json.phone){
            document.getElementById("validate_phone").classList.remove('success');
            document.getElementById("validate_phone").classList.add('error');
        }
        if(!json.email){
            document.getElementById("validate_email").classList.remove('success');
            document.getElementById("validate_email").classList.add('error');
        }
        if(!json.password){
            document.getElementById("validate_password").classList.remove('success');
            document.getElementById("validate_password").classList.add('error');
        }
    }

    
}

function SingUp(e){
    e.preventDefault();
    console.log('start SingUp');
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
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
            console.log("Error");
        }
    });
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
    let entering= document.getElementById('entering');
    if(register.style.display == "block" || entering.style.display == "block"){
        register.style.display = "none";
        eclipse.style.display = "none";
        entering.style.display = "none";
    }          
}
function open_enter(e){
    e.preventDefault();
    let register= document.getElementById('register');
    let entering= document.getElementById('entering');
    if(register.style.display == "block"){
        register.style.display = "none";
        entering.style.display = "block";
    } 
}
function open_reg(e){
    e.preventDefault();
    let register= document.getElementById('register');
    let entering= document.getElementById('entering');
    if(entering.style.display == "block"){
        entering.style.display = "none";
        register.style.display = "block";
    } 
}

