
import { colorPickerContextKey } from 'element-plus';
<template>
    <div class="region">
        <div class="content">
            <div class="left">
                地区：
            </div>
            <ul>
                <li :class="{ active: clickedId === 0 }" @click="regionClicked(defaultRegion)">全部</li>
                <li v-for="item in regions" :class="{ active: item.id === clickedId }" @click="regionClicked(item);">{{
                    item.position }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue';
import type {RegionType,RegionList} from '@/api/home/type'
import { getRegions } from '@/api/home';


let regions = ref<RegionList>([])
let $emit = defineEmits(['getRegion']);

const defaultRegion = {
    id:0,
    position:''
}

onMounted(()=>{
    getAllRegion()
})

const getAllRegion = async () => {
    let response = await getRegions()
    regions.value = response.data
}

const regionClicked = (regionInfo: RegionType) => {
    if (regionInfo.id != 0) {
        clickedId.value = regionInfo.id
        $emit('getRegion', regionInfo);
        console.log("你点击了" + regionInfo.id + regionInfo.position)
    } else {
        //点击全部按钮
        $emit('getRegion', defaultRegion);
        console.log("你点击了全部")
        clickedId.value = 0
    }

}

let clickedId = ref(0)
</script>

<style scoped lang="scss">
.region{
    color: rgb(133, 136, 139);
    margin-top: 10px;
    display: flex;
    .content{
        display: flex;
        .left{
            margin-right: 10px;
        }
        ul{
            display: flex;
            li{
                margin-right: 10px;
                &.active{
                    color: rgb(29, 132, 196);
                }
            }
            li:hover{
                color: rgb(29, 132, 196);
                cursor: pointer;
            }
        }
    }
}
</style>