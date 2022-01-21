// const friends = ["jenn", "morgan", "justin"]

// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i])
// }

function sum(x, y) {
    const sum = x+y;
    if (sum >= 50 && sum <= 80) {
        return 65;
      }
      return 80;
    }
    
    console.log(sum(30,20));
    console.log(sum(90,80));