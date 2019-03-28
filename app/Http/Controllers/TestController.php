<?php

namespace App\Http\Controllers;

use App\Models\Auth\Permissions;
use Illuminate\Http\Request;
use App\Models\Auth\Admin;
use App\Models\Auth\Role;
use App\Models\Auth\Permission;

class TestController extends Controller
{
    private $funnel = [];

    public function index()
    {
//        p($this->redisEasyLimiting('yatshen', 'reply', 60, 5, 20));
        for ($i = 0; $i < 20; $i++) {
            $this->redisFunnelLimiting('yatshen', 'reply', 15, 0.5);
        }
        $result = Permission::getPermissionByAdminId(2);
        dd($result);
    }

    private function redisEasyLimiting($userId, $actionKey, $period, $maxCount, $nummber)
    {
        $redis = new \Redis();
        $redis->connect('192.168.204.128', 6379);
        $redis->auth('yatshen'); //密码验证
        $redis->select(0); //选择库
        $redis->pipeline(); //开启管道

        $key = "test:{$userId}:{$actionKey}";

        $result = [];
        for ($i = 0; $i < $nummber; $i++) {
            $nowTs = getMillisecond() + $i;
            $redis->zAdd($key, $nowTs, "" . $nowTs);
            $redis->zRemRangeByScore($key, 0, $nowTs - $period * 1000);
            $redis->expire($key, $period + 1);
            $redis->exec();

            $count = $redis->zCard($key);
            if ($count <= $maxCount) {
                array_push($result, 1);
            } else {
                array_push($result, 0);
            }
        }
        $redis->close();

        return $result;
    }

    private function redisFunnelLimiting($userId, $actionKey, $capacity, $leakingRate)
    {
        $key = "{$userId}:{$actionKey}";
        if (!isset($this->funnel[$key])) {
            $this->funnel[$key] = new Funnel($capacity, $leakingRate);
        }

        echo $this->funnel[$key]->watering(2); // 需要1个quota
    }
}

class Funnel
{
    private $capacity;
    private $leakingRate;
    private $leftQuota;
    private $leakingTs;

    public function __construct($capacity, $leakingRate)
    {
        // 漏斗容量
        $this->capacity = $capacity;
        // 漏嘴流水速率
        $this->leakingRate = $leakingRate;
        // 漏斗剩余空间
        $this->leftQuota = $capacity;
        // 上一次漏水时间
        $this->leakingTs = getMillisecond() / 1000;
    }

    public function watering($quota)
    {
        $this->makeSpace();
        if ($this->leftQuota >= $quota) {
            $this->leftQuota -= $quota;
            return true;
        }

        return false;
    }

    private function makeSpace()
    {
        $nowTs = getMillisecond() / 1000;
        //距离上次漏水过去了多久
        $deltaTs = $nowTs - $this->leakingTs;
        // 又可以腾出不少空间了
        $deltaQuota = intval($deltaTs * $this->leakingRate);
        if ($deltaQuota < 0) {
            // 间隔时间太长，整数数字过大溢出
            $this->leftQuota = $this->capacity;
            $this->leakingTs = $nowTs;
            return;
        }
        if ($deltaQuota < 1) {
            // 腾出空间太小，最小单位是1
            return;
        }

        $this->leftQuota += $deltaQuota;
        $this->leakingTs = $nowTs;
        if ($this->leftQuota > $this->capacity) {
            $this->leftQuota = $this->capacity;
        }
    }
}
