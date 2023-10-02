<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Bakeli Tontine</title>
</head>
<body>
    <h2>{{$mailData['title']}}</h2>

    <p>{{$mailData['body']}}</p>

    <p>Nous sommes ravis de vous accueillir sur Bakeli Tontine ! Vous êtes sur le point de rejoindre notre communauté. Voici vos access de connexion :</p>

<p><strong>Adresse e-mail : {{$mailData['email']}}</strong></p>
<p><strong>Mot de passe : "{{$mailData['password']}}"</strong>  .(Nous vous recommandons de le changer après la première connexion)</p>

<p><strong>Connectez-vous à parir du lien ci-dessous : <br> {{$mailData['lien']}}</strong></p>

<p>Si vous n'avez pas créé de compte sur Bakeli Tontine, veuillez ignorer cet e-mail.</p>

<p>Merci de nous avoir rejoint !</p>
<br>
Cordialement,
<br>
L'équipe de Bakeli Tontine</p>

</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</html>
