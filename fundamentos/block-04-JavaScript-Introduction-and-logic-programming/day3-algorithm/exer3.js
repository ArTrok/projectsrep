let n = 5

let sy = "*"
let l = ""
let pos = n

for (let lines = 0; lines < n; lines += 1) {
    for (let index = 0; index <= n; index += 1) {
        if (index < pos) {
            l = l + " "
        } else {
            l = l + sy
        }
    }
    console.log(l)
    l = ''
    pos -= 1
}