<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
$api = app('Dingo\Api\Routing\Router');

$api->version('v1', ['namespace' => 'App\Http\Controllers'], function ($api) {
    $api->post('login', 'Auth\LoginController@login');
    $api->post('logout', 'Auth\LoginController@logout');
    $api->get('fetch', 'Auth\LoginController@fetch');

    $api->post('refreshToken', 'Auth\RefreshTokenController@refreshToken');

    $api->post('register', 'Auth\RegisterController@register');
});
