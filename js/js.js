
    document.addEventListener("DOMContentLoaded", load);

function load() {
    let but_open_reg= document.getElementById('reg-logo');
    but_open_reg.addEventListener("click",open_reg_form);
    let close_reg= document.getElementById('eclipse');
    close_reg.addEventListener("click",close_reg_form);
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