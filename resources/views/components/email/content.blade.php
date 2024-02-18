@props(['data'])
@props(['message'])
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="{{ asset('css/email.css') }}" rel="stylesheet">
    <style>
    .container {
        margin-top: 20px; 
        width: 100%;
        font-size: 17px; 
        text-align: center;
    }
    .table-cards{
        margin: 0 auto;
        width: 90%;
    }
    .cards {
        padding: 5px; 
        width: 25%;
        vertical-align: middle; 
        text-align: center;
        font-size: 17px;
    }
    .cards > img {
                width: 32px;
                height: 32px;
    }
    .cards > .card-icons > img {
                width: 32px;
                height: 32px;
    }
    @media screen and (max-width: 600px) {
            .container {
                margin-top: 20px; 
                width: 100%;
                font-size: 17px; 
                text-align: center;
            }
            .cards {
                max-width: 25%;
                height: 30px;
                font-size: 8px;
            }
            .cards > img {
                width: 16px;
                height: 16px;
            }
            .cards > p {
                white-space: nowrap;
            }
            .table-cards{
                margin: 0 auto;
                width: 100%;
            }
           .img-logo{
                width: 20px;
                height: 20px;
           }
           .cards-icons{
                width: 40%;
                height: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
           }
        }
    </style>
</head>
<div style="margin-top: 10px; font-size: 16px; color: black;">
    <p style="margin-bottom: 10px; color: black;"><b>Witaj {{ $data['name'] }}</b></p>
    <p style="margin-bottom: 10px; color: black;">Brakło Ci internetu, albo coś spowodowało, że zamówienie nie zostało sfinalizowane ?</p>
    <p style="margin-bottom: 10px; color: black;">Bez obaw! 😉</p>
    <p style="margin-bottom: 10px; color: black;">Zachowaliśmy wybrane przez Ciebie produkty, aby łatwo było Ci do nich wrócić 🙌</p>
    <p style="margin-bottom: 10px; color: black;">Skorzystaj z kodu rabatowego i dokoncz zakupy juz dziś: <b>xmas</b></p>
</div>
<div style=" margin-top: 20px; width: 100%; font-size: 17px; text-align: center; color: black;">
    <table style="margin: 0 auto; width: 90%;">
        <tr>
            <td style="padding: 10px; width: 50%;">
                 <img src="{{ $message->embed(public_path('img/star.png')) }}"  alt="Picture Star">
                 <p>Wysoka jakość</p>
            </td>

            <td style="padding: 10px; width: 50%;">
                 <img src="{{ $message->embed(public_path('img/payment_cards.png')) }}"  alt="Picture Payment Card">
                 <p>Wysoka Bezpieczne płatności</p>
            </td>
        </tr>
    </table>
</div>
<div style=" margin-top: 20px; width: 100%; font-size: 17px; text-align: center;">
    <table style="margin: 0 auto; width: 90%;">
        <tr>
            <td style="width: 40%; text-align: center;">
                <div style="border-bottom: 1px solid #ccc; width: 50%; margin: 0 auto;"></div>
            </td>
            <td style="padding: 10px; width: 20%">
                 <p>Kontakt</p>
            </td>
            <td style="width: 40%; text-align: center;">
                <div style="border-bottom: 1px solid #ccc; width: 50%; margin: 0 auto;"></div>
            </td>
        </tr>
    </table>
</div>
<div class="container">
    <table class="table-cards">
        <tr>
            <td class="cards">
                <img src="{{ $message->embed(public_path('img/phone.png')) }}" width="32px" height="32px" alt="Picture Payment Card">
                <p>+48 669 82 13 51</p>
            </td>
            <td class="cards">
                <img src="{{ $message->embed(public_path('img/email.png')) }}" width="32px" height="32px" alt="Picture Payment Card">
                <p>
                    <a href="mailto:kontakt@suprizo.pl">kontakt@suprizo.pl</a>
                </p>
            </td>
            <td class="cards">
                <img src="{{ $message->embed(public_path('img/location.png')) }}" width="32px" height="32px" alt="Picture Payment Card">
                <p>ul. Emilii Plater 7I / 2</p>
                <p>65-395 Zielona Góra</p>
            </td>
            <td class="cards">
                <div class="cards-icons">
                    <a href="https://www.facebook.com/SuprizoPL/?utm_term=20240131&utm_campaign=ABANDONED_CARTS&utm_medium=email&c_id=342011850&locale=pl_PL&utm_source=edrone&utm_content=email_click" target="_blank">
                        <img class="img-logo" src="{{ $message->embed(public_path('img/facebook.png')) }}"  alt="Picture Payment Card">
                    </a>
                    <a href="https://www.instagram.com/suprizo.pl/?utm_term=20240131&utm_campaign=ABANDONED_CARTS&utm_medium=email&c_id=342011850&utm_source=edrone&utm_content=email_click" target="_blank" style="margin-left: 35px;">
                        <img class="img-logo"  src="{{ $message->embed(public_path('img/instagram.png')) }}"  alt="Picture Payment Card">
                    </a>
                </div>
            </td>
        </tr>
    </table>
</div>
</html>