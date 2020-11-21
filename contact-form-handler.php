<?php
    $prenom = $_Post['prenom'];
    $nom = $_Post['nom'];
    $telephone = $_Post['telephone'];
    $email = $_Post['email'];
    $message = $_Post['message'];


    $email_from = 'abdelli.amine.aa@gmail.com';

    $email_subject = 'Requête client';

    $email_body = "User Name: $nom.\n".
                    "User Email: $email.\n".
                        "User Message: $message.\n";

    $to = "abdelli.amine.aa@gmail.com";

    $headers = "From" $email_from \r\n";
    $headers .= "Reply-to: $visitor_email \r\n";
    mail($to,$email_subject,$email_body,$headers);
    header("Location: index.html");
?>