"use strict"
document.addEventListener("DOMContentLoaded", load);
let dataSearch = {page:1};

function load() {
    document.getElementById('reg-logo').addEventListener("click", open_reg_form);//open_reg_form
    document.getElementById('eclipse').addEventListener("click", close_reg_form);

    document.getElementById('open_entering').addEventListener("click", open_enter);
    document.getElementById('open_reg').addEventListener("click", open_reg);

    document.getElementById('registered').addEventListener("click", SingUp);
    document.getElementById('enter').addEventListener("click", LogIn);
    
    document.getElementById('search').addEventListener("keyup", Search);

    document.getElementById('home').addEventListener("click", GoHome);
    document.getElementById('guitars').addEventListener("click", getGuitars);
    document.getElementById("adminprod").style.display = "none";
    if(getCookie("auth"))document.getElementById("reg-logo").classList.add('auth');
}

function GoHome(){  
    document.getElementById("bg").style.display = "flex";
    document.getElementById("adminprod").style.display = "none";
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function sendRequest(options) {
    let http;
    try {
        http = new XMLHttpRequest();
    } catch (e) {
        try {
            http = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
    }
    http.open(options.method, options.url);
    http.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status === 200) {
                options.success(this);
            } else {
                options.error(this);
            }
        }
    }
    if (options.data) {
        if (options.contentType) {
            http.setRequestHeader("Content-type", options.contentType);
        }
        http.send(options.data);
    } else http.send();

}

function SingUp(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    sendRequest({
        method: 'POST',
        url: '/include/singup.php',
        contentType: "application/x-www-form-urlencoded",
        data: "name=" + name + "&" + "surname=" + surname + "&" + "phone=" + phone + "&" + "email=" + email + "&" + "password=" + password,
        success: function (http) {
            Registration(http);
        },
        error: function (http) {
            console.log("Error");
        }
    });
}
function Registration(http) {
    let json = JSON.parse(http.responseText);
    if (json.validate) {
        if (json.insert) {
            alert("Регистрация успешная!");
            close_reg_form();
            document.cookie = "auth=1";
            document.getElementById("reg-logo").classList.add('auth');
        } else {
            alert("Регистрация не успешная!");
        }

    } else {
        if (!json.name) {
            document.getElementById("validate_name").classList.remove('success');
            document.getElementById("validate_name").classList.add('error');
        } else {
            document.getElementById("validate_name").classList.remove('error');
            document.getElementById("validate_name").classList.add('success');
        }
        if (!json.surname) {
            document.getElementById("validate_surname").classList.remove('success');
            document.getElementById("validate_surname").classList.add('error');
        } else {
            document.getElementById("validate_surname").classList.remove('error');
            document.getElementById("validate_surname").classList.add('success');
        }
        if (!json.phone) {
            document.getElementById("validate_phone").classList.remove('success');
            document.getElementById("validate_phone").classList.add('error');
        } else {
            document.getElementById("validate_phone").classList.remove('error');
            document.getElementById("validate_phone").classList.add('success');
        }
        if (!json.email) {
            document.getElementById("validate_email").classList.remove('success');
            document.getElementById("validate_email").classList.add('error');
        } else {
            document.getElementById("validate_email").classList.remove('error');
            document.getElementById("validate_email").classList.add('success');
        }
        if (!json.password) {
            document.getElementById("validate_password").classList.remove('success');
            document.getElementById("validate_password").classList.add('error');
        } else {
            document.getElementById("validate_password").classList.remove('error');
            document.getElementById("validate_password").classList.add('success');
        }
    }
}


function LogIn(e) {
    e.preventDefault();
    let email = document.getElementById("email_e").value;
    let password = document.getElementById("password_e").value;
    sendRequest({
        method: 'POST',
        url: '/include/login.php',
        contentType: "application/x-www-form-urlencoded",
        data: "email=" + email + "&" + "password=" + password,
        success: function (http) {
            Entrance(http);
        },
        error: function (http) {
            console.log("Error");
        }
    });
}
function Entrance(http) {
    let json = JSON.parse(http.responseText);
    if (json.validate&&json.email&&json.password) {
        alert("Вход успешнен!");
        close_reg_form();
        document.cookie = "auth=1";  
        document.getElementById("reg-logo").classList.add('auth');      
    } else {
        if (!json.email) {
            document.getElementById("validate_email").classList.remove('success');
            document.getElementById("validate_email").classList.add('error');
        } else {
            document.getElementById("validate_email").classList.remove('error');
            document.getElementById("validate_email").classList.add('success');
        }
        if (!json.password) {
            document.getElementById("validate_password").classList.remove('success');
            document.getElementById("validate_password").classList.add('error');
        } else {
            document.getElementById("validate_password").classList.remove('error');
            document.getElementById("validate_password").classList.add('success');
        }
    }
}





function htmlProducts(products) {
    let prodBody = document.getElementById("adminprod");
    let str ="";
    if(products.rows.length){
        str+="<div class='guitars'>";
        if(dataSearch.page>=2)str+="<a class='pointer' onclick='getProducPage("+(dataSearch.page-1)+")' href='#" + (dataSearch.page-1) + "'><img src='/images/page/pointer_left.png'></a>";
    }
        
    for (let i=0;i<products.rows.length;i++) {
        str+="<div class='product'>"+
        "<div class='card'>"+
            "<div class='price'>"+
            products.rows[i].price+" UAH</div>"+           
            "<button class='more'>Подробнее</button>"+
           " <img class='picture' src="+ products.rows[i].path+"> </div>"+      
        "<div class='name'>"+ products.rows[i].name+"</div></div>";                      
    }
    if(products.rows.length){
        if(dataSearch.page<products.pagination.pagecount)str+="<a class='pointer' onclick='getProducPage("+(dataSearch.page+1)+")' href='#" + (dataSearch.page+1) + "'><img src='/images/page/pointer_right.png'></a>";
        str+="</div>";
    }
        
    prodBody.innerHTML = str;

    let pagination = document.getElementById("pag");
    let limitPages = products.pagination.limit;
    let page = products.pagination.page;
    let pages =products.pagination.pagecount;
    let first = page - Math.floor(limitPages/2);
    if (first < 1) first = 1;
    let last = first + limitPages-1;
    if (last > pages) {
        last = pages;
        first = last - limitPages + 1;
        if (first < 1) first = 1;
    }
    str ="";
    if (first > 1) {
        str += "<a onclick='getProducPage(1)' href='#1'>1</a>";
        
    }
    if (first > 2) {
        str += "<a onclick='getProducPage("+(first-1)+")' href='#" + (first-1) + "'>...</a>";
    }

    for (let i=first;i<=last;i++) {
        if(dataSearch.page==i)str += "<a id='active' onclick='getProducPage("+i+")' href='#" + i + "'>"+i+"</a> ";
        else str += "<a onclick='getProducPage("+i+")' href='#" + i + "'>"+i+"</a> ";
    }

    if (last < pages - 1) {
        str += "<a onclick='getProducPage("+(last+1)+")' href='#" + (last+1) + "'>...</a>";
    }
    if (last <pages) {
        str += "<a onclick='getProducPage("+pages+")' href='#"+pages+"'>"+pages+"</a>";
        
    }
    pagination.innerHTML = str;
}
function getProducPage(page) {
    dataSearch.page = page;
    GetRows(dataSearch);
}
function GetRows(params) {
    let str = '';
    if (params) {
        for (let key in params) {
                str += encodeURIComponent(key) + "=" + encodeURIComponent(params[key]) + "&";
        }
    }
    console.log(str);
    sendRequest({
        method: 'GET',
        url: '/views/pages/guitars.php?'+str,
        success: function(http) {
            let products = JSON.parse(http.responseText);
            console.log(products.search);
            htmlProducts(products);
        },
        error: function(http) {

        }
    });
}

function getGuitars(e) {
    document.getElementById("bg").style.display = "none";
    document.getElementById("adminprod").style.display = "block";
    e.preventDefault();
    GetRows();
}
let old = '';
function Search() {
    let val = document.getElementById('search').value;
    if (val != old){
        dataSearch.search = val;
        old=val;
        GetRows(dataSearch);
    }
    
}








function open_reg_form() {
    if(getCookie("auth")!=1)
    {
        let eclipse = document.getElementById('eclipse');
        let register = document.getElementById('register');
        if (register.style.display != "block") {
            register.style.display = "block";
            eclipse.style.display = "block";
        }
    }
}

function close_reg_form() {
    let eclipse = document.getElementById('eclipse');
    let register = document.getElementById('register');
    let entering = document.getElementById('entering');
    if (register.style.display == "block" || entering.style.display == "block") {
        register.style.display = "none";
        eclipse.style.display = "none";
        entering.style.display = "none";
    }
}

function open_enter(e) {
    e.preventDefault();
    let register = document.getElementById('register');
    let entering = document.getElementById('entering');
    if (register.style.display == "block") {
        register.style.display = "none";
        entering.style.display = "block";
    }
}

function open_reg(e) {
    e.preventDefault();
    let register = document.getElementById('register');
    let entering = document.getElementById('entering');
    if (entering.style.display == "block") {
        entering.style.display = "none";
        register.style.display = "block";
    }
}