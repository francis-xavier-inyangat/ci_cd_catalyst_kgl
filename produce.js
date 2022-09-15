function producePriceCalculator(unitPrice, quantity) {
    if(quantity < 1000){
        return 0;
    }else{
    finalPrice = unitPrice * quantity
        return finalPrice
    }
   
}


module.exports = producePriceCalculator;
