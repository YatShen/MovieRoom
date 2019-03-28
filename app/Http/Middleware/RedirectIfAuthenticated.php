<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (auth('api')->check()) {
            // 已经登录
//            $user = Auth::user();
//            return response()->json([
//                'data' => [
//                    'token' => auth('api')->getToken(),
//                    'account' => $user->account,
//                    'name' => $user->name,
//                    'mobile' => $user->mobile,
//                    'email' => $user->email
//                ],
//                'respCode' => 200
//            ], 200);
        }

        return $next($request);
    }
}
