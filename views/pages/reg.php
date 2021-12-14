        <?php
        $path = "<img src='/images/page/"
        ?>
        <section id="register" class="showed_win">
            <h1>Регистрация</h1>
            <form class="shape" method="POST">
                <div class="form">
                    <fieldset>
                        <legend>Имя</legend>
                        <div class="input">
                            <?php if($errors[0]!='')echo($path."right.png'>");else echo($path."wrong.png'>");?>
                            </p>
                            <input id="name" name="name" type="text">
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Фамилия</legend>
                        <div class="input">
                            <?php if($errors[1]!='')echo($path."right.png'>");else echo($path."wrong.png'>");?></p>
                            <input id="surname" name="surname" type="text">
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Номер телефона</legend>
                        <div class="input">
                            <?php if($errors[2]!='')echo($path."right.png'>");else echo($path."wrong.png'>");?></p>
                            <input id="phone" name="phone" type="text" maxlength="10">
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Эл. почта</legend>
                        <div class="input">
                            <?php if($errors[3]!='')echo($path."right.png'>");else echo($path."wrong.png'>");?></p>
                            <input id="email" name="email" type="text">
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Пароль</legend>
                        <div class="input">
                            <?php if($errors[4]!='')echo($path."right.png'>");else echo($path."wrong.png'>");?></p>
                            <input id="password" name="password" type="password">
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
                            <input id="email" name="email" type="text">
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Пароль</legend>
                        <div class="input">
                            <?php if($errors[4]!='')echo($path."right.png'>");else echo($path."wrong.png'>");?></p>
                            <input id="password" name="password" type="password">
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