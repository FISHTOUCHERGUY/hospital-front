import { getDepartments } from "@/api/hospital";
import { getOutpatients } from "@/api/hospital";
import { defineStore } from "pinia";

const useDepartmentStore = defineStore("Department", {
  state: () => {
    return { departmentList: [{}], outpatientList: [{}] };
  },
  actions: {
    async getDepartmentList(hospitalId: any) {
      let response: any = await getDepartments(hospitalId);
      if (response.code === 1) {
        this.departmentList = response.data;
      }
    },
    async getOutpatientList(departmentId: any) {
      let response: any = await getOutpatients(departmentId);
      if (response.code === 1) {
        this.outpatientList = response.data;
      }
    },
  },
});

export default useDepartmentStore;
