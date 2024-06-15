<?php
session_start();
include "model/pdo.php";
include "view/header.php";
include "global.php";

$spnew = loadall_sanpham_home();
$dsdm = loadall_danhmuc();
$dstop10 = loadall_sanpham_top10();

if (isset($_GET['act']) && ($_GET['act'] != "")) {
  $act = $_GET['act'];
  switch ($act) {
 
  }
} else {
  include "view/home.php";
}
include "./view/footer.php";