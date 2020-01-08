<?php
  //require_once ('admin/scripts/config.php');
  if (isset($_POST['submit'])){//Change this to submit
    // $direct = "thankyou.php";
    $name = $_POST['name'];
    $email = $_POST['email'];
	$message = $_POST['message'];

	// Cole's
	$subject ="From: ".$email;
	$emailBody = "From: ".$email."<br><br>"."Message: <br>".$message;

	// mail('haydn@haydnfee.com',$subject,$emailBody);
	$mailFunc = mail('haydn@haydnfee.com',$subject,$emailBody);
	// 	
	// Cole's
  }

    // if('msg' === "") {
    //   echo "send mail";
	//   $sendMail = submitMessage($direct, $name, $email, $message);
	//   header("contact.php");
	//   exit();
    // }else{
	// 	echo "There was an error processing your email.";
	// }

    ?>

<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Haydn Fee</title>
<link href="css/foundation.css" rel="stylesheet" type="text/css" media="screen">
<link href="css/animate.css" rel="stylesheet" type="text/css" media="screen">
<link href="css/app.css" rel="stylesheet" type="text/css" media="screen">
<link href="https://fonts.googleapis.com/css?family=Roboto|Share+Tech+Mono" rel="stylesheet">

</head>
<body class="contact">
	<h2 class="hidden">Contact Me</h2>
		
	<header id="headerHome">
		<a href="index.php"><img src="images/logo.svg" id="logo" alt="logo"></a>
		<div class="navMenu">
			<img src="images/hamNav.png" id="hamBtn" alt="nav">
			<div class="dropDownContent">
				<a href="index.php">Home</a>
				<a href="work.html">Design&amp;Illustration</a>
				<a href="contact.php">Contact Me</a>
			</div>
		</div>
	
	</header>

	<h2 class="hidden">Main Menu</h2>
	<div id="sideNav">
		<div id="sideNavLink">
			<a href="index.php">HOME<img src="images/homeIcon.svg"></a>
			<a href="work.html">PORTFOLIO<img src="images/portfolioIcon.svg"></a>
			<a href="*">CONTACT<img src="images/mailIcon.svg"></a>
		</div>
		<img id="sideNavLogo" src="images/logo.svg">
	</div>

	<section class="contactForm">
		<h2 class="hidden">Contact Form</h2>
		<div>
			<form id="contact" action="contact.php" method="post">
				<label>Name</label>
				<input type="text" name="name" id="name" placeholder="Name...">

				<label>Email</label>
				<input type="email" name="email" id="email" placeholder="Email Address...">	

				<label>Message</label>
				<textarea id="message" name="message" rows="5"></textarea>

				<input type="submit" value="Send" name="submit" id="formSubmit"><!--Give this the name of submit-->
			</form>
			
			<div id="formDesc">
				<p>If your interested in collaborating with or contacting me, please fill out the form above and Ill get back to you as soon as possible. Thank you!</p>
			</div>	
		</div>
	</section>

	<footer>
		<div id="footercon">
		<a href="">
				<img class="socialLink" src="images/linkedin_logo.png" alt="linkedin logo">
			</a>
			<ul id="footerNav">
				<li><a href="index.php">Home</a></li>
				<li><a href="work.html">Design&amp;Illustration</a></li>
				<li><a href="*">Contact Me</a></li>
			</ul>
		</div>
	</footer>
	
	<!--js load command line-->
	<script src="js/vendor/jquery.js"></script>
    <script src="js/vendor/what-input.js"></script>
	<script src="js/vendor/foundation.js"></script>
	<script src="js/jquery.lettering.js"></script>
	<script src="js/jquery.textillate.js"></script>
    <script src="js/app.js"></script>
</body>
</html>
