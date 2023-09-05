
/*
PromoCode: JUMBO
30% OFF on the amount | amount must be greater than 150


PromoCode BINGO
50% on amount greater than 300 upto 200
*/

let amount = 500;
let PromoCode = "BINGO";

if(PromoCode == "JUMBO" && amount > 150){
    let discount = 0.30*amount;
    amount -= discount;
    console.log("Discount is: "+discount);
    console.log("Promo Code [JUMBO] Applied. Please Pay: "+amount);
}else if(PromoCode == "BINGO" && amount > 300){

    let discount = 0.50*amount;

    if(discount > 200){
        discount = 200;
    }
    amount -= discount;
    console.log("Discount is: "+discount);
    console.log("Promo Code [BINGO] Applied. Please Pay: "+amount)
}else{
    console.log("Invalid Promo Code or Amount Insufficient");
}