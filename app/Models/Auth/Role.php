<?php

namespace App\Models\Auth;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $table = 'roles';
    protected $fillable = [
        'name', 'status'
    ];
    protected $guarded = [];

    /**
     * 管理员多对多
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function admins()
    {
        return $this->belongsToMany(Admin::class, 'admins_has_roles', 'role_id', 'admin_id');
    }

    /**
     * 权限多对多
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function permissions()
    {
        return $this->belongsToMany(Permission::class, 'roles_has_permissions', 'role_id', 'permission_id');
    }

    /**
     * 删除角色，以及自动解绑已绑定的用户和权限。
     *
     * @param int $role_id
     */
    public static function destroyRole(int $role_id)
    {
        $role = static::find($role_id);

        if ($role) {
            $role->admins()->detach();
            $role->detachAllPermission();

            $role->delete();
        }
    }

    /**
     * 绑定一个或多个权限
     *
     * @param $permissions_id
     */
    public function attachPermission($permissions_id)
    {
        if (!is_array($permissions_id)) {
            $permissions_id = compact('permissions_id');
        }
        $this->permissions()->sync($permissions_id, false);
    }

    /**
     * 解绑一个或多个权限
     *
     * @param $permissions_id
     */
    public function detachPermission($permissions_id)
    {
        if (!is_array($permissions_id)) {
            $permissions_id = compact('permissions_id');
        }
        $this->permissions()->detach($permissions_id);
    }

    /**
     * 解绑所有权限
     */
    public function detachAllPermission()
    {
        $this->permissions()->detach();
    }
}
