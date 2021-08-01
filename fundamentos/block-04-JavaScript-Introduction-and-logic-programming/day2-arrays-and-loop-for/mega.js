let mega = []

for (let count = 0; count < 6; count += 1) {
    let random = Math.floor(Math.random()*60+1);
    mega.push(random)  
}

console.log(mega)

let game1 = [42,60,28,33,1,17]
let game2 = [32,14,16,57,6,28]
let game3 = [55,38,1,43,44,50]
let games = [game1,game2,game3]

console.table(games)



for (let gamesIndex = 0; gamesIndex < games.length; gamesIndex += 1) {
    let hits = 0
    let gameN = games[gamesIndex]
    for (let counter = 0; counter < gameN.length; counter += 1) {
        let currentN = mega[counter]
        for (let count = 0; count < mega.length; count += 1) {
            if (currentN === gameN[count]) {
                hits += 1
            }
        }
    }
    console.log("You have hit " + hits + " times")    
}
