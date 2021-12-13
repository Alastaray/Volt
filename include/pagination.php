<?php
class Pagination
{
    private $options = [];
    public function __construct($options) {
        $this->options = $options;
    }

    public function GetPages() {
        $pages = 0;
        if ($this->options['rows'] > 0) {
            //$pages = (int)(($rowscount - 1) / $limit) + 1;
            $pages = ceil($this->options['rows']/ $this->options['limit']) ;
        }
        return $pages;
    }

    public function GetFirstRow() {
        return ($this->GetPage() - 1) * $this->GetLimit();
    }

    public function GetLimit() {
        return $this->options['limit'];
    }

    public function GetPage() {
        if ($this->GetPages() < 1) return 1;
        if ($this->options['page'] > $this->GetPages()) {
            return $this->GetPages();
        }
        return $this->options['page'];
    }


    public function BuildParams() {
        if (!isset($this->options['params']) || !$this->options['params']) {
            return '';
        }
        return http_build_query($this->options['params']);
    }

    public function show()
    {
        $page = $this->GetPage(); //200
        $pages = $this->GetPages();
        $limitPages = $this->options['limitPages'];
        $str = '';
        $first = $page - (int)($limitPages / 2);
        if ($first < 1) $first = 1;
        $last = $first + $limitPages - 1;
        if ($last > $pages) {
            $last = $pages;
            $first = $last - $limitPages + 1;
            if ($first < 1) $first = 1;
        }
        if ($first > 1) {
            $str .= "<a href='?page=1&".$this->BuildParams()."'>Первая</a>";
        }
        if ($first > 2) {
            $str .= "<a href='?page=".($first-1)."&".$this->BuildParams()."'>...</a>";
        }
        for ($i=$first; $i <= $last; $i++) {
            if ($i == $page) {
                $str .= "<a class='active' href='?page={$i}&".$this->BuildParams()."'>{$i}</a>";
            } else {
                $str .= "<a href='?page={$i}&".$this->BuildParams()."'>{$i}</a>";
            }
        }
        if ($last < $pages - 1) {
            $str .= "<a href='?page=".($last+1)."&".$this->BuildParams()."'>...</a>";
        }
        if ($last < $pages) {
            $str .= "<a href='?page={$pages}&".$this->BuildParams()."'>Последняя</a>";
        }
        return $str;
    }
}
