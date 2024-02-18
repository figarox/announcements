<?php

namespace App\Listeners;

use App\Events\SendMail;
use App\Mail\RegisterMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendMailFired
{
    public function handle(SendMail $event)
    {
        $user = $event->user;
        $data = [
            'name' => $user->name,
            'email' => $user->email,
        ];
        $concent="witamy na naszej stronie, dziekujemy za zaufanie !";


        Mail::to($user->email)->send(new RegisterMail($data , $concent));

    }
}
