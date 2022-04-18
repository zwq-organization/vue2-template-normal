import axios from 'axios';

let pending = []; //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let cancelToken = axios.CancelToken;

axios.defaults.timeout = 120000;
axios.defaults.headers.post['Content-Type'] = "application/json;charset=UTF-8";

axios.defaults.baseURL = process.env.NODE_ENV === "production" ? "" : "/api";


let removePending = (ever) => {
    for(let p in pending){
        if(pending[p].u === ever.url + '&' + ever.method) { //当当前请求在数组中存在时执行函数体
            pending[p].f(); //执行取消操作
            pending.splice(p, 1); //把这条记录从数组中移除
        }else {
            var lastPrefixion = pending[p].u.split('?');
            var nowPrefixion  = ever.url.split('?');

            if(lastPrefixion[0] === nowPrefixion[0]) { //当当前请求在数组中存在时执行函数体
                pending[p].f(); //执行取消操作
                pending.splice(p, 1); //把这条记录从数组中移除
            }
        }
    };
}

// http request 拦截器
axios.interceptors.request.use(
    config => {
        config.data = JSON.stringify(config.data);
        // config.headers = {
        //     'Content-Type':'application/x-www-form-urlencoded'
        // }

        // ------------------------------------------------------------------------------------
        // removePending(config); //在一个ajax发送前执行一下取消操作
        config.cancelToken = new cancelToken((c)=>{
            // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
            pending.push({ u: config.url + '&' + config.method, f: c });
        });
        // -----------------------------------------------------------------------------------------
        // if (config.method === 'get') {
        //     //config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
        //     //config.data = JSON.stringify(config.data);
        //
        //     //附带通用参数
        //     let params = config.params || {};
        //     params._t = Date.parse(new Date()) / 1000;
        //     config.params = params;
        // };
        return config;
    },
    error => {
        return Promise.reject(err);
    }
);

// http response 拦截器
axios.interceptors.response.use(
    response => {

        // ------------------------------------------------------------------------------------------
        // removePending(response.config);  //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
        // -------------------------------------------------------------------------------------------
        // if(response.data.errCode ==2){
        //     router.push({
        //         path:"/login",
        //         querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
        //     })
        // }
        return response;
    },
    error => {
        return Promise.reject(error)
    }
);

export default axios;
