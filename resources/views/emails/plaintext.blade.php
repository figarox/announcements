<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="{{ asset('css/email.css') }}" rel="stylesheet">
</head>
<body style="margin: 0; padding: 0; width: 100%;  display: flex; text-align: center; justify-content: center; color: black; ">
    <div style=" width: 100%; ">
        <x-email.header :message="$message" />
        <x-email.nav />
        <x-email.content :data="$data" :message="$message"/>
        <x-email.footer />
    </div>
</body>
</html>
