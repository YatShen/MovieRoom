<template>
    <div :class="classObj" class="app-wrapper">
        <div v-if="device === 'mobile' && sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>

        <side-bar class="sidebar-container"/>

        <div class="main-container">
            <nav-bar/>

            <tags-view/>

            <app-main/>
        </div>
    </div>
</template>

<script>
    import NavBar    from './components/Navbar';
    import SideBar   from './components/Sidebar';
    import TagsView   from './components/TagsView';
    import AppMain   from './components/AppMain';

    import ResizeMixin from './mixin/ResizeHandler'

    export default {
        name: "Layout",
        components: {
            NavBar,
            SideBar,
            TagsView,
            AppMain
        },
        mixins: [ResizeMixin],
        computed: {
            sidebar() {
                return this.$store.state.app.sidebar
            },
            device() {
                return this.$store.state.app.device
            },
            classObj() {
                return {
                    hideSidebar: !this.sidebar.opened,
                    openSidebar: this.sidebar.opened,
                    withoutAnimation: this.sidebar.withoutAnimation,
                    mobile: this.device === 'mobile'
                }
            }
        },
        methods: {
            handleClickOutside() {
                this.$store.dispatch('closeSideBar', { withoutAnimation: false })
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "~@/styles/mixin.scss";
    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
        &.mobile.openSidebar{
            position: fixed;
            top: 0;
        }
    }
    .drawer-bg {
        background: #000;
        opacity: 0.3;
        width: 100%;
        top: 0;
        height: 100%;
        position: absolute;
        z-index: 999;
    }
</style>