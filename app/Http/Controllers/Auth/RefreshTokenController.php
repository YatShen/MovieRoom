<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RefreshTokenController extends Controller
{
    public function __construct()
    {
        $this->middleware('refresh');
    }

    public function refreshToken()
    {
        return $this->respondWithToken(auth('api')->refresh());
    }

    private function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60
        ]);
    }
}