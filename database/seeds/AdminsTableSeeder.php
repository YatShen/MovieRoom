<?php

use Illuminate\Database\Seeder;
use App\Models\Auth\Admin;

class AdminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admins = factory(Admin::class)->times(50)->make();
        Admin::insert($admins->makeVisible(['password', 'remember_token'])->toArray());

        $admin = Admin::find(1);
        $admin->account = 'YatShen';
        $admin->name = 'YatShen';
        $admin->password = bcrypt('a321321');
        $admin->save();
    }
}
