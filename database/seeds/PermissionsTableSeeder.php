<?php

use Illuminate\Database\Seeder;
use App\Models\Auth\Permission;

class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $base = Permission::create(['name' => '基础管理', 'route' => 'base', 'group' => '#', 'description' => '基础管理首页']);
        Permission::create(['name' => '界面管理', 'route' => 'base.interface', 'group' => $base->id, 'description' => '界面管理']);

        $admin = Permission::create(['name' => '管理员管理', 'route' => 'admin', 'group' => '#', 'description' => '管理员管理首页']);
        Permission::create(['name' => '管理员添加', 'route' => 'admin.create', 'group' => $admin->id, 'description' => '管理员添加']);
        Permission::create(['name' => '管理员修改', 'route' => 'admin.edit', 'group' => $admin->id, 'description' => '管理员修改']);
        Permission::create(['name' => '管理员删除', 'route' => 'admin.destroy', 'group' => $admin->id, 'description' => '管理员删除']);
        Permission::create(['name' => '管理员冻结', 'route' => 'admin.freeze', 'group' => $admin->id, 'description' => '管理员冻结']);
    }
}
