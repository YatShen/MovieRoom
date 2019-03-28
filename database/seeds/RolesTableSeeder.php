<?php

use Illuminate\Database\Seeder;
use App\Models\Auth\Role;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::create(['name' => '超级管理员']);
        Role::create(['name' => 'UI']);
    }
}
