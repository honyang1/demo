/* 组件接收 */
export interface MapData {  
  visible: boolean,         /* 是否显示地图 */
  isQuery: boolean,         /* 是否显示查询条件 */
  form: MapRes,             /* 数据集合 */

}

/* 组件私有 */
export interface MapPrivate { 
  map?: any                   /* 地图实例 */
  marker?: any                /* 添加点实例 */
  placeSearch?: any           /* 地图检索实例 */
}
export interface MapRes {
  title?: string,       /* 标题 */
  lng?: number,         /* 经度 */
  lat?: number          /* 纬度 */
}


