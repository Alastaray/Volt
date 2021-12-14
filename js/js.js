"use strict"
document.addEventListener("DOMContentLoaded", load);

function load() {
    let but_open_reg = document.getElementById('reg-logo');
    but_open_reg.addEventListener("click", open_reg_form);//open_reg_form
    let close_reg = document.getElementById('eclipse');
    close_reg.addEventListener("click", close_reg_form);

    let but_enter = document.getElementById('open_entering');
    but_enter.addEventListener("click", open_enter);
    let but_reg = document.getElementById('open_reg');
    but_reg.addEventListener("click", open_reg);

    let but_singup = document.getElementById('registered');
    but_singup.addEventListener("click", SingUp);
    let but_login = document.getElementById('enter');
    but_login.addEventListener("click", LogIn);
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
function sendRequest(options) {
    var http;
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
    console.log('start SingUp');
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
    console.log('start LogIn');
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







function getProducts() {
    console.log('start get products');
    sendRequest({
        method: 'GET',
        url: 'products.php',
        contentType: "application/x-www-form-urlencoded",
        data: "",
        success: function (http) {
            var products = JSON.parse(http.responseText);
            var prodBody = document.getElementById("products");
            str = "";
            for (var i = 0; i < products.length; i++) {
                str += "<tr><td>" + products[i].product_id + "</td><td>" + products[i].model + "</td></tr>"
            }
            prodBody.innerHTML = str;
        },
        error: function (http) {

        }
    });
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