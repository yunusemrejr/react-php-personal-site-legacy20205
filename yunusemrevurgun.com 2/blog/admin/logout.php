<?php

session_start();

 if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== "JFJF84RYRJCUIDU3HJDIFUEJ333HDHDJDCDI833JAQAWSTGFKH") {
    session_unset();     // unset $_SESSION variable for the run-time 
    session_destroy();
    // Redirect to the login page if the user is not logged in
    header('Location: admin.php');
    exit;
}else{
    session_unset();     // unset $_SESSION variable for the run-time 
    session_destroy();  
    header('Location: admin.php');
    exit;  
}

?>