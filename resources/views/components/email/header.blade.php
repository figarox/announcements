@props(['message'])
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="{{ asset('css/email.css') }}" rel="stylesheet">
    <style>
    @media screen and (max-width: 600px) {
          .logo_firmy{padding: 15px;}
        }
    </style>
</head>
<img class="logo_firmy" src="{{ $message->embed(public_path('img/suprizo-pl-logo.png')) }}"  alt="Logo firmy">
</html>