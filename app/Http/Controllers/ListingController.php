<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Listing;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;



class ListingController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Listing::class, 'listing');
    }


    public function index(Request $request)
    {
        $filters = $request->only([
            'priceFrom', 'priceTo', 'rooms', 'floor', 'voivodeship','city','SW','areaFrom', 'areaTo'
        ]);
        $query = Listing::orderByDesc('created_at');
        $query -> when(
            $filters['priceFrom'] ?? false,
            fn ($query, $value) => $query -> where('price' , '>=' , $value)
        );

        // if ($filters['priceFrom'] ?? false) {
        //     $query->where('price', '>=', $filters['priceFrom']);
        // }

        if ($filters['priceTo'] ?? false) {
            $query->where('price', '<=', $filters['priceTo']);
        }

        if ($filters['rooms'] ?? false) {
            $query->where('rooms' , $filters['rooms']);
        }

        if ($filters['floor'] ?? false) {
            $query->where('floor', $filters['floor']);
        }

        if ($filters['voivodeship'] ?? false) {
            $query->where('voivodeship', $filters['voivodeship']);
        }

        if ($filters['city'] ?? false) {
            $query->where('city', $filters['city']);
        }
        
        if ($filters['SW'] ?? false) {
            $query->where('SW', $filters['SW']);
        }

        return inertia(
            'Listing/Index',
            [
                'filters' => $filters,
                'listings' => $query->paginate(12)
                    ->withQueryString()
            ]
        );
    }




    public function show(Listing $listing)
    {
        return inertia('Listing/Show' , 
        [
            'listings' => $listing
        ]
    );
    }


}
