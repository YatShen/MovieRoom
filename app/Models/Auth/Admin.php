<?php

namespace App\Models\Auth;

use Illuminate\Support\Facades\Schema;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Admin extends Authenticatable implements JWTSubject
{
    use Notifiable;

    protected $table = 'admins';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'account', 'name', 'password', 'mobile', 'email',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    /**
     * 角色多对多
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function roles()
    {
        return $this->belongsToMany(Role::class, 'admins_has_roles', 'admin_id', 'role_id');
    }

    /**
     * 绑定一个或多个角色
     *
     * @param $roles_id
     */
    public function attachRole($roles_id)
    {
        if (!is_array($roles_id)) {
            $roles_id = compact('roles_id');
        }
        $this->roles()->sync($roles_id, false);
    }

    /**
     * 解绑一个或多个角色
     *
     * @param $roles_id
     */
    public function detachRole($roles_id)
    {
        if (!is_array($roles_id)) {
            $roles_id = compact('roles_id');
        }
        $this->roles()->detach($roles_id);
    }

    /**
     * 判断用户是否拥有一个或多个角色
     *
     * @param $roles_id
     * @return bool
     */
    public function hasRole($roles_id)
    {
        if (!is_array($roles_id)) {
            $roles_id = compact('roles_id');
        }

        if ($this->roles()->whereIn('role_id', $roles_id)->first()) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 判断用户是否拥有一个或多个权限
     *
     * @param $permissions
     * @param string $type 权限类型
     * @return bool
     */
    public function hasPermission($permissions, string $type = 'route')
    {
        if (!Schema::hasColumn('permissions', $type)) {
            return false;
        }
        if (!is_array($permissions)) {
            $permissions = compact('permissions');
        }

        $role_ids = $this->roles->pluck('pivot.role_id')->toArray();
        $permission_ids = array_column(Permission::whereIn($type, $permissions)->get(['id'])->toArray(), 'id');
        if (Role::whereIn('id', $role_ids)
            ->whereHas('permissions', function ($query) use ($permission_ids) {
                $query->where('permission_id', $permission_ids);
            })->first()) {
            return true;
        } else {
            return false;
        }
    }
}
