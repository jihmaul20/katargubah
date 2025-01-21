<?php
$servername = "localhost";  // Database host
$username = "username";     // Database username
$password = "password";     // Database password
$dbname = "katar_gubah";  // Database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
