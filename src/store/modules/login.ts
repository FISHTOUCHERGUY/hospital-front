import { defineStore } from "pinia";
import { login } from "@/api/home";
import { register } from "@/api/home";

const useLoginStore = defineStore("Login", {
  state: () => {
    return {
      loginDialog: false,
      user:{
        id:'',
        username:'',
        phone:''
      },
      loginState:false,
      registerFlag:false,
      resultMsg:''
    };
  },
  actions: {
    openLoginDialog() {
      this.loginDialog = true;
    },
    closeLoginDialog() {
      this.loginDialog = false;
    },

    async userLogin(phone:string,password:any){
      let response : any = await login(phone,password);
      if(response.code === 1){
        this.user = response.data
        this.loginState = true
      }
      this.resultMsg = response.msg
    } ,
    async userRegister(phone:string,password:any){
      let response : any = await register(phone,password);
      if(response.code === 1){
        this.registerFlag = true
      }
      this.resultMsg = response.msg
    }
  },
  getters: {},
});

export default useLoginStore