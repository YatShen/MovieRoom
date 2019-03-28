<?php

namespace App\Http\Controllers;

use Dingo\Api\Routing\Helpers;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests, Helpers;

    /**
     * 通用成功返回json格式
     *
     * @param $data
     * @throws \ErrorException
     */
    protected function successResponse($data, string $message = '')
    {
        return $this->response->array([
            'data' => $data,
            'respCode' => 200,
            'message' => $message ?: '请求成功'
        ], 200);
    }
}
