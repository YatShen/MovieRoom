<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Auth\Admin::class, function (Faker $faker) {
    $date_time = $faker->date . ' ' . $faker->time;
    static $password;

    return [
        'account' => $faker->name,
        'name' => $faker->name,
        'password' => $password ?: $password = bcrypt('secret'), // secret
        'remember_token' => str_random(10),
        'created_at' => $date_time,
        'updated_at' => $date_time,
    ];
});
