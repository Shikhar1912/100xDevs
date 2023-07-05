/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const ansobj = {};
  // console.log(transactions.length);
  for (let i = 0; i < transactions.length; i++){
    if (transactions[i].category in ansobj) {
      ansobj[transactions[i].category] += transactions[i].price;
    }
    else {
      ansobj[transactions[i].category] = transactions[i].price;
    }
  }
  const arr = [];
  for (let key of Object.keys(ansobj)) {
    arr.push({category:key , totalSpent: ansobj[key]});
  }
  // console.log(ansobj);
  // console.log(arr);
  return arr;
  
}

// calculateTotalSpentByCategory([
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: "Food",
//     itemName: "Pizza",
//   },
//   {
//     id: 2,
//     timestamp: 1656105600000,
//     price: 20,
//     category: "Food",
//     itemName: "Burger",
//   },
//   {
//     id: 3,
//     timestamp: 1656134400000,
//     price: 30,
//     category: "Food",
//     itemName: "Sushi",
//   },
// ]);

module.exports = calculateTotalSpentByCategory;
