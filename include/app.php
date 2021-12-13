<?php
class App {
    public $db;

    public function Error(){
        require_once('views/header.php');
        $error = $this->db->Error();
        require_once('views/errors.php');
        require_once('views/footer.php');
    }

    public function Run($config) {
        $this->db = new DB($config['db']);

        if (!$this->db->IsConnect()) {
            $this->Error();
            return;
        }
        $path = explode('/', explode('?', $_SERVER['REQUEST_URI'])[0])[1];
        if (!$path) $path = 'home';
        $file = 'views/pages/'.$path.'.php';
       
        if (is_file($file)) {
            require_once('views/header.php');
            require_once($file);
            require_once('views/footer.php');
        } 
        else {
            $this->Error();
        }
    }
}
