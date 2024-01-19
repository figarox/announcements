<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('listings', function (Blueprint $table) {
            $table->tinyText('voivodeship');
            $table->tinyText('city');
            $table->tinyText('code');
            $table->tinyText('street');
            $table->tinyText('street_nr');

            $table->unsignedInteger('rooms');
            $table->unsignedInteger('floor');

            $table->unsignedInteger('price');
            $table->tinyText('SW');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::dropColumns('listings', [
           'voivodeship', 'city', 'code', 'street', 'street_nr', 'price'
        ]);
    }
};
