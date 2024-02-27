<template>
    <div>
        <!-- 首页轮播图 -->
        <Carousel />
        <!-- 首页搜索医院表单 -->
        <Search @search="search" />
        <!-- 底部展示医院的结构 -->
    </div>
    <el-row gutter="20px">

        <el-col :span="20">
            <!-- 等级组件 -->
            <Level @getLevel="getLevel" />
            <!--地区组件-->
            <Region @getRegion="getRegion" />
            <!--展示医院卡片-->
            <div class="cards" v-if="hospitals.length > 0" >
                <Card class="item" v-for='(item,index) in hospitals' :key="index" :hospitalInfo="item"/>
            </div>
            <!--展示分页器-->
            <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize"
                    :page-sizes="[5, 10, 20, 40]" :small="small" :disabled="disabled" :background=true
                    layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
                    @current-change="handleCurrentChange" />
        </el-col>
        <el-col :span="4"><Tip /></el-col>
    </el-row>
</template>

<script setup lang="ts">
// 引入轮播图组件
import Carousel from './carousel/index.vue'
//引入搜索组件
import Search from './search/index.vue'
//引入首页等级组件
import Level from './level/index.vue'
//引入地区选择组件
import Region from './region/index.vue'
//展示医院卡片
import Card from './card/index.vue'
//tips
import Tip from './tip/index.vue'
//请求api
import { getHospitalList } from '@/api/home/index.ts'
import type { Records , HospitalResponseData, LevelType, RegionType} from '@/api/home/type'


import { ref, onMounted } from 'vue'

const currentPage = ref<number>(1)
const pageSize = ref<number>(10)


const small = ref(false)
const disabled = ref(false)
// const page = ref<number>(1)
// const pageSize = ref<number>(10)

let hospitals = ref<Records>([])
let total = ref(0)
let levelId = ref<number>(0)
let regionId = ref<number>(0)
let hospitalName = ref()


const handleSizeChange = () => {

    currentPage.value = 1
    getHospitalInfo()
}
const handleCurrentChange = () => {
    
    getHospitalInfo()
}

const search = (name : string) =>{

    hospitalName.value = name

    getHospitalInfo()
}

const getLevel = (level : LevelType) =>{
    levelId.value = level.id

    getHospitalInfo()
}

const getRegion = (region : RegionType) =>{
    regionId.value = region.id

    getHospitalInfo()
}

onMounted(() => {
    getHospitalInfo()
})

const getHospitalInfo = async() =>{
    console.log("等级数据" + levelId.value)
    let response :HospitalResponseData = await getHospitalList(currentPage.value,pageSize.value,levelId.value,regionId.value,hospitalName.value)
    //如果请求成功 储存数据
    if(response.code === 1){
       hospitals.value = response.data.records 
       total.value = response.data.total
       console.log(total.value)
       console.log(hospitals)
    }
    
    
} 


</script>

<style scoped lang="scss">
.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .item {
        width: 48%;
        margin: 10px 10px;
    }
}
</style>

