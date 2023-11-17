import axios from 'axios'; // 引入axios

const HttpRequest = axios.create({
    withCredentials: true, //主要是添加这一行
})

/**
 * 请求错误处理
 * @param {*} err 
 */
 const errHandle = (err)=>{
  const { response }=err
  if (response){
      const { status } = response
      switch (status) {
          case 401:
              break;
          default:
              break;
      }
  }

}

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
 export function get(url, params) {
  return new Promise((resolve, reject) => {
      HttpRequest.get(url, {
          params: params
      }).then(res => {
          resolve(res.data);
      }).catch(err => {
          console.log({ url, params, err })
          errHandle(err)
          reject(err.data)
      })
  });
}
