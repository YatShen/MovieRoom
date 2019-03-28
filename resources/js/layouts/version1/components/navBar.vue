<template>
    <el-row class="header">
        <el-col :span="10" class="logo" :class="collapsed ? 'logo-collapse-width' : 'logo-width'">
            {{ collapsed ? '' : 'MovieRoom' }}
        </el-col>

        <el-col :span="10">
            <div class="tools" @click.prevent="collapseFunc">
                <i class="el-icon-menu"></i>
            </div>
        </el-col>

        <el-col :span="4" class="userinfo">
            <el-dropdown trigger="hover">
                <span class="el-dropdown-link userinfo-inner">
                    <img src="http://s7.sinaimg.cn/middle/4c412ae3bdf4f15469626&690"/> YatShen
                </span>

                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>我的消息</el-dropdown-item>
                    <el-dropdown-item>设置</el-dropdown-item>
                    <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "navBar",
        data() {
            return {

            }
        },
        props: [
            'collapsed', 'collapseFunc'
        ],
        methods: {
            // 退出登录
            logout() {
                this.$confirm('确认退出吗?', '提示', {
                    //type: 'warning'
                }).then(() => {
                    this.$store.dispatch('logout').then((res) => {
                        this.$message.success('退出成功')
                        this.$router.push({ name: 'Login' })
                    })
                }).catch(() => {

                });
            }
        }
    }
</script>

<style scoped>
    .header {
        height: 60px;
        line-height: 60px;
        color: #fff;
    }
    .header .logo {
        height: 60px;
        font-size: 22px;
        padding-left: 20px;
        padding-right: 20px;
        border-color: rgba(238,241,146,0.3);
        border-right-width: 1px;
        border-right-style: solid;
    }
    .header .logo-width{
        width: 210px;
    }
    .header .logo-collapse-width{
        width: 45px
    }
    .header .tools{
        padding: 0px 23px;
        height: 60px;
        line-height: 60px;
        cursor: pointer;
    }
    .header .userinfo {
        text-align: right;
        padding-right: 35px;
        float: right;
    }
    .header .userinfo .userinfo-inner {
        cursor: pointer;
        color: #fff;
    }
    .header .userinfo .userinfo-inner img {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        margin: 10px 0px 10px 10px;
        float: right;
    }
</style>