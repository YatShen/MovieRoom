<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAdminsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admins', function (Blueprint $table) {
            $table->increments('id')->comment('管理员主键');
            $table->string('account')->unique()->comment('管理员帐号');
            $table->string('password')->comment('管理员密码');
            $table->string('name')->comment('管理员姓名');
            $table->string('mobile')->unique()->nullable()->comment('管理员手机号');
            $table->string('email')->unique()->nullable()->comment('管理员邮箱');
            $table->timestamp('email_verified_at')->nullable()->comment('邮箱验证码');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('admins');
    }
}
