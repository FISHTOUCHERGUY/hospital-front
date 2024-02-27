import request from "@/utils/request";

enum APIUrl {
  DETAIL_URL = "/hospital/getDetail",
  DEPARTMENT_URL = "/department/getDepartments",
  OUTPATIENT_URL = "/department/getOutpatients",
}

export const getHospitalDetail = (id: number) =>
  request.get(APIUrl.DETAIL_URL + `/${id}`);

export const getDepartments = (hospitalId: number) =>
  request.get(APIUrl.DEPARTMENT_URL + `/${hospitalId}`);

export const getOutpatients = (departmentId: number) =>
  request.get(APIUrl.OUTPATIENT_URL + `/${departmentId}`);
