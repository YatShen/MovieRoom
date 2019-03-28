<template>
    <div class="navbar">
        <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>

        <breadcrumb class="breadcrumb-container"/>

        <div class="right-menu">
            <el-dropdown class="avatar-container right-menu-item" trigger="click">
                <div class="avatar-wrapper">
                    <img src="http://s7.sinaimg.cn/middle/4c412ae3bdf4f15469626&690" class="user-avatar">
                    <i class="el-icon-caret-bottom"/>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <router-link to="/">
                        <el-dropdown-item>
                            {{ $t('navbar.dashboard') }}
                        </el-dropdown-item>
                    </router-link>
                    <el-dropdown-item divided>
                        <span style="display:block;" @click="logout">{{ $t('navbar.logOut') }}</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Breadcrumb from './breadCrumb'
    import Hamburger from './Hamburger'

    export default {
        name: "Navbar",
        components: {
            Breadcrumb,
            Hamburger
        },
        computed: {
            ...mapGetters([
                'sidebar',
                'name',
                'avatar',
                'device'
            ])
        },
        props: [
            'collapsed', 'collapseFunc'
        ],
        methods: {
            // 缩小菜单栏
            toggleSideBar() {
                this.$store.dispatch('toggleSideBar')
            },
            // 退出登录
            logout() {
                this.$confirm('确认退出吗?', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.$store.dispatch('logout').then(() => {
                        this.$message.success('退出成功')
                        this.$router.push({name: 'Login'})
                    })
                }).catch(() => {

                });
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .navbar {
        height: 50px;
        line-height: 50px;
        border-radius: 0px !important;
        .hamburger-container {
            line-height: 58px;
            height: 50px;
            float: left;
            padding: 0 10px;
        }
        .breadcrumb-container {
            float: left;
        }
        .errLog-container {
            display: inline-block;
            vertical-align: top;
        }
        .right-menu {
            float: right;
            height: 100%;
            &:focus {
                outline: none;
            }
            .right-menu-item {
                display: inline-block;
                margin: 0 8px;
            }
            .screenfull {
                height: 20px;
            }
            .international {
                vertical-align: top;
            }
            .theme-switch {
                vertical-align: 15px;
            }
            .avatar-container {
                height: 50px;
                margin-right: 30px;
                .avatar-wrapper {
                    margin-top: 5px;
                    position: relative;
                    .user-avatar {
                        cursor: pointer;
                        width: 40px;
                        height: 40px;
                        border-radius: 10px;
                    }
                    .el-icon-caret-bottom {
                        cursor: pointer;
                        position: absolute;
                        right: -20px;
                        top: 25px;
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>