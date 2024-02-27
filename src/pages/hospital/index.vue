<template>
  <div class="hospital">
    <!--左侧导航区域-->
    <div class="menu">
      <el-menu :default-active="$route.path" class="el-menu-vertical-demo">
        <div class="top">
          <el-icon class="homeIcon" @click="backToHome">
            <HomeFilled />
          </el-icon>
          <span>/ 医院信息</span>
        </div>
        <div class="body">
          <el-menu-item
            index="/hospital/register"
            @click="changeActive('/hospital/register')"
          >
            <el-icon>
              <Calendar />
            </el-icon>
            <span>预约挂号</span>
          </el-menu-item>
          <el-menu-item
            index="/hospital/detail"
            @click="changeActive('/hospital/detail')"
          >
            <el-icon>
              <document />
            </el-icon>
            <span>医院详情</span>
          </el-menu-item>
          <el-menu-item
            index="/hospital/notice"
            @click="changeActive('/hospital/notice')"
          >
            <el-icon>
              <Bell />
            </el-icon>
            <span>预约通知</span>
          </el-menu-item>
          <el-menu-item
            index="/hospital/info"
            @click="changeActive('/hospital/info')"
          >
            <el-icon>
              <InfoFilled />
            </el-icon>
            <span>停诊信息</span>
          </el-menu-item>
          <el-menu-item
            index="/hospital/search"
            @click="changeActive('/hospital/search')"
          >
            <el-icon>
              <Search />
            </el-icon>
            <span>查询/取消</span>
          </el-menu-item>
        </div>
      </el-menu>
    </div>
    <!--右侧内容展示区域：路由组件展示位置-->
    <div class="content">
      <!--子组件展示结构区域-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import {onUnmounted} from "vue"
import useDetailStore from "@/store/modules/hospitalDetail";
import { Document } from "@element-plus/icons-vue";

import { useRouter, useRoute } from "vue-router";
import useDepartmentStore from "@/store/modules/department";

//获取仓库对象
let detailStore = useDetailStore();

let departmentStore = useDepartmentStore();



//获取路由器
let $router = useRouter();
//获取当前路由的信息
let $route = useRoute();
const changeActive = (path: string) => {
  //跳转
  $router.push({ path ,query:{id:$route.query.id}});
};

//组件挂载完毕：通知pinia仓库发送请求获取医院、对应挂号详细数据,存储在仓库中
onMounted(() => {

  detailStore.getHospital($route.query.id);
  departmentStore.getDepartmentList($route.query.id);

});

onUnmounted(()=>{
  detailStore.$reset()
  departmentStore.$reset()
})

const backToHome = () => {
  $router.push("/home");
};
</script>

<style scoped lang="scss">
.hospital {
  display: flex;

  .menu {
    flex: 2;
    display: flex;
    flex-direction: column;
  }

  .content {
    margin-left: 20px;
    flex: 8;
  }

  .top {
    color: rgb(77, 73, 73);
    margin-left: 70px;
    .homeIcon {
      cursor: pointer;
    }
  }
  .body {
    margin-top: 10px;
    margin-left: 40px;
  }
}
</style>
