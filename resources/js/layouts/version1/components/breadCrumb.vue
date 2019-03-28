<template>
    <el-col :span="24" class="breadcrumb-container">
        <strong class="title">{{ $route.name }}</strong>
        <el-breadcrumb separator="/" class="breadcrumb-inner">
            <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                {{ item.name }}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </el-col>
</template>

<script>
    export default {
        name: "breadCrumb"
    }
</script>

<style scoped>
    .breadcrumb-container {
        padding: 20px 20px 15px 20px;
    }
    .breadcrumb-container .title {
        width: 200px;
        float: left;
        color: #475669;
    }
    .breadcrumb-container .breadcrumb-inner {
        float: right;
    }
</style>