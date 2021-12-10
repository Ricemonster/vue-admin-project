// 处理八小时时区转换为24小时时区
export function date24(data) {
    let date = new Date(data)
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + (date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes())
}