$(document).ready(function () {
    let isJianshu = location.hostname === 'www.jianshu.com'
    if (!isJianshu) return;
    // 定时刷新  等待广告加载完成后进行清除 会出现问题：最后一个广告加载慢，总是删不掉
    intervalCheckAd()
    // 1s后再遍历一次  解决首次遍历完成后 有广告dom才加载完成的问题
    let timer = setTimeout(() => {
        intervalCheckAd()
        clearTimeout(timer)
        timer = null;
    }, 1000);
})
function intervalCheckAd() {
    let intervalTimer = setInterval(() => {
        const element = $("body").children().eq(-1)
        if (element[0].nodeName === 'DIV') {
            removeAd()
            clearInterval(intervalTimer);
            intervalTimer = null;
        }
    }, 50);
}
function removeAd() {
    for (let index = 1; index < 100; index++) {
        const element = $("body").children('div').eq(-1);
        if (element[0].id == '__next') break;
        element.remove();
    }
}