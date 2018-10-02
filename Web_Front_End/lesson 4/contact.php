<?php
	$name = $_POST["name"];
	$Phone = $_POST["Phone"];
	$textarea = $_POST["textarea"];

	$From = 'dmitriy.mastiuk@gmail.com'; /*почта хостинга*/
	$to = 'dmitriy.mastiuk@gmail.com'; /*почта для редиректа*/
	$sub = "Contact form";
	$message = "Name: $name\nPhone: $Phone\nMessage: $textarea";
	mail($to,$sub,$message,"Content-type:text/plain; charset = UTF-8\r\nFrom:$From");
?>