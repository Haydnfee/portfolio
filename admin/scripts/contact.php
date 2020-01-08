<?php
  require_once ('admin/scripts/config.php');
  if (isset($_POST['name'])){
    $direct = "thankyou.php"
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    if($last_name === "") {
      echo "send mail";
      $sendMail = submitMessage($direct, $first_name, $email, $message);
    }

    ?>