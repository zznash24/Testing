// const friends = ["jenn", "morgan", "justin"]

// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i])
// }

// function sum(x, y) {
//     const sum = x+y;
//     if (sum >= 50 && sum <= 80) {
//         return 65;
//       }
//       return 80;
//     }
    
//     console.log(sum(30,20));
//     console.log(sum(90,80));

// let zach = [
//     {
//         account_type: "checking",
//         account_type: "savings",
//         balance: "1000",
     
//     }
// ]

// let account = {
//     balance: 100,
//     accountType: 'checking',
// }

// class BankAccount {
//     constructor(intial_balance, account_type){
//         this.balance = intial_balance;
//         this.accountType = account_type;
//     }
// }
function isVowel(letter) {
let vowel = [`a`, `e`, `i`, `o`, `u`, `y`]
    if(vowel.includes(letter)){
        return "true"
    }
    else {
        return "false"
    }



}

console.log(isVowel("a")) // true  
console.log(isVowel("c")) // false
console.log(isVowel("e")) // true 