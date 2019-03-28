<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\ValidationException;
use \Symfony\Component\HttpKernel\Exception\HttpException;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        \API::error(function (ValidationException $exception) {
            return response()->json(['errMsg' => array_first(array_collapse($exception->errors())), 'respCode' => 400], 200);
        });
        \API::error(function (HttpException $exception) {
            return response()->json(['errMsg' => $exception->getMessage(), 'respCode' => $exception->getStatusCode()], 200);
        });
    }
}
