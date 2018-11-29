// CODE here for your Lambda Classes

// ======= Classes =======

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }

  speak() {
    console.log(
      `Hello my name is ${this.name}, and I am from ${this.location}.`
    );
  }
}

class Instructor extends Person {
  constructor(instructAttrbs) {
    super(instructAttrbs);
    this.speciality = instructAttrbs.speciality;
    this.favLanguage = instructAttrbs.favLanguage;
    this.catchPhrase = instructAttrbs.catchPhrase;
  }

  demo(string) {
    console.log(`Today we are learning about ${string}.`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}.`);
  }
}

class Student extends Person {
  constructor(studentAttrbs) {
    super(studentAttrbs);
    this.previousBackground = studentAttrbs.previousBackground;
    this.className = studentAttrbs.className;
    this.favSubjects = studentAttrbs.favSubjects;
  }

  listsSubjects() {
    this.favSubjects.forEach(element => console.log(element));
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun spring challenge on ${subject}.`);
  }
}

class PM extends Instructor {
  constructor(PMAttrbs) {
    super(PMAttrbs);
    this.gradClassName = PMAttrbs.gradClassName;
    this.favInstructor = PMAttrbs.favInstructor;
  }

  standUp(channel) {
    console.log(
      `${this.name} announces to the ${channel}, @channel standy times!`
    ); // Alex, the homework said "standy" time... I thought it was hilarious, so I kept it. Haha
  }

  debugsCode(studentObject, subject) {
    console.log(
      `${this.name} debugs ${studentObject.name}'s code on ${subject}.`
    );
  }
}

// ======= Created Objects =======

// Objects from Person Class

const koby = new Person({
  name: "Koby",
  age: 12,
  location: "Da Bay",
  gender: "male"
});

const kate = new Person({
  name: "Kate",
  age: 20,
  location: "Chi-Town",
  gender: "female"
});

koby.speak();
kate.speak();

// Objects from Instructor Class

const josh = new Instructor({
  name: "Josh",
  age: 35,
  location: "Lambda School",
  gender: "male",
  specialty: "front-end technology",
  favLanguage: "JavaScript",
  catchPhrase: "Isn't that awesome, guys?"
});

const dustin = new Instructor({
  name: "Dustin",
  age: 32,
  location: "Lambda School",
  gender: "male",
  specialty: "front-end technology",
  favLanguage: "JavaScript",
  catchPhrase: "Five points for the Gryffindor house of your choice"
});

josh.demo("Classes");
dustin.grade(kate, "computer science");

// Objects from Student Class

const nathan = new Student({
  name: "Nathan",
  age: 31,
  location: "Napa Valley",
  gender: "male",
  previousBackground: "healthcare business",
  className: "FSW16",
  favSubjects: ["react", "html", "css", "javascript"]
});

const christine = new Student({
  name: "Christine",
  age: 26,
  location: "New York City",
  gender: "female",
  previousBackground: "photography",
  className: "CS15",
  favSubjects: ["javascript", "python", "golang", "c++"]
});

nathan.speak();
nathan.listsSubjects();
christine.PRAssignment("JavaScript-IV");
christine.sprintChallenge("Reponsive-II");

// Objects from PM Class
