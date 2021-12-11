// 处理八小时时区转换为24小时时区
export function date24(data) {
    let date = new Date(data)
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + (date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes())
}

// 网站安全运行时间
export function runTime(data, delay) {
    var birthDay = _NewDate(data);
    var today = new Date();
    var timeold = today.getTime() - birthDay.getTime();
    var sectimeold = timeold / 1000
    var secondsold = Math.floor(sectimeold);
    var msPerDay = 24 * 60 * 60 * 1000;
    var e_daysold = timeold / msPerDay;
    var daysold = Math.floor(e_daysold);
    var e_hrsold = (daysold - e_daysold) * -24;
    var hrsold = Math.floor(e_hrsold);
    var e_minsold = (hrsold - e_hrsold) * -60;
    var minsold = Math.floor((hrsold - e_hrsold) * -60);
    var seconds = Math.floor((minsold - e_minsold) * -60).toString();
    return daysold + "天" + hrsold + "小时" + minsold + "分" + seconds + "秒"
}

function _NewDate(str) {
    str = str.split('-');
    var date = new Date();
    date.setUTCFullYear(str[0], str[1] - 1, str[2]);
    date.setUTCHours(0, 0, 0, 0);
    return date;
}