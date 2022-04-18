/**
 * 数据千分位格式化
 * @param value
 * @return {string}
 */
let formatData = (value) => {
    if( value == '' ) return 0;

    if( !value ) return 0;

    value += '';
    if (!value.includes('.')) value += '.';
    return value.replace(/(\d)(?=(\d{3})+\.)/g, function($0, $1) {
        return $1 + ',';
    }).replace(/\.$/, '');
};

/**
 * 日期格式化
 * @param     date
 * @returns   {*}
 */
let formatNowDate = function (date) {
    let ret,
        fmt = "YYYY/mm/dd HH:MM:SS";

    if( date == '0' || !date ) {
        return '--'
    }

    date = new Date(date);

    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        }
    }
    return fmt;
};

export {
    formatData,
    formatNowDate,
};
