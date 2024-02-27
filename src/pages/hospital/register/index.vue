<template>
  <div class="register">
    <div class="top">
      <div class="title">
        {{ detailStore.detailInfo.name }}
      </div>
      <div class="level">
        <el-icon>
          <House />
        </el-icon>
        {{ detailStore.detailInfo.level }}
      </div>
    </div>
    <div class="content">
      <div class="left">
        <img :src="detailStore.detailInfo.logo" alt="" />
      </div>
      <div class="right">
        <div class="rule">挂号规则</div>
        <div class="info">
          <div class="time">
            预约周期：{{ detailStore.detailInfo.appointmentCircle }} <br />
            放号时间：{{ detailStore.detailInfo.registerTime }} <br />
            停挂时间：{{ detailStore.detailInfo.stopTime }}
          </div>
          <div class="address">地址:</div>
        </div>
      </div>
    </div>
    <div class="departments">
      <div class="left">
        <ul>
          <li
            v-for="item in departmentStore.departmentList"
            @click="departmentClicked(item.id)"
            :class="{ active: clicked === item.id }"
          >
            {{ item.departmentName }}
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="header">
          <div class="font" v-if="clicked != 0">
            {{ departmentStore.departmentList[clicked - 1].departmentName }}
          </div>
        </div>
        <div class="warning" v-if="clicked === 0">请选择挂号科室！</div>
        <div class="content">
          
          <ul>
            <li v-for="item in departmentStore.outpatientList">
              {{ item.outpatientName }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//引入仓库中医院详情数据
import useDetailStore from "@/store/modules/hospitalDetail";
//引入科室门诊仓库
import useDepartmentStore from "@/store/modules/department";
import { onMounted, ref } from "vue";

let detailStore: any = useDetailStore();
let departmentStore: any = useDepartmentStore();
let clicked = ref(0);

onMounted(() => {
  //页面挂载时设置默认门诊
  departmentStore.getOutpatientList(0);
});

const departmentClicked = (departmentId: number) => {
  departmentStore.getOutpatientList(departmentId);
  clicked.value = departmentId;
};
</script>
<style scoped lang="scss">
.register {
  .top {
    display: flex;
    align-items: center;

    .title {
      font-size: 20px;
      margin-right: 20px;
      font-weight: 450;
    }

    .level {
      font-size: 13px;
      color: rgb(71, 71, 67);
    }
  }

  .content {
    display: flex;
    margin-top: 20px;

    .left {
      flex: 2;

      img {
        width: 150px;
        height: 180px;
      }
    }

    .right {
      flex: 10;

      .rule {
        margin-bottom: 10px;
      }

      .info {
        font-size: 13px;
        color: rgb(53, 54, 55);
        .address {
          margin-top: 10px;
        }
      }
    }
  }

  .warning{
    margin-left: 300px;
    font-size: 30px;
    margin-top: 50px;
  }
  .departments {
    margin-top: 50px;
    display: flex;
    .right {
      flex: 10;
      .header {
        height: 25px;
        line-height: 25px;
        background-color: rgb(248, 248, 248);
        .font {
          margin-left: 10px;
          font-size: 12px;
          color: #525050;
        }
      }
      .content {
        margin-left: 20px;
        ul {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          li {
            &:hover {
              background-color: rgb(239, 249, 249);
              // border: solid rgb(121, 122, 123);
            }
            cursor: pointer;
            line-height: 40px;
            border-left: solid rgb(157, 206, 231);
            height: 40px;
            margin-left: 20px;
            margin-bottom: 20px;
            text-align: center;
            width: 23%;
            color: #121212;
            font-size: 14px;
          }
        }
      }
    }
    .left {
      flex: 1;
      ul {
        width: 100%;
        height: 100%;
        background: rgb(248, 248, 248);
        display: flex;
        flex-direction: column;
        li {
          &:hover {
            border-left: 1px solid red;
            color: red;
            background: white;
          }
          flex: 1;
          text-align: center;
          color: #7f7f7f;
          font-size: 14px;
          line-height: 40px;
          &.active {
            border-left: 1px solid red;
            color: red;
            background: white;
          }
        }
      }
    }
  }
}
</style>
