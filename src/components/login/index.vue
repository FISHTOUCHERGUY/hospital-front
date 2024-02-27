<template>
  <div class="login_container">
    <el-dialog v-model="loginStore.loginDialog" title="用户登录">
      <!--对话框身体部分结构-->
      <div class="content">
        <el-row>
          <el-col :span="12">
            <div v-if="loginType === 0" class="phoneLogin">
              <el-form>
                <el-form-item>
                  <el-input
                    placeholder="请输入手机号码"
                    :prefix-icon="User"
                    v-model="phone"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input
                    placeholder="请输入密码"
                    :prefix-icon="Lock"
                    type="password"
                    v-model="password"
                  ></el-input>
                </el-form-item>
                <!-- <el-form-item>
                  <el-button>获取验证码</el-button>
                </el-form-item> -->
              </el-form>
              <div class="bottom">
                <el-button
                  style="width: 100%"
                  type="primary"
                  size="defalut"
                  @click="handleLogin(phone, password)"
                  >用户登录</el-button
                >
                <p>微信扫码登录</p>
                <svg
                  @click="changeWechatLogin"
                  t="1706685138969"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4283"
                  width="30"
                  height="30"
                >
                  <path
                    d="M696.32 552.96c11.301926 0 20.48-9.178074 20.48-20.48 0-11.320889-9.178074-20.48-20.48-20.48s-20.48 9.178074-20.48 20.48S685.018074 552.96 696.32 552.96zM573.44 552.96c11.301926 0 20.48-9.178074 20.48-20.48 0-11.320889-9.178074-20.48-20.48-20.48s-20.48 9.178074-20.48 20.48S562.138074 552.96 573.44 552.96zM501.76 409.6c16.952889 0 30.72-13.748148 30.72-30.72s-13.767111-30.72-30.72-30.72c-16.952889 0-30.72 13.748148-30.72 30.72C471.04 395.851852 484.807111 409.6 501.76 409.6zM337.92 409.6c16.952889 0 30.72-13.748148 30.72-30.72s-13.767111-30.72-30.72-30.72c-16.952889 0-30.72 13.748148-30.72 30.72C307.2 395.851852 320.967111 409.6 337.92 409.6zM512 1024c282.775704 0 512-229.224296 512-512S794.775704 0 512 0 0 229.224296 0 512 229.224296 1024 512 1024zM451.716741 610.986667c-10.353778 1.441185-21.010963 2.180741-31.857778 2.180741-27.154963 0-53.020444-4.664889-76.515556-13.103407-2.332444-0.83437-10.695111-3.356444-15.208296 0-10.164148 7.547259-23.798519 23.248593-23.798519 23.248593s5.006222-11.415704 6.674963-28.103111c0.758519-7.623111-10.865778-12.970667-13.198222-14.52563-44.240593-29.923556-72.533333-79.36-72.533333-130.730667 0-90.149926 87.096889-163.233185 194.56-163.233185 100.333037 0 182.916741 63.696593 193.422222 145.521778-92.311704 12.743111-162.721185 79.928889-162.721185 160.919704C450.56 599.191704 450.939259 605.127111 451.716741 610.986667zM462.468741 649.500444c-13.824 2.180741-28.084148 3.318519-42.628741 3.318519-29.070222 0-56.869926-4.551111-82.583704-12.856889-12.932741-4.171852-60.150519 45.264593-71.888593 39.272296-6.97837-3.565037 21.086815-62.027852 14.601481-66.180741-58.04563-37.072593-95.668148-96.616296-95.668148-163.764148 0-112.412444 105.453037-203.529481 235.52-203.529481 122.652444 0 223.402667 81.009778 234.496 184.490667 103.177481 4.039111 185.344 75.434667 185.344 162.910815 0 54.328889-31.687111 102.437926-80.421926 132.096-9.178074 5.575111 19.892148 52.641185 9.576296 56.832-6.33363 2.578963-51.693037-37.262222-58.405926-35.252148-20.423111 6.106074-42.401185 9.424593-65.308444 9.424593C561.284741 756.242963 489.832296 711.793778 462.468741 649.500444z"
                    fill="#33CC00"
                    p-id="4284"
                  ></path>
                </svg>
              </div>
              <p class="register" @click="changeRegister">点击注册</p>
            </div>
            <div v-if="loginType === 1" class="wechatLogin">
              <div class="code"><img src="../../assets/images/code.jpg" /></div>
              <p @click="changePhoneLogin" class="back">返回</p>
            </div>
            <div v-if="loginType === 2" class="registerDia">
              <el-form>
                <el-form-item>
                  <el-input
                    placeholder="请输入手机号码"
                    :prefix-icon="User"
                    v-model="phone"
                    type="number"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input
                    placeholder="请输入密码"
                    :prefix-icon="Lock"
                    v-model="password"
                    type="password"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input
                    placeholder="请确认密码"
                    :prefix-icon="Lock"
                  ></el-input>
                </el-form-item>
                <el-button
                  style="width: 100%"
                  type="success"
                  size="defalut"
                  @click="handleRegister(phone,password)"
                  >注册</el-button
                >
              </el-form>
              <p @click="changePhoneLogin" class="back">返回</p>
            </div>
          </el-col>
          <el-col :span="12">
            <img src="../../assets/images/code.jpg" />
          </el-col>
        </el-row>
      </div>
      <div class="bottom">
        <div class="button">
          <el-button @click="loginStore.closeLoginDialog()">关闭窗口</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { Lock, User } from "@element-plus/icons-vue";
import useLoginStore from "../../store/modules/login";
import { ref } from "vue";
import { ElLoading } from "element-plus";
import { ElMessage } from "element-plus";

let loginStore = useLoginStore();

//登录状态码 0手机登录 1微信登录 2注册
let loginType = ref(0);

let phone = ref("");
let password = ref();

const changeWechatLogin = () => {
  loginType.value = 1;
};

const changePhoneLogin = () => {
  loginType.value = 0;
};

const changeRegister = () => {
  loginType.value = 2;
};

const handleLogin = (userPhone: any, userPassword: any) => {
  loginStore.userLogin(userPhone, userPassword);
  const loading = ElLoading.service({
    lock: true,
    text: "登录中",
    background: "rgba(0, 0, 0, 0.7)",
  });
  setTimeout(() => {
    loading.close();
    if (loginStore.loginState === true) {
      ElMessage({
        message: "登录成功！",
        type: "success",
      });
      loginStore.loginDialog = false;
    } else {
      ElMessage.error(loginStore.resultMsg);
    }
    //清空
    phone.value = "";
    password.value = "";
    loginStore.resultMsg = ''
  }, 2000);
};

const handleRegister = (userPhone: any, userPassword: any) => {
  loginStore.userRegister(userPhone,userPassword);
  const loading = ElLoading.service({
    lock: true,
    text: "注册中",
    background: "rgba(0, 0, 0, 0.7)",
  });
  setTimeout(() => {
    loading.close();
    if (loginStore.registerFlag) {
      ElMessage({
        message: "注册成功！",
        type: "success",
      });
      loginStore.registerFlag = false
    } else {
      ElMessage.error(loginStore.resultMsg);
      loginStore.resultMsg = ''

    }
    loginType.value = 0
    //清空账号密码
    phone.value = "";
    password.value = "";
  }, 2000);
};
</script>

<style scoped lang="scss">
.back {
  &:hover {
    color: black;
  }
  cursor: pointer;
  margin-top: 10px;
}
.login_container {
  :deep(.el-dialog__body) {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  .content {
    .phoneLogin {
      padding: 20px;
      border: 1px solid #ccc;
      .bottom {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          margin-top: 10px;
          // text-align: center;
        }
        svg {
          cursor: pointer;
          margin-top: 5px;
          // margin-left: 125px;
        }
      }
      .register {
        font-size: 13px;
        margin-left: 230px;
        color: #9d9999;
        cursor: pointer;
        &:hover {
          color: black;
        }
      }
    }
    .wechatLogin {
      padding: 20px;
      border: 1px solid #ccc;
      .code {
        margin-top: 20px;
        margin-left: 50px;
        img {
          width: 200px;
          height: 200px;
        }
      }
    }
    .registerDia {
      padding: 20px;
      border: 1px solid #ccc;
    }
    img {
      width: 280px;
      height: 280px;
    }
  }
  .bottom {
    border-top: 1px solid #ccc;
    margin-top: 20px;
    width: 100%;
    .button {
      width: 90px;
      margin-top: 10px;
      margin-left: 550px;
    }
  }
}
</style>
