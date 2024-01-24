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
            $table->unsignedInteger('street_nr');
            $table->unsignedInteger('rooms');
            $table->unsignedInteger('floor');

            $table->unsignedInteger('meters');
            $table->tinyText('type');
            $table->tinyText('title');
            $table->tinyText('accessories');
            $table->tinyText('advertiser');
            $table->timestamp('age');

            $table->unsignedInteger('price');
            $table->tinyText('SW');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        if (Schema::hasTable('listings')) {
            Schema::table('listings', function (Blueprint $table) {
                $table->dropColumn(['voivodeship', 'city', 'code', 'street', 'street_nr', 'rooms', 'floor', 'meters', 'type', 'title', 'accessories', 'advertiser', 'age', 'price', 'SW']);
            });
        }
    }
};
