export function timeFormat(time: number) {
    let mm = Math.floor(time / (60 * 1000))
    time = time % (60 * 1000)
    let ss = Math.floor(time / (1000))
    time = Math.floor(time % (1000) / 10)
    return `${pad(mm, 2)}:${pad(ss, 2)}:${pad(time, 2)}`
}

export function pad(num: number, size: number) {
    var s = String(num);
    while (s.length < (size || 2)) { s = "0" + s; }
    return s;
}