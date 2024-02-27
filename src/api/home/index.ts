//封装首页请求
import request from "@/utils/request";
import type { HospitalResponseData } from "./type";
//通过枚举管理接口地址
enum APIUrl {
  //获取已有医院的数据接口地址
  HOSPITAL_URL = "/hospital/getHospitalList",

  LEVEL_URL = "/hospital/getLevels",

  REGION_URL = "/hospital/getRegions",

  SEARCHLIST_URL = "/hospital/getSearchList",

  LOGIN_URL = "common/login",

  REGISTER_URL ="common/register"
}
//获取医院数据
export const getHospitalList = (page: number, pageSize: number, levelId: number, regionId: number, name :string) =>
  request.get<any, HospitalResponseData>(APIUrl.HOSPITAL_URL, {
    params: {
      page: page,
      pageSize: pageSize,
      levelId : levelId,
      regionId : regionId,
      name : name
    },
  });
//获取地区数据
export const getLevels = () => request.get(APIUrl.LEVEL_URL);
//获取等级数据
export const getRegions = () => request.get(APIUrl.REGION_URL);

//获取所有医院名称和id的列表
export const getSearchList = () => request.get(APIUrl.SEARCHLIST_URL);

//登录
export const login = (phone:string,password:any) => request.post(APIUrl.LOGIN_URL,{

    phone:phone,
    password:password

});

//注册
export const register = (phone:string,password:any) => request.post(APIUrl.REGISTER_URL,{

    phone:phone,
    password:password

});