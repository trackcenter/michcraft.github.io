<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer l'email
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    // Valider l'email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Chemin vers le fichier où enregistrer les emails
        $file = 'subscribers.txt';

        // Ajouter l'email au fichier
        file_put_contents($file, $email . PHP_EOL, FILE_APPEND | LOCK_EX);

        // Message de succès
        echo "Vous êtes bien abonné à la newsletter, merci !";
    } else {
        // Message d'erreur si l'email est invalide
        echo "L'adresse email n'est pas valide. Veuillez réessayer.";
    }
}
?>
