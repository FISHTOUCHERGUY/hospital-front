<template>
  <div class="search">
    <el-autocomplete v-model="name" :fetch-suggestions="querySearch" :trigger-on-focus="false" clearable
      class="inline-input w-50" placeholder="请输入医院名称" @select="handleSelect" />
    <el-button type="primary" size="default" :icon="Search" @click="searching('')"></el-button>
    <el-button type="infor" size="default" :icon="CircleClose" @click="searching('r')">重置</el-button>
  </div>
</template>

<script setup lang="ts">
interface HospitalItem {
  value: string
  id: number
}

import { onMounted, ref } from 'vue'
//引入element icon
import {  CircleClose,  Search } from "@element-plus/icons-vue"
import { getSearchList } from "@/api/home/index"

let $emit = defineEmits(['search']);

let name = ref('')

const hospitals = ref<HospitalItem[]>([])
const querySearch = (queryString: string, cb: any) => {
  const results = queryString
    ? hospitals.value.filter(createFilter(queryString))
    : hospitals.value
  // call callback function to return suggestions
  cb(results)
}
const createFilter = (queryString: string) => {
  return (hospital: HospitalItem) => {
    return (
      hospital.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}
const loadAll = async () => {
  let response = await getSearchList()
  hospitals.value = response.data
}

const handleSelect = (item: HospitalItem) => {
  console.log(item)
}


const searching = (signal: string) => {
  if (signal === 'r') {
    name.value = ''
  }
  $emit('search', name.value);
  name.value = ''
}

onMounted(() => {
  loadAll()

})
</script>

<style scoped lang="scss">
.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;

  //深度选择器：>>> /deep/ ::v-deep
  :deep(.el-input__wrapper) {
    width: 600px;
    margin-right: 10px;
  }
}
</style>