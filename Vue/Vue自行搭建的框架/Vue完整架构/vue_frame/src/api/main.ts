import Api from '@/utils/request'

export const getData = (data) => {
  return Api.getData(data)
}

export const postData=(data)=>{
  return Api.postData(data,'GET');
}
