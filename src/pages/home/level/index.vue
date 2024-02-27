<template>
    <div class="level">
        <h1>医院</h1>
        <div class="content">
            <div class="left">等级:</div>
            <ul class="hospital">
                <li :class="{ active: clickedId === 0 }" @click="levelClicked(defaultLevel)">全部</li>
                <li v-for="item in levels" :class="{ active: item.id === clickedId }" @click="levelClicked(item);">{{
                    item.level }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">

import { getLevels } from '@/api/home';
import { onMounted, ref } from 'vue';
import type { LevelList } from '@/api/home/type'
import type {LevelType} from '@/api/home/type'

let $emit = defineEmits(['getLevel']);

let levels = ref<LevelList>([])

let clickedId = ref(0)

onMounted(() => {
    getAllLevel()
})


const defaultLevel = {
    id:0,
    level:''
}
const getAllLevel = async () => {
    let response = await getLevels()
    levels.value = response.data
    console.log(levels)
}

const levelClicked = (levelInfo: LevelType) => {
    if (levelInfo.id != 0) {
        clickedId.value = levelInfo.id
        $emit('getLevel', levelInfo);
        console.log("你点击了" + levelInfo.id + levelInfo.level)
    } else {
        //点击全部按钮
        $emit('getLevel', defaultLevel);
        console.log("你点击了全部")
        clickedId.value = 0
    }

}


</script>

<style scoped lang="scss">
.level {
    color: rgb(133, 136, 139);

    h1 {

        font-weight: 900;
        margin: 10px 0px;
    }

    .content {
        display: flex;

        .left {
            margin-right: 20px;
        }

        .hospital {
            display: flex;

            li {
                margin-right: 10px;

                &.active {
                    color: rgb(29, 132, 196);
                }
            }

            li:hover {
                color: rgb(29, 132, 196);
                cursor: pointer;
            }
        }
    }
}
</style>