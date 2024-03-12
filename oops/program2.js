
class student{
    rollNo
    name
    gender
    age
  
    constructor(no,sname,gender,age) {
      this.rollNo = no;
      this.name = sname;
      this.gender = gender;
      this.age = age;
      this.display();
    }
  
    display() {
      console.log(`student name is ${this.name}, 
      roll number is ${this.rollNo}
      and age is ${this.age}`);
    }
  
  }
  
  
  obj = new student(1,'neel','male',10);
  
//   obj.display()
  
  obj2 = new student(2,'geetha','female',12);
  
//   obj2.display()