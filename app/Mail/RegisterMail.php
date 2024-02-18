<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class RegisterMail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;
    public $content;

    public function __construct($data, $content, )
    {
        $this->data = $data;
        $this->content = $content;
    }

    public function build()
    {
        return $this->subject('Twoje konto zostało utworzone !')
                    ->view('emails.plaintext')
                    ->with([
                        'data' => $this->data,
                        'content' => $this->content, 
                    ]);
                    
    }
}
