        <?php
        $path = "<img src='/images/page/"
        ?>
        <section  class="showed_win" id="register">
            <h1>Регистрация</h1>
            <form class="shape" method="POST">
                <div class="form">
                    <fieldset>
                        <legend>Имя</legend>
                        <div class="input">
                            <input id="name" name="name" type="text">
                            <p id="validate_name"></p>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Фамилия</legend>
                        <div class="input">                     
                            <input id="surname" name="surname" type="text">
                            <p id="validate_surname"></p>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Номер телефона</legend>
                        <div class="input">
                        
                            <input id="phone" name="phone" type="text" maxlength="10">
                            <p id="validate_phone"></p>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Эл. почта</legend>
                        <div class="input">
                            <input id="email" name="email" type="text">
                            <p id="validate_email"></p>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Пароль</legend>
                        <div class="input">                      
                            <input id="password" name="password" type="password">
                            <p id="validate_password"></p>
                        </div>
                    </fieldset>
                    <button id="registered">Зарегистрироваться</button><br>
                    <button id="open_entering">Я уже зарегестрирован</button><br>
                </div>
                <div class="line">
                    <div></div>
                    <p>или</p>
                    <div></div>
                </div>
                <div class="or">
                    <h2>Войти как пользователь</h2>
                    <button class="another-login">Google</button>
                    <button class="another-login">VKontakte</button>
                </div>
            </form>
        </section>


        
        <section class="showed_win" id="entering">
        <h1>Вход</h1>
            <form class="shape" method="POST">
                <div class="form">
                    <fieldset>
                        <legend>Эл. почта</legend>
                        <div class="input">
                            <?php if($errors[3]!='')echo($path."right.png'>");else echo($path."wrong.png'>");?></p>
                            <input id="email_enter" name="email" type="text">
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Пароль</legend>
                        <div class="input">
                            <?php if($errors[4]!='')echo($path."right.png'>");else echo($path."wrong.png'>");?></p>
                            <input id="password_enter" name="password" type="password">
                        </div>
                    </fieldset>
                    <button id="enter">Войти</button><br>
                    <button id="open_reg">Зарегистрироваться</button><br>
                </div>
                <div class="line">
                    <div></div>
                    <p>или</p>
                    <div></div>
                </div>
                <div class="or">
                    <h2>Войти как пользователь</h2>
                    <button class="another-login">Google</button>
                    <button class="another-login">VKontakte</button>
                </div>
            </form>

        </section>