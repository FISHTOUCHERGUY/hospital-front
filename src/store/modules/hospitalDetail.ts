import { defineStore } from "pinia";
import { getHospitalDetail } from "@/api/hospital";


const useDetailStore = defineStore("Detail", {
  state: () => {
    return {detailInfo:{}};
  },
  actions: {
    // 获取医院详情的方法
    async getHospital(id: any) {
      let response: any = await getHospitalDetail(id);
      if (response.code === 1) {
        this.detailInfo = response.data;
      }
    },
  },
  getters: {

  },
});
//获取仓库的方法向外暴露
export default useDetailStore;
