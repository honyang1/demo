var Enumerable = require('linq');
/*
    调用示例
    this.$app.Com.IsNull(a)
*/

const com = {
    isNull: function (str) { //是否为空
        if (str === null) return true;
        if (str === undefined) return true;
        if (str === "null") return true;
        if (str.length === 0) return true;
        if (/^\s*$/i.test(str)) return true;
        return false;
    },
    isCard: function (str) { //身份证 是否合法
        var Card = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (!Card.test(str)) return true;
        return false;
    },
    toFixed: function (num, fix) { //保留几位小数，num值，fix 10标识1位
        return Math.round(num * fix) / fix;
    },
    getQueryString: function (name) { //获取地址栏参数
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r !== null) return unescape(r[2]);
        return null;
    },
    objClone: function (jsonObj) { // JSON 克隆  jsonObj json对象  return 新的json对象
        let buf = [];
        if (jsonObj instanceof Array) {
            buf = []
            let i = jsonObj.length
            while (i--) {
                // eslint-disable-next-line no-undef
                buf[i] = objClone(jsonObj[i])
            }
            return buf
        } else if (jsonObj instanceof Object) {
            buf = {}
            for (let k in jsonObj) {
                // eslint-disable-next-line no-undef
                buf[k] = objClone(jsonObj[k])
            }
            return buf
        } else {
            return jsonObj
        }

    },
    concat: function (json) { //深拷贝
        return json.concat([]);
    },
    sliceStr: function (str, sliceLen) { //截断字符串
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
    indexOfArray: function (array, val) { //查找参数在数组内的下标
        for (var i = 0; i < array.length; i++) {
            if (array[i] === val) { return i; }
        }
        return -1;
    },
    removeArray: function (array, val) { //删除数组内包含的该参数
        var index = array.indexOf(val);
        if (index > -1) { array.splice(index, 1); }
    },
    timeStamp: function (StatusMinute) { //分钟转换成天小时分钟
        var day = parseInt(StatusMinute / 60 / 24);
        var hour = parseInt(StatusMinute / 60 % 24);
        var min = parseInt(StatusMinute % 60);
        return [day, hour, min];
    },
    currentTime: function (datetime, format) { //日期格式化 yyyy-mm-dd
        if (!datetime) {
            return '';
        } else {
            datetime = new Date(datetime);
        }
        return datetime.FormatDataTime(format);
    },
    compareDate: function (d1, d2) { //2个string 时间对比
        // eslint-disable-next-line no-useless-escape
        return (new Date(d1.replace(/-/g, "\/"))) > (new Date(d2.replace(/-/g, "\/")));
    },
    dateDiff: function (sDate1, sDate2) { //计算天数差的函数    //sDate1和sDate2是2006-12-18格式  
        var aDate, oDate1, oDate2, iDays;
        aDate = sDate1.split("-");
        oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]); //转换为12-18-2006格式  
        aDate = sDate2.split("-");
        oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);
        iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); //把相差的毫秒数转换为天数  
        return iDays;
    },
    timeDiff: function (date1, date2) { //data1 开始时间   data2 结束时间  newDate()
        var date3 = date2.getTime() - date1.getTime() //时间差的毫秒数      
        //计算出相差天数
        var iDays = Math.floor(date3 / (24 * 3600 * 1000))
        var leave1 = date3 % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
        var iHours = Math.floor(leave1 / (3600 * 1000))
        //计算相差分钟数
        var leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
        var iMinutes = Math.floor(leave2 / (60 * 1000))
        //计算相差秒数
        var leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
        var iSeconds = Math.round(leave3 / 1000)
        return { day: iDays, hours: iHours, minutes: iMinutes, seconds: iSeconds };
    },
    toMonthZero: function (month) { //月份追加0
        return month < 10 ? '0' + month : month;
    },
    onmouse: function (div1) { //div 拖动
        div1.onmousedown = function (ev) {
            var oevent = ev || event;
            var distanceX = oevent.clientX - div1.offsetLeft;
            var distanceY = oevent.clientY - div1.offsetTop;
            document.onmousemove = function (ev) {
                var oevent = ev || event;
                div1.style.left = oevent.clientX - distanceX + 'px';
                div1.style.top = oevent.clientY - distanceY + 'px';
            };
            document.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        }
    },
    compreObj: function (obj1, obj2) { //对比2个json 是否相等
        var flag = true;

        function compre(obj1, obj2) {
            if (Object.keys(obj1).length != Object.keys(obj2).length) {
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
    timeToString: function (obj) {
        obj.year > 0 ?
            obj.year + "年" :
            obj.month > 0 ?
                obj.month + "月" :
                obj.day > 0 ?
                    obj.day + "天" :
                    obj.hour > 0 ?
                        obj.hour + "小时" :
                        obj.min > 0 ?
                            obj.min + "分钟" :
                            "";
    }
}

const json = {
    toWhere: function (Json, where) { //查询
        return Enumerable.from(Json).where(where).toArray();
    },
    toSelect: function (Json, evn) { //select查询
        // eslint-disable-next-line no-undef
        return Enumerable.from(Json).select(evn).toArray();

    },
    toOrderBy: function (Json, where, type) { // type 0 为升序  1为降序
        if (type === 0)
            return Enumerable.from(Json).orderBy(where).toArray();
        return Enumerable.from(Json).orderByDescending(where).toArray();
    },
    toDistinct: function (Json, where) { //去重
        return Enumerable.from(Json).distinct(where).toArray();
    },
    toFirstOrDefault: function (Json, where) { //取查询到条件的第一条数据
        return Enumerable.from(Json).firstOrDefault(where);
    },
    toLastOrDefault: function (Json, where) { //取查询到条件的最后一条数据
        return Enumerable.from(Json).lastOrDefault(where);
    },
    toExcept: function (Json1, Json2) { //取差集
        return Enumerable.from(Json1).except(Json2).toArray();
    },
    toIntersect: function (Json1, Json2) { //取交集
        return Enumerable.from(Json1).intersect(Json2).toArray();
    },
    toUnion: function (Json1, Json2) { //合并
        return Enumerable.from(Json1).union(Json2).toArray();
    }
}

const session = {
    get: function (key) { //获取session
        return JSON.parse(sessionStorage.getItem(key));
    },
    set: function (key, value) { //设置session
        sessionStorage.setItem(key, JSON.stringify(value));
    },
    remove: function (key) { //删除session
        sessionStorage.removeItem(key);
    },
    getToken() {
        return document.cookie.split('=')[1];
    }
}

export {
    com,
    json,
    session
}

Date.prototype.FormatDataTime = function (format) {
    /*
     * eg:format="YYYY-MM-dd HH:mm:ss";
     */
    if (!format) { format = "yyyy-MM-dd HH:mm:ss"; }
    var o = {
        "M+": this.getMonth() + 1, // month
        "d+": this.getDate(), // day
        "H+": this.getHours(), // hour
        "m+": this.getMinutes(), // minute
        "s+": this.getSeconds(), // second
        "q+": Math.floor((this.getMonth() + 3) / 3), // quarter
        "S": this.getMilliseconds()
        // millisecond
    }
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "")
            .substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}