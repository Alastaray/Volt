        <section id="register" >
            <h1>Регистрация</h1>
            <form class="shape" method="POST">
                <div class="form">
                    <fieldset>
                        <legend>Имя</legend>
                        <div class="input">                      
                            <p class=<?php if($errors[0]!='')echo("success");else echo("error");?>></p>
                             <input id="name" name="name" type="text">
                        </div>                    
                    </fieldset>
                    <fieldset>
                        <legend>Фамилия</legend>
                        <div class="input">                      
                            <p class=<?php if($errors[1]!='')echo("success");else echo("error");?>></p><input id="surname" name="surname" type="text">
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Номер телефона</legend>
                        <div class="input">                      
                            <p class=<?php if($errors[2]!='')echo("success");else echo("error");?>></p><input id="phone" name="phone" type="text" maxlength="10">
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Эл. почта</legend>
                        <div class="input">                      
                            <p class=<?php if($errors[3]!='')echo("success");else echo("error");?>></p><input id="email" name="email" type="text">
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Пароль</legend>
                        <div class="input">                      
                            <p class=<?php if($errors[4]!='')echo("success");else echo("error");?>></p><input id="password" name="password" type="password">
                        </div>
                    </fieldset>
                    <button id="registered">Зарегестрироваться</button><br>
                    <a href="#">Я уже зарегестрирован</a>
                </div>
                <div class="line">
                    <div></div>
                    <p>или</p>
                    <div></div>
                </div>
                <div class="or">
                    <h2>Войти как пользователь</h2>
                    <button class="google"></button>
                    <button class="vk"></button>
                </div>
            </form>
        </section>