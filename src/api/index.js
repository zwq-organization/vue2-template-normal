import $http from '../filters/http.js';
import QS from 'qs';

const urls = {
    getData : '/',                // 获取列表

};

const getData = function (data) {
    return $http.get(urls.getData + QS.stringify(data)).then(({statusText, data}) => {
        return data;
    });
};




export default {
    getData,
}
