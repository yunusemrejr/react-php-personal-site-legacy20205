<?php
    session_start();
    
     sleep(2);
 
// Assuming you store logged-in status in session when logging in
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== "JFJF84RYRJCUIDU3HJDIFUEJ333HDHDJDCDI833JAQAWSTGFKH") {
    // Redirect to the login page if the user is not logged in
    header('Location: admin.php');
    exit;
}

require "../../../YUNUSEMREVURGUN_DB/db.php";


 if(isset($_SESSION['logged_in'])&&$_SESSION['logged_in']==="JFJF84RYRJCUIDU3HJDIFUEJ333HDHDJDCDI833JAQAWSTGFKH"){
 
// Check if "last_activity" is set
if (isset($_SESSION['last_activity']) && (time() - $_SESSION['last_activity'] > 300)) {
    // last request was more than 5 minutes ago (300 seconds)
    session_unset();     // unset $_SESSION variable for the run-time 
    session_destroy();   // destroy session data in storage
    header("Location: https://yunusemrevurgun.com/"); // Redirect to login page after session destroy
    exit;
}
$_SESSION['last_activity'] = time(); // update last activity time stamp
if (!isset($_SESSION['created'])) {
    $_SESSION['created'] = time();
} else if (time() - $_SESSION['created'] > 150) {
    // session started more than 5 minutes ago
    session_regenerate_id(true);    // change session ID for the current session and invalidate old session ID
    $_SESSION['created'] = time();  // update creation time
}

if($_SERVER["REQUEST_METHOD"]==="POST"){
    
    $title=$_POST["title"];
    $description=$_POST["description"];
    $article_body=$_POST["articleBody"];
    $url_slug_pattern='/[^a-zA-Z]/';
    $url_slug_unwanted_matches=[];
    $url_slug= preg_replace($url_slug_pattern, "-", $title);
    
    if($title && $description && $article_body){
        
        $sanitized_title = filter_input(INPUT_POST, 'title', FILTER_SANITIZE_STRING);
$sanitized_description = filter_input(INPUT_POST, 'description', FILTER_SANITIZE_STRING);
$sanitized_article_body = filter_input(INPUT_POST, 'articleBody', FILTER_SANITIZE_STRING);
// Check if the sanitized input is not null or false which means there was input and it's safe
if ($sanitized_title !== null && $sanitized_title !== false
&&  $sanitized_description !== null && $sanitized_description !== false
&& $sanitized_article_body !== null && $sanitized_article_body !== false
) {
        
        
        //read template text file
        $file_template = "../posts/test.txt";
        $content_template = file_get_contents($file_template);
        if ($content_template !== false) {
            $html_content= str_replace("@title",$title,$content_template);
            $html_content= str_replace("@description",$description,$html_content);
            $html_content= str_replace("@article_body",$article_body,$html_content);
            
            //create HTML file and write to it
            $html_file_name= "../posts/".$url_slug.".html";
            $file = fopen($html_file_name, 'w');
            if ($file) {
    // Write to the file
    fwrite($file, $html_content);
 

    // Close the file
    fclose($file);
      


       sleep(2);
     echo "HTML file created successfully!";
         header("Location: ../posts/$html_file_name"); // Redirect to login page after session destroy

    exit;
} else {
    echo "Error: Unable to create HTML file.";
        header("admin.php"); // Redirect to login page after session destroy

    exit;
}

            
        }        

        }else{
            echo "<br>error reading template file from txt.<br>";
            exit;
        }
        
        
        
    }else{
         session_unset();     // unset $_SESSION variable for the run-time 
    session_destroy();   // destroy session data in storage
    header("Location: https://yunusemrevurgun.com/"); // Redirect to login page after session destroy
    exit;
    }
    
}

// Define the URL to open
 $sitemap_maker_url = 'sitemap-maker.php';
    $html_link = "<a id='clickablelink' href='$sitemap_maker_url' target='_blank'>CLICK HERE TO ADD TO SITEMAP NOW QUICK!</a>";
    $js_click_link = "<script>document.getElementById('clickablelink').click();</script>";

    // Echo the HTML link and script
    echo $html_link;
    echo $js_click_link;
 }else{
         session_unset();     // unset $_SESSION variable for the run-time 
    session_destroy();   // destroy session data in storage
    header("Location: https://yunusemrevurgun.com/"); // Redirect to login page after session destroy
    exit;
 }

?>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
    <link rel=stylesheet href=styles/dashboard.css>
    <script src="scripts/dashboard.js"></script>
        <meta name="robots" content="noindex">

</head>
<body>
    <h2>Dashboard</h2>
    <p>Welcome to your dashboard. Here you can create new posts.</p>
        <button onclick="clearInputs()" id=clearInputs>Clear input fields</button>
<textarea id="bulk_area"></textarea><button onclick="formatBulkText(document.getElementById('bulk_area').value)" id="bulk_area_button">Apply to fields format</button>
    <!-- Post creation form -->
    <form action="dashboard.php" method="post">
        <label for="title">Title:</label><br>
        <input type="text" id="title" name="title" maxlength="300" required><br>
        
        <label for="description">Description:</label><br>
        <textarea id="description" name="description" maxlength="1000" required></textarea><br>
        
        <label for="articleBody">Article Body:</label><br>
        <textarea id="articleBody" name="articleBody" maxlength="20000" required></textarea><br><br>
        
        <input type="submit" value="Create Post">
    </form>
    
    <!-- Log out link -->
    <p><a href="logout.php">Log out</a></p>
    
    
    <script>
        function clearInputs(){
            const titleInput = document.querySelector('#title');
            const textInputs= document.querySelectorAll('textarea');
            titleInput.value="";
            textInputs.forEach((field)=>{field.value=""});
        }
        
        function formatBulkText(bulk){
            const titlePart=bulk.substring(
                bulk.indexOf("Title:")+6,
                bulk.indexOf("Description:")
                );

            const descriptionPart=bulk.substring(
                bulk.indexOf("Description:")+12,
                bulk.indexOf("<p>")
                );
                
            const bodyPart=bulk.substring(
                bulk.indexOf("<p>"),
                bulk.length
                );
                
                
                document.querySelector("#title").value=titlePart.trimStart();
                document.querySelector("#description").value=descriptionPart.trimStart();
                document.querySelector("#articleBody").value=bodyPart.trimStart();

        }
        
   
    </script>
</body>
</html>