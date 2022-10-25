// default parameter
const friends = ["pabel", "rasel", "tahmid"];

const makeFunction = (friendName = "pabel", age = 12) => {
  for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    // console.log(`hello  ${friend} your age is ${age} `);
  }
};

makeFunction("rasel", 15);
makeFunction();

// practice Map
const ruhul = new Map();
ruhul.set("firstName", "ruhulamin");
ruhul.set("lastName", "mahfuj");
ruhul.get("firstName");
ruhul.has("lastName");
ruhul.delete("lastName");
// console.log(ruhul);

ruhul.forEach((key, value) => {
  // console.log(`here is the key ${key} and ${value}`);
});

// practice Class
class FirstClass {
  constructor(firstName, job, age) {
    (this.name = firstName), (this.job = job), (this.age = age);
  }

  dateOfBirth() {
    console.log(`your name is ${this.name} and age is ${2022 - this.age}`);
  }
}

const ruhulamin = new FirstClass("ruhul amin", "student", 2001);
ruhulamin.dateOfBirth();
// console.log(ruhulamin);

// practice Class inheritance
class TeacherClass extends FirstClass {
  constructor(firstName, job, age, subject, father) {
    super(firstName, job, age);
    (this.subject = subject), (this.father = father);
  }

  dateOfBirth() {
    console.log(
      `your teacher name is ${this.name}  and age is ${2022 - this.age}`
    );
  }
}

const mahfuj = new TeacherClass("mahfuj", "teacher", 1996, "math", "abba");
mahfuj.dateOfBirth();
console.log(mahfuj);

