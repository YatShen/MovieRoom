<template>
    <el-form ref="formData" :model="formData" :rules="rules" label-position="left" label-width="0px" class="demo-ruleForm login-container">
        <h3 class="title">MovieRoom</h3>

        <el-form-item prop="account">
            <el-input type="text" v-model="formData.account" auto-complete="off" placeholder="Account"></el-input>
        </el-form-item>

        <el-form-item prop="password">
            <el-input type="password" v-model="formData.password" auto-complete="off" placeholder="Password"></el-input>
        </el-form-item>

        <el-checkbox class="remember" v-model="formData.remember">Remember</el-checkbox>

        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click="login('formData')">Login</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                formData : {
                    account : null,
                    password : null,
                    remember : false
                },
                rules : {
                    account : [
                        { required : true, message : 'Please input your account', trigger: 'blur' }
                    ],
                    password : [
                        { required : true, message : 'Please input your password', trigger: 'blur' }
                    ]
                }
            }
        },
        created() {
            this.$store.dispatch('logout')
        },
        components: {

        },
        computed: {},
        methods: {
            // 登录操作
            login(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$store.dispatch('login', this.formData).then((res) => {
                            if (this.$store.state.auth.account !== null) {
                                this.$router.push({ name: 'Dashboard' })
                            }
                        })
                    } else {
                        return false;
                    }
                });
            }
        },
        mounted() {

        }
    }
</script>

<style>
    body {
        background: url('http://p7.qhimg.com/t014b8b210faf53b99e.jpg') !important;
        background-size: cover;
    }
</style>

<style scoped>
    .login-container {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        margin: 220px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }
    .login-container .title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }
    .login-container .remember {
        margin: 0px 0px 35px 0px;
    }
</style>