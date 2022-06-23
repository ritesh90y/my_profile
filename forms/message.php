<?php
	
	$message = $_POST['message'];
	

	// Database connection
	$conn = new mysqli('localhost','root','','database');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into message( message) values(?)");
		$stmt->bind_param("s",$message);
		$execval = $stmt->execute();
		echo $execval;
		$stmt->close();
		$conn->close();
	}
?>