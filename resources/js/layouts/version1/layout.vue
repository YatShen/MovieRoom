<template>
    <el-container class="container">
        <el-header>
            <nav-bar :collapsed="collapsed" :collapseFunc="collapse"></nav-bar>
        </el-header>

        <el-container class="main">
            <el-aside :class="collapsed ? 'menu-collapsed' : 'menu-expanded'">
                <side-bar :collapsed="collapsed"></side-bar>
            </el-aside>

            <el-main>
                <bread-crumb></bread-crumb>

                <el-col :span="24" class="content-wrapper">
                    <transition name="el-fade-in-linear">
                        <router-view></router-view>
                    </transition>
                </el-col>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import NavBar    from './components/navBar';
    import SideBar   from './components/sideBar';
    import BreadCrumb from './components/breadCrumb';

    export default {
        name: "layout",
        components: {
            NavBar,
            SideBar,
            BreadCrumb,
        },
        data() {
            return {
                collapsed: false,
            }
        },
        methods: {
            // 折叠导航栏
            collapse() {
                this.collapsed = !this.collapsed;
            }
        }
    }
</script>

<style scoped>
    .container {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        width: 100%;
    }
    .container .el-header {
        background-color: #545c64;
    }
    .container .main {
        display: flex;
        position: absolute;
        top: 60px;
        bottom: 0px;
        overflow: hidden;
        width: 100%;
        background-color: #ffffff;
    }
    .container .main .menu-collapsed {
        flex: 0 0 65px;
        width: 65px;
    }
    .container .main .menu-expanded {
        flex: 0 0 230px;
        width: 230px;
    }
    .container .main .el-main {
        flex: 1;
        overflow-y: scroll;
        padding: 0;
    }
    .container .main .content-wrapper {
        background-color: #dae1e7;
        box-sizing: border-box;
        padding: 15px 20px;
    }
</style>