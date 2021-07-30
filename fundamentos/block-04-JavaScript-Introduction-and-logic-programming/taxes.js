let productCost = 300
let sellingPrice = 700
let profit = 0
if (productCost < 0 || sellingPrice < 0 ) {
    console.log('Prices are not profitable')
}
else{

let taxedProduct = productCost + (productCost*0.2)
profit  = (sellingPrice - taxedProduct) * 1000

console.log("Your profit was $" + profit + " Dollars")

}