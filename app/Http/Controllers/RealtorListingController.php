<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RealtorListingController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Listing::class, 'listing');
    }
    public function index(Request $request)
    {
        return inertia(
            'Account/Index',
            [
                'listings' => Auth::user() 
                ->listings 

            ]
        );
    }

    public function edit(Listing $listing)
    {
        //
        return inertia(
            'Account/Edit',
            [
                'listing' => $listing
            ]
        );
    }

    public function update(Request $request, Listing $listing)
    {
        $listing->update(
            $request->validate([
                'voivodeship' => 'required',
                'city' => 'required',
                'code' => 'required',
                'street' => 'required',
                'street_nr' => 'required|min:1|max:1000',
                'price' => 'required|integer|min:1|max:20000000',
            ])
        );

        return redirect()->route('account.listing.index')
            ->with('success', 'Zmiany w twoim ogloszeniu zostały zaktulizowane');
    }

    public function destroy(Listing $listing)
    {
        $listing->deleteOrFail();
        return redirect()->back()
            ->with('success', 'Ogłoszenie pomyślnie usunięte!');
    }

    public function create()
    {
        //
        return inertia('Account/Create');
    }

    public function store(Request $request)
    {
        $request->user()->listings()->create(
            $request->validate([
                'voivodeship' => 'required|min:0|max:20',
                'city' => 'required',
                'code' => 'required',
                'street' => 'required',
                'street_nr' => 'required|min:1|max:1000',
                'rooms' => 'required|min:1|max:1000',
                'floor' => 'required|min:1|max:1000',
                'meters' => 'required|min:1|max:1000',
                'type' => 'required',
                'title' => 'required',
                'accessories' => 'required',
                'advertiser' => 'required',
                'age' => 'required',
                'price' => 'required|min:1|max:20000000',
                'SW' => 'required',

            ])
        );

     return redirect()->route('account.listing.index')
        ->with('success', 'Dodano twoje ogłoszenie !');
    }
    

}
