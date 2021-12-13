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
        
        <form class="search-panel">
            <input placeholder="Я ищу..." name="search" type="text">
            <button>Искать</button>
        </form>
    </div>


</footer>
</body>

</html>