<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];
  $captchaResponse = $_POST['g-recaptcha-response'];

  if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    echo "Veuillez remplir tous les champs du formulaire.";
    exit;
  }

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Veuillez entrer une adresse e-mail valide.";
    exit; 
  }

  $secretKey = "6LftYSwpAAAAAEr4hnf04IiHa6V2TO8uW8x1BosT";
  $verifyUrl = "https://www.google.com/recaptcha/api/siteverify";
  $data = array(
    'secret' => $secretKey,
    'response' => $captchaResponse
  );

  $options = array(
    'http' => array(
      'header' => "Content-type: application/x-www-form-urlencoded\r\n",
      'method' => 'POST',
      'content' => http_build_query($data)
    )
  );

  $context = stream_context_create($options);
  $verify = file_get_contents($verifyUrl, false, $context);
  $captchaResponse = json_decode($verify);

  if (!$captchaResponse->success) {
    echo "Le captcha a échoué. Veuillez réessayer.";
    exit; 
  }

  $body = "Nom: " . $name . "\n";
  $body .= "Email: " . $email . "\n\n";
  $body .= "Message:\n" . $message;

  $to = "contact@michcraft.fr"; 
  $headers = "From: " . $email . "\r\n";

  if (mail($to, $subject, $body, $headers)) {
    echo "Votre message a bien été envoyé. Merci !";
  } else {
    echo "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.";
  }
}
?>