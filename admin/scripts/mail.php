<?php
     function redirect_to($location){
        if($location != NULL){
          header("Location: {$location}");
          exit;
        }
      }

function submitMessage($direct, $first_name, $email, $message) {
    //echo "From submit message()";
    $to = "haydn@haydnfee.com";
    $subject = "message from user from hosting";
    $extra = "Reply to: ".$email;
    $msg = "Name: ".$first_name."\n\nEmail: ".$email."\n\nMessage: ".$message;
    mail($to,$subject,$msg,$extra);
?>  