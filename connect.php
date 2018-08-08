<?php

$username = filter_input(INPUT_POST, 'username');
$password = filter_input(INPUT_POST, 'password');

if(!empty($username)){
if(!empty($password)){
  $host = "localhost";
  $username = "ghoefer";
  $dbpassword= "x";
  $dbname= "rentsmart";

  $conn = new Mysql ($host, $dbusername, $password, $dbname);

  if (mysqli_connect_error()){
    die('Connect Error ( ' . mysqli_connect_error() .') '
    . mysqli_connect_error());
  }
  else{
    $sql = "INSERT INTO account(username, password)
    values ('$username','$password')";
    if($conn->query($sql)){
      echo "New record was inserted";
    }
    else{
      echo "Error: " . $sql . "<br>" . $conn ->error;
    }
    $conn ->close();
  }
}

else{
  echo "Please type in your password";
  die();
}
}
else {
  echo "Please type your username";
  die();

}
 ?>
