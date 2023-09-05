let user = {
  
name: 'John Watson',
email: 'john@example.com',
phone: '+91 99999 11111',
address: {
    adrsLine: '2144 Redwood Shores',
    city: 'Bangalore',
    pinCode: 521001
},
orders:[
    {
        oid: 101,
        item: 'shoe',
        price: 3000,
        date: '20th June, 2021'
    },
    {
        oid: 201,
        item: 'bottle',
        price: 400,
        date: '27th June, 2021'
    },

]
};

console.log("User object is: ");
console.log(user);
console.log(typeof user);


console.log("User name is: "+user.name);
console.log("Order on "+user.orders[1].date+" has a price of "+user.orders[1].price);

let dish1 = {
    dishID: 1,
    name: 'Burger',
    price: 200,
    category: 'Veg'
}

let dish2 = {
    dishID: 2,
    name: 'Pizza',
    price: 500,
    category: 'Italian'
}

dish1.price= 250;
dish2.price=410;
console.log("Dis1 is: "+dish1);
console.log(dish1);
console.log("Dis2 is: "+dish2);
console.log(dish2);