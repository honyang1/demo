import { DateType } from 'element-ui/types/calendar';

const com: any = {
    /* 是否为空 */
    isNull(str: any): boolean {
        if (str === null) { return true; }
        if (str === undefined) { return true; }
        if (str === 'null') { return true; }
        if (str.length === 0) { return true; }
        if (/^\s*$/i.test(str)) { return true; }
        return false;
    },
    /* 身份证 是否合法 */
    isCard(str: string): boolean {
        let Card = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (!Card.test(str)) { return true; }
        return false;
    },
    /* 保留几位小数，num值，fix 10标识1位 */
    toFixed(num: number, fix: number): number {
        return Math.round(num * fix) / fix;
    },
    /* 获取地址栏参数 */
    getQueryString(name: string) {
        let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        let r = window.location.search.substr(1).match(reg);
        if (r !== null) { return unescape(r[2]); }
        return null;
    },
    /* SON 克隆  jsonObj json对象  return 新的json对象 */
    objClone(jsonObj: any): any {
        if (jsonObj instanceof Array) {
            let buf = []
            let i = jsonObj.length
            while (i--) {
                buf[i] = this.objClone(jsonObj[i])
            }
            return buf
        } else if (jsonObj instanceof Object) {
            let buf: any;
            for (const k of Object.keys(jsonObj)) {
                buf[k] = this.objClone(jsonObj[k])
            }
            return buf
        } else {
            return jsonObj
        }

    },
    /*  深拷贝 */
    concat(json: any): any {
        return json.concat([]);
    },
    /* 截断字符串 */
    sliceStr(str: string, sliceLen: number): string {
        if (!str) { return '' }
        let realLength = 0
        const len = str.length
        let charCode = -1
        for (let i = 0; i < len; i++) {
            charCode = str.charCodeAt(i)
            if (charCode >= 0 && charCode <= 128) {
                realLength += 1
            } else {
                realLength += 2
            }
            if (realLength > sliceLen) {
                return `${str.slice(0, i)}...`
            }
        }

        return str
    },
    /* 查找参数在数组内的下标 */
    indexOfArray(array: any, val: string): number {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === val) { return i; }
        }
        return -1;
    },
    /* 删除数组内包含的该参数 */
    removeArray(array: any, val: any): any {
        const index = array.indexOf(val);
        if (index > -1) { array.splice(index, 1); }
    },
    /* 分钟转换成天小时分钟 */
    timeStamp(StatusMinute: number): number[] {
        const day = parseInt((StatusMinute / 60 / 24).toString(), 10);
        const hour = parseInt((StatusMinute / 60 % 24).toString(), 10);
        const min = parseInt((StatusMinute % 60).toString(), 10);
        return [day, hour, min];
    },
    /* 日期格式化 yyyy-mm-dd */
    currentTime(datetime: any, format: string): any {
        if (!datetime) {
            return '';
        } else {
            datetime = new Date(datetime);
        }
        return FormatDataTime(datetime, format);
    },
    /* 2个string 时间对比 */
    compareDate(d1: any, d2: any): boolean { //
        return (new Date(d1.replace(/-/g, '\/'))) > (new Date(d2.replace(/-/g, '\/')));
    },
    /*计算天数差的函数    //sDate1和sDate2是2006-12-18格式    */
    dateDiff(sDate1: string, sDate2: string): number {
        let aDate: any = sDate1.split('-');
        let oDate1: any = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]); // 转换为12-18-2006格式  
        aDate = sDate2.split('-');
        let oDate2: any = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);
        let iDays: number = parseInt((Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24).toString(), 10); // 把相差的毫秒数转换为天数  
        return iDays;
    },
    /* data1 开始时间   data2 结束时间  newDate() */
    timeDiff(date1: any, date2: any): any { //
        let date3 = date2.getTime() - date1.getTime() // 时间差的毫秒数      
        // 计算出相差天数
        let iDays = Math.floor(date3 / (24 * 3600 * 1000))
        let leave1 = date3 % (24 * 3600 * 1000) // 计算天数后剩余的毫秒数
        let iHours = Math.floor(leave1 / (3600 * 1000))
        // 计算相差分钟数
        let leave2 = leave1 % (3600 * 1000) // 计算小时数后剩余的毫秒数
        let iMinutes = Math.floor(leave2 / (60 * 1000))
        // 计算相差秒数
        let leave3 = leave2 % (60 * 1000) // 计算分钟数后剩余的毫秒数
        let iSeconds = Math.round(leave3 / 1000)
        return { day: iDays, hours: iHours, minutes: iMinutes, seconds: iSeconds };
    },
    /* 月份追加0 */
    toMonthZero(month: number): any {
        return month < 10 ? '0' + month : month;
    },
    /* div 拖动 */
    onmouse(div1: any) {
        div1.onmousedown = (ev: any) => {
            const oevent: any = ev || event;
            let distanceX: number = oevent.clientX - div1.offsetLeft;
            let distanceY: number = oevent.clientY - div1.offsetTop;
            document.onmousemove = (ev: any) => {
                const oevent: any = ev || event;
                div1.style.left = oevent.clientX - distanceX + 'px';
                div1.style.top = oevent.clientY - distanceY + 'px';
            };
            document.onmouseup = () => {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        }
    },
    /* 对比2个json 是否相等 */
    compreObj(obj1: any, obj2: any) { //
        let flag = true;

        function compre(obj1: any, obj2: any) {
            if (Object.keys(obj1).length !== Object.keys(obj2).length) {
                flag = false;
            } else {
                for (let x in obj1) {
                    if (obj2.hasOwnProperty(x)) {
                        if (obj1[x] !== obj2[x]) {
                            compre(obj1[x], obj2[x]);
                        }
                    } else {
                        flag = false;
                    }
                }
            }
            if (flag === false) {
                return false;
            } else {
                return true;
            }
        }

        return compre(obj1, obj2)
    },
    /* 日期追加年月日 */
    timeToString(obj: any) {
        obj.year > 0 ?
            obj.year + '年' :
            obj.month > 0 ?
                obj.month + '月' :
                obj.day > 0 ?
                    obj.day + '天' :
                    obj.hour > 0 ?
                        obj.hour + '小时' :
                        obj.min > 0 ?
                            obj.min + '分钟' :
                            '';
    }
};

const Enumerable = require('linqjs');
const json: any = {
    /* 查询 */
    toWhere(Json: any, where: any) {
        return Enumerable.from(Json).where(where).toArray();
    },
    /* select查询 */
    toSelect(Json: any, evn: any) {
        return Enumerable.from(Json).select(evn).toArray();

    },
    /* type 0 为升序  1为降序 */
    toOrderBy(Json: any, where: any, type: any) {
        if (type === 0) {
            return Enumerable.from(Json).orderBy(where).toArray();
        }
        return Enumerable.from(Json).orderByDescending(where).toArray();
    },
    /* 去重 */
    toDistinct(Json: any, where: any) {
        return Enumerable.from(Json).distinct(where).toArray();
    },
    /* 取查询到条件的第一条数据 */
    toFirstOrDefault(Json: any, where: any) {
        return Enumerable.from(Json).firstOrDefault(where);
    },
    /* 取查询到条件的最后一条数据 */
    toLastOrDefault(Json: any, where: any) {
        return Enumerable.from(Json).lastOrDefault(where);
    },
    /* 取差集 */
    toExcept(Json1: any, Json2: any) {
        return Enumerable.from(Json1).except(Json2).toArray();
    },
    /* 取交集 */
    toIntersect(Json1: any, Json2: any) {
        return Enumerable.from(Json1).intersect(Json2).toArray();
    },
    /* 合并 */
    toUnion(Json1: any, Json2: any) { //
        return Enumerable.from(Json1).union(Json2).toArray();
    }
};

const session: any = {
    /* 获取session */
    get(key: string) {
        let json: any = sessionStorage.getItem(key);
        return JSON.parse(json);
    },
    /* 设置session */
    set(key: string, value: any) {
        sessionStorage.setItem(key, JSON.stringify(value));
    },
    /* 删除session */
    remove(key: string) {
        sessionStorage.removeItem(key);
    },
    /* 获取cookie参数 */
    getToken() {
        return document.cookie.split('=')[1];
    }
}

export {
    com,
    json,
    session
}




const FormatDataTime = (time: Date, format: any): string => {
    if (!format) { format = "yyyy-MM-dd HH:mm:ss"; }
    let o: any = {
        "M+": time.getMonth() + 1, // month
        "d+": time.getDate(), // day
        "H+": time.getHours(), // hour
        "m+": time.getMinutes(), // minute
        "s+": time.getSeconds(), // second
        "q+": Math.floor((time.getMonth() + 3) / 3), // quarter
        "S": time.getMilliseconds()
    }

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (time.getFullYear() + "")
            .substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}

// Date.prototype.FormatDataTime((format: any) => {
//     if (!format) { format = "yyyy-MM-dd HH:mm:ss"; }
//     let time = new Date();
//     let o: any = {
//         "M+": time.getMonth() + 1, // month
//         "d+": time.getDate(), // day
//         "H+": time.getHours(), // hour
//         "m+": time.getMinutes(), // minute
//         "s+": time.getSeconds(), // second
//         "q+": Math.floor((time.getMonth() + 3) / 3), // quarter
//         "S": time.getMilliseconds()
//     }

//     if (/(y+)/.test(format)) {
//         format = format.replace(RegExp.$1, (time.getFullYear() + "")
//             .substr(4 - RegExp.$1.length));
//     }
//     for (let k in o) {
//         if (new RegExp("(" + k + ")").test(format)) {
//             format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
//         }
//     }
//     return format;
// });


