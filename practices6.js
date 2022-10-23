const friends = ["pabel", "rasel", "tahmid"];

const makeFunction = (friendName = "pabel", age = 12) => {
  for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    console.log(`hello  ${friend} your age is ${age} `);
  }
};

makeFunction("rasel", 15);
makeFunction();
