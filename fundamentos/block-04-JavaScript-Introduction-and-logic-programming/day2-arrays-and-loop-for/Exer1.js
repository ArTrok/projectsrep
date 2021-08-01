let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers)
let result = 0
for (let c = 0; c < numbers.length; c+=1) {
    result = result + numbers[c]
}
console.log(result)

let average = result/numbers.length

console.log(average)

if (average > 20) {
    console.log("Value is greater than 20")
} else {
    console.log("Value is equal or less than 20")
}
let odds = []
let greater = numbers[0]


for (let a = 0; a < numbers.length; a += 1) {
    if (numbers[a] > greater) {
        greater = numbers[a]
    }
    }
console.log("greater is", greater)

for (let a = 0; a < numbers.length; a += 1) {
      if (numbers[a]%2 !== 0) {
        odds.push(numbers[a])
    }

}
if (odds.length === 0) {
    console.log('No odd number encountered')
} else {
    console.log("There are", odds.length, 'odd numbers')
}

let smaller = numbers[0]

for (let a = 0; a < numbers.length; a += 1) {
    if (numbers[a] < smaller) {
        smaller = numbers[a]
    }
    }
console.log("Smallest number is", smaller)    

let array25 = []
for (let tick = 1; tick <= 25; tick += 1) {
    array25.push(tick)
}
console.log(array25)

let division = []

for (let tock = 0; tock < array25.length; tock += 1) {
    division.push(array25[tock]/2) 
}
console.log(division)
