<template>
    <div class="login">
        <el-card class="login-card">
            <p class="login-title">登录</p>
            <p class="login-description">欢迎登录测试系统</p>
            <el-form ref="loginForm" :model="loginForm">
                <el-form-item prop="username">
                    <el-input
                        v-model="loginForm.username"
                        placeholder="请输入账号"
                        prefix-icon="el-icon-user" />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        v-model="loginForm.password"
                        placeholder="请输入密码"
                        prefix-icon="el-icon-lock"
                        type="password" />
                </el-form-item>
                <el-form-item>
                    <el-button
                        class="login-button"
                        type="primary"
                        @click="submitLoginForm">
                        登录
                    </el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import { login } from '@/apis/user';
import { setToken, getToken } from '@/utils/auth';
export default {
    data() {
        return {
            loginForm: {
                username: '',
                password: '',
            },
        };
    },
    methods: {
        async submitLoginForm() {
            const result = await login(this.loginForm);
            console.log(result);
            if (result.code === 0) {
                setToken(result.data.token);
                this.$router.replace('/index');
                console.log('Token信息：' + getToken());
            }
        },
    },
    components: {},
    props: {},
    watch: {},
    computed: {},
    created() {},
    mounted() {},
};
</script>
<style scoped>
.login {
    width: 100%;
    height: 100%;
    background-image: url('../assets/imgs/login-background.png');
    position: absolute;
    left: 0;
    top: 0;
    background-size: 100% 100%;
}
.login-card {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 20%;
    min-width: 300px;
    height: 400px;
    min-height: 400px;
    border-radius: 10px;
    text-align: center;
}
.login-title {
    font-size: 25px;
    font-weight: bold;
}
.login-description {
    letter-spacing: 2px;
    color: tan;
}
.login-button {
    width: 100%;
}
</style>
