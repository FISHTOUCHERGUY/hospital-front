import { createApp } from "vue";
import App from "@/App.vue";

import HospitalTop from "@/components/hospital_top/index.vue";
import HospitalButtom from "@/components/hospital_buttom/index.vue";
import Login from "@/components/login/index.vue"
import router from "@/router";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//引入pinia仓库
import pinia from '@/store'

import "element-plus/dist/index.css";
import "@/style/reset.scss";

const app = createApp(App);

app.component("HospitalTop", HospitalTop);
app.component("HospitalButtom", HospitalButtom); 
app.component("Login",Login)

app.use(router);
app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(ElementPlus, {
    locale: zhCn,
  })
//安装pinia仓库
app.use(pinia)
app.mount("#app");
