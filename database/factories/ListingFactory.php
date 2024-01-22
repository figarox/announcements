<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Listing>
 */
class ListingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [

            'voivodeship' => fake()->voivodeship(),
            'city' => fake()->city(),
            'code' => fake()->postcode(),
            'street' => fake()->streetName(),
            'street_nr' => fake()->numberBetween(10, 200),
            'floor' => fake()->numberBetween(1, 10),
            'meters' => fake()->numberBetween(10, 120),
            'type' => null,
            'market' => null,
            'accessories' => null,
            'advertiser' => null,
            'age' => fake()->numberBetween(1950, 2024),
            'price' => fake()->numberBetween(50_000, 2_000_000),
            'SW' => null,

        ];
    }
}
