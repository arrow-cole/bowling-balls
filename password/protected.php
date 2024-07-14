<?php
// Define the correct password
$correct_password = "test1234";

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $password = $_POST['password'];

    // Check if the entered password is correct
    if ($password == $correct_password) {
        // Display the protected content
        echo "<h2>Welcome to the protected page!</h2>";
        echo "<p>This content is protected by a password.</p>";
    } else {
        // Redirect back to the login page with an error
        header("Location: index.html?error=incorrect_password");
        exit();
    }
} else {
    // Redirect to the login page if accessed directly
    header("Location: index.html");
    exit();
}
?>
