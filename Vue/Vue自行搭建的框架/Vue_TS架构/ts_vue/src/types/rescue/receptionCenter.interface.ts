// hear.Data 参数类型
export interface ReceptionCenterData {
  pageName: string
}
// VUEX hear.State 参数类型
export interface ReceptionCenterState {
  [key: string]: any
}
/* 接口请求参数类型 - 获取养老顾问 */
export interface TaskOperatorReq {
  _EQ_Status_: '01' | '02' | '03' | '90',   /* 未处理 - 01  处理中 - 02  处理完 - 03  作废 - 90 */
  page: number,                        /* 页码 */
  size: number,                        /* 每页条数 */
  _EQ_Id_?: string,                    /* id查询 */
  _EQ_ElderId_?: string,               /* 老人id查询 */
  _EQ_TaskType_?: string,              /* 任务类型查询 */
  _EQ_TaskSubType_?: string,           /* 任务子类型查询 */
  _EQ_DoAccount_?: string,             /* 处置人查询 */
  order?: string,                      /* 排序字段 */
  asc?: boolean                       /* 是否正序 */
}

/* 接口接收参数类型 - 获取养老顾问 */
export interface CounselorListRet {
  id?: string,          /* 主键ID */
  name?: string,        /* 姓名 */
  img?: string,         /* 头像 */
  isOnline?: boolean    /* 是否在线 */
}
/* 接口接收参数类型 - 获取当前操作员所辖区域 */
export interface CurrentOperatorRet {
  id?: string,            /* 主键ID */
  regionCode?: string,    /* 区域编号 */
  regionName?: string,    /* 区域名称 */
  centerId?: boolean,     /* 运营中心ID */
  isOnline?: boolean      /* 是否在线 */
}

/* 接口接收参数类型 - 获取处置事件列表 */
export interface TaskOperatorRet {
  count?: string,        /* 总条数 */
  pageCount?: string,    /* 页码总数 */
  list?: List[]          /* 任务数据 */
}

/* 接口接收参数类型 - 获取处置中任务 */
export interface DoingTasksRet {
  taskType?: string,                  /* 任务分类 */
  taskSubTypes?: string[],             /* 任务子分类 */
  todoTasks?: List[],           /* 任务数据 */
}
export interface List {
  id?: string,                  /* 任务ID */
  elderId?: string,             /* 老人ID */
  elderName?: string,           /* 老人姓名 */
  elderAddress?: string,        /* 老人住址 */
  requestContent?: string,      /* 内容 */
  requestTime?: string,         /* 请求时间 */
  taskType?: string,            /* 任务类型 */
  taskTypeName?: string,        /* 任务类型名称 */
  taskSubType?: string,         /* 任务子类型 */
  taskSubTypeName?: string,     /* 任务子类型名称 */
  location?: string,            /* 来源 */
  fromType?: string,            /* 老人姓名 */
  fromTypeName?: string,        /* 来源名称 */
  status?: string,              /* 状态 */
  statusName?: string,          /* 状态名称 */
  doAccount?: string,           /* 处理人 */
  doUrl?: string,               /* 处理页Url */
  doTime?: string,              /* 处理时间 */
  doneTime?: string,            /* 完成时间 */
  relate?: string,              /* 关联ID */
  remark?: string               /* 备注 */
}
