<template>
        <el-card class="box-card" shadow="hover" @click="goDetail">
          <div class="content">
            <div class="left">
                <div class="hospital_name">{{ hospitalInfo.name }}</div>
                <div class="tip">
                    
                    <div class="level"><el-icon style="margin-right: 5px;"><House /></el-icon>{{hospitalInfo.level}}</div>
                    <div class="time"><el-icon style="margin-right: 5px;"><Clock /></el-icon>{{ hospitalInfo.gtime }}</div>
                </div>
            </div>
            <div class="right">
                <img src="../../../assets/images/logo.png">
            </div>
          </div>
        </el-card>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

//获取路由对象
let $router = useRouter();
//接收父组件的信息
let props = defineProps(["hospitalInfo"]);
console.log(props.hospitalInfo)


const goDetail = () => {
    $router.push({path:"/hospital/register",query:{id:props.hospitalInfo.id}})
}

</script>
<style scoped lang="scss"> 
.box-card{
    height: 100px;
    cursor: pointer;

    .content{
        display: flex;
        justify-content: space-between;
        .right{
            img{
                width: 50px;
                height: 50px;
            }
        }
        .left{
            width: 60%;
            .tip{
                margin-top: 25px;
                display: flex;
                justify-content: space-between;
                font-size: 12px;
                color: rgb(55, 54, 54);

                .level{
                    display: flex;
                }
                .time{
                    display: flex;
                }
            }
        }
    }
}
</style>