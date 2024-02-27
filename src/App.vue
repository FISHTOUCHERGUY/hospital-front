<template>
    <div class="container">
        <HospitalTop />
        <div class="content">
            <!-- 路由展示 -->
            <router-view></router-view>
        </div>
               
    </div>
    <HospitalButtom /> 
    <!--登录组件-->
    <Login />
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .content {
        margin-top: 70px;
        width: 1200px;
        // height: 1000px;
    }
}
</style>