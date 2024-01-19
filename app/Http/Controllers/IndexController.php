<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Listing;
use Illuminate\Support\Facades\Auth;

class IndexController extends Controller
{

    
    public function index()
    {
        return inertia('Index/Index' , 
        [
            'message' => "maciej"
        ]
    );
    }

    public function show()
    {
        return inertia('Index/Show' ,
        [
            'message' => "maciej-show"
        ]);
    }
}
