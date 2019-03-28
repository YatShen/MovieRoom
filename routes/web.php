<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/', 'index');

Route::view('login', 'index')->name('login');

Route::view('dashboard', 'index')->name('dashboard');

Route::get('test', 'TestController@index')->name('test');
//Route::view('/home/{query}', 'index')
//    ->where('query', '.*');
//Route::get('/', 'StaticPagesController@home')->name('home');
//Route::get('/home', 'StaticPagesController@home')->name('home');