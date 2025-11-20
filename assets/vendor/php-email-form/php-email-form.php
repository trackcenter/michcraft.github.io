<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $to = 'contact@michcraft.fr'; 
  $headers = "From: $email\r\nReply-To: $email\r\n";

  $email_content = "Prénom/Nom: $name\n";
  $email_content .= "Email: $email\n\n";
  $email_content .= "Objet du message: $subject\n\n";
  $email_content .= "Message:\n$message\n";

  if (mail($to, $subject, $email_content, $headers)) {
    echo "success";
  } else {
    echo "error";
  }
}
?>