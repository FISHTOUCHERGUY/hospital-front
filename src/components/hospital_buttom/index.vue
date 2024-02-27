<template>
    <div class="bottom">
        <div class="content">
            <div class="left">
                京ICP备 111号| 电话挂号12345
            </div>
            <div class="right">
                <span>联系我们</span>
                <span>合作伙伴</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">



</script>

<style scoped lang="scss">
.bottom {
  width: 100%;
  height: 50px;
  background: #f0f2f5;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  .content {
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    .right{
        span{
            margin: 0px 5px;
        }
    }
  }
}
</style>