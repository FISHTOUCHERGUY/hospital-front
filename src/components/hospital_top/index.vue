<template>
    <div class="top">
        <div class="content">
            <div class="left" @click="toHome">
                <img src="../../assets/images/logo.png" alt="">
                <p >预约挂号统一平台 </p>
            </div>
            <div class="right">
                <p class="help">帮助中心</p>
                <p v-if="loginStore.loginState === false" class="login" @click="loginStore.openLoginDialog">登录/注册</p>
                <p v-if="loginStore.loginState === true" class="login" ><el-icon><UserFilled /></el-icon>{{ loginStore.user.username }}</p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import useLoginStore from "../../store/modules/login"
import { useRouter } from "vue-router";


let router = useRouter();
let loginStore = useLoginStore()

const toHome = ()=>{
    router.push('/home')
}

</script>

<style scoped lang="scss">
.top{
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 70px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    .content{
    width: 1200px;
    height: 70px;
    background-color: white;
    display: flex;
    justify-content: space-between;

    .left{
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        img{
            height: 50px;
            width: 50px;
            margin-right: 10px;
        }
        p{
            font-size: 20px;
            color: rgb(29, 132, 196);
        }
    }
    .right{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: #797575;
        .help{
            margin-right: 10px;
        }
        .login{
            &:hover{
                color: #212020;
            }
            cursor: pointer;
        }
    }
}
}

</style>