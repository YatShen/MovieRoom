<?php

namespace App\Models\Auth;

use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    protected $table = 'permissions';
    protected $fillable = [
        'name', 'route', 'group', 'description'
    ];
    protected $guarded = [];

    /**
     * 角色多对多
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function roles()
    {
        return $this->belongsToMany(Role::class, 'roles_has_permissions', 'permission_id', 'role_id');
    }

    /**
     * 获取子类
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function children()
    {
        return $this->hasMany(static::class, 'group');
    }

    /**
     * 获取所有子类
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function allChildren()
    {
        return $this->children()->with('allChildren');
    }

    /**
     * 获取管理员权限
     *
     * @param int $admin_id
     * @return mixed
     */
    public static function getPermissionByAdminId(int $admin_id)
    {
        $permission_ids = Admin::find($admin_id)->roles
            ->flatMap(function ($role) {
                return $role->permissions;
            })
            ->pluck('pivot.permission_id')->toArray();

        return static::where('group', '#')->with(['allChildren' => function ($query) use ($permission_ids) {
            return $query->whereIn('id', $permission_ids);
        }])->get()->toArray();
    }

    /**
     * 获取所有权限列表
     *
     * @return mixed
     */
    public static function getAllPermission()
    {
        return static::where('group', '#')->with('allChildren')->get()->toArray();
    }

    /**
     * 删除权限，以及解绑已绑定的角色
     *
     * @param int $permission_id
     */
    public static function destroyPermission(int $permission_id)
    {
        $permission = static::find($permission_id);

        if ($permission) {
            $permission->roles()->detach();

            $permission->delete();
        }
    }
}
