<template>
    <div class="tip">
        <div class="department">
            <div class="header">
                <div class="left"><el-icon>
                        <Operation />
                    </el-icon>
                    <span>常见科室</span>
                </div>
                <div class="right">
                    <span>全部<el-icon>
                            <ArrowRight />
                        </el-icon></span>
                </div>
            </div>
            <div class="content">
                <ul>
                    <li>神经内科</li>
                    <li>消化内科</li>
                    <li>呼吸内科</li>
                    <li>儿科</li>
                    <li>妇科</li>
                </ul>
            </div>
        </div>
        <div class="platformInfo">


            <div class="header">
                <div class="left"><el-icon><Comment /></el-icon><span>平台公告</span></div>
                <div class="right">全部<el-icon><ArrowRight /></el-icon></div>
            </div>
            <div class="content">
                <ul>
                    <li>公告1xxxxxxxxxxxxxxxxxxxxxxxxxx</li>
                    <li>公告2xxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
                    <li>公告3xxxxxxxxxxxxxxxxxxxxxxxxxx</li>
                </ul>
            </div>
        </div>
        <div class="stopInfo"></div>
    </div>
</template>

<script setup lang="ts">
import { Operation } from '@element-plus/icons-vue';


</script>

<style scoped lang="scss">
.tip {
    color: rgb(99, 99, 94);

    .department {
        margin-bottom: 20px;

        .header {
            display: flex;
            justify-content: space-between;

            .left {
                display: flex;

                span {
                    margin-left: 5px;
                }
            }

            .right {
                display: flex;

                span {
                    margin-right: 5px;
                }
            }
        }

        .content {
            ul {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                li {
                    margin-top: 20px;
                    width: 40%;
                }
            }
        }
    }

    .platformInfo {
        .header {
            display: flex;
            justify-content: space-between;
        

            .left {
                display: flex;

                span {
                    margin-left: 5px;
                }
            }

            .right {
                display: flex;

                span {
                    margin-right: 5px;
                }
            }
        }
        .content{
            ul{
                li{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    margin-top: 20px;
                }
            }
        }
    }
}</style>