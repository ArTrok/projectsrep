let angle1 = 100
let angle2 = 30
let angle3 = 50

let angles = angle1 + angle2 + angle3
let positive = angle3 > 0 && angle2 > 0 && angle1 > 0

if (positive) {
    if ( angles == 180) {
        console.log('true')
    } else {
        console.log('false')
    }
} else {
    console.log('Invalid number inserted')
}