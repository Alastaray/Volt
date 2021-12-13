<div class="bg">
    <div class="ac-dc"></div>
</div>
<footer>
    <div class="search">
    <div class="logo-min"></div>
        <div class="pag">
            <?php
    if($pag){
        echo($pagination);
    }
    ?>
        </div>
        
        <div class="search-panel">
            <input placeholder="Я ищу..." name="insearch" type="text">
            <button name="search">Искать</button>
        </div>
    </div>


</footer>
</body>

</html>