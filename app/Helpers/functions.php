<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/3/4
 * Time: 13:45
 */

/**
 * 测试输出
 *
 * @param $str
 */
function p($str)
{
    header("Content-Type: text/html; charset=UTF-8");
    echo '<pre>';
    print_r($str);
    echo '</pre>';
}

/**
 * 获取毫秒级别的时间戳
 *
 * @return float
 */
function getMillisecond()
{
    list($t1, $t2) = explode(' ', microtime());
    return (float)sprintf('%.0f', (floatval($t1) + floatval($t2)) * 1000);
}



