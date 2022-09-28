function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student1 = new Student("Alex", "male", 30);
let student2 = new Student("Olya", "female", 35);
let student3 = new Student("Lena", "female", 25);
let student4 = new Student("Vova", "male", 19);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
      this.marks = [];
      this.marks.push(mark);
  } else {
      this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
      this.marks = [];
      for (let arg of marks) {
        this.marks.push(arg);
      }
  } else {
      for (let arg of marks) {
        this.marks.push(arg);
      }
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  let length = this.marks.length;
  for (let i = 0; i < length; i++) {
    sum += this.marks[i];
  }
  return sum / length;
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;

  delete this.marks;
  delete this.subject;
}


