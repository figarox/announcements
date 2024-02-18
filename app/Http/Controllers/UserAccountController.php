<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Events\SendMail;


class UserAccountController extends Controller
{
    public function create(){
        return inertia('UserAccount/Create');
    }
    
    public function store(Request $request)
    {
        $user = User::create($request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:3|confirmed'
        ]));
        Auth::login($user);
        event(new SendMail($user));


        return redirect()->route('listing.index')
            ->with('success', 'Konto utowrzone !!');
    }
}
