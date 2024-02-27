//定义首页模块ts数据类型
export interface ResponseData {
  code: number;
  message: string;
  ok: boolean;
}

//代表已有的医院数据的ts类型
export interface Hospital {
  id: number;
  name: string;
  levelId: number;
  level:string;
  gtime: string;
}

//存储全部已有医院的数组类型
export type Records = Hospital[];

//获取已有医院接口返回的数据ts类型
export interface HospitalResponseData extends ResponseData {
  data: {
    records:Records
    "total": number,
    "size": number,
    "current": number,
    "orders": [],
    "optimizeCountSql": boolean,
    "hitCount": boolean,
    "countId": number,
    "maxLimit": number,
    "searchCount": boolean,
    "pages": number
  };
}

//代表医院等级或者地区数据ts类型
export interface HospitalLevelAndRegion {
  id: number;
  createTime: string;
  updateTime: string;
  isDeleted: number;
  param: {};
  parentId: number;
  name: string;
  value: string;
  dictCode: string;
  hasChildren: boolean;
}
export type HospitalLevelAndRegionArr = HospitalLevelAndRegion[];
//获取等级或医院地区接口返回数据类型
export interface HospitalLevelAndRegionResponseData extends ResponseData {
  data: HospitalLevelAndRegionArr;
}

export interface HospitalInfo extends ResponseData {
  data: Records;
}

export interface LevelType{
    id:number;
    level:string
}

export interface RegionType{
    id:number
    position:string
}

export type LevelList = LevelType[];
export type RegionList = RegionType[];
