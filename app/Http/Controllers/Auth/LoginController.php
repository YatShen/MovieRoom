<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use Auth;

class LoginController extends Controller
{
    public function __construct()
    {
        $this->middleware('refresh')->only(['fetch']);
    }

    /**
     * 登录
     *
     * @param Request $request
     * @throws \ErrorException
     * @throws ValidationException
     * @throws \Illuminate\Validation\ValidationException
     */
    public function login(Request $request)
    {
        $credentials = $this->validate($request, [
            'account' => 'required|max:10',
            'password' => 'required'
        ]);

        if ($token = Auth::attempt($credentials, $request->has('remember'))) {
            $user = Auth::user();
            return $this->successResponse([
                'token' => $token,
                'account' => $user->account,
                'name' => $user->name,
                'mobile' => $user->mobile,
                'email' => $user->email
            ], '登录成功');
        }

        return $this->response->error('帐号或密码错误', 400);
    }

    /**
     * 退出
     *
     * @return mixed
     * @throws \ErrorException
     */
    public function logout()
    {
        if (Auth::check()) {
            Auth::logout();
        }

        return $this->successResponse([], '退出成功');
    }

    /**
     * 获取登录态
     *
     * @throws \ErrorException
     */
    public function fetch()
    {
        if (Auth::check()) {
            $user = Auth::user();
            return $this->successResponse([
                'token' => Auth::refresh(),
                'account' => $user->account,
                'name' => $user->name,
                'mobile' => $user->mobile,
                'email' => $user->email
            ], '获取登录态成功');
        }

        return $this->response->error('重新登录', 401);
    }
}
