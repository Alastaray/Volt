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
