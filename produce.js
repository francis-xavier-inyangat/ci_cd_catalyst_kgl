function producePriceCalculator(unitPrice, quantity) {
    if(quantity < 1000){
        return false;
    }else{
    finalPrice = unitPrice * quantity
        return finalPrice
    }
   
}


module.exports = producePriceCalculator;
