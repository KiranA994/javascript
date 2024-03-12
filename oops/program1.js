//  create class

class employee{
  empId
  empName
  empDesg
  empSalary

  constructor(id,ename,desg,salary) {
    this.empId = id;
    this.empName = ename;
    this.empDesg = desg;
    this.empSalary = salary;
  }

  display() {
    console.log(`employee name is ${this.empName}, 
    designation is ${this.empDesg}
    and salary is ${this.empSalary}`);
  }

}

// create objects

obj = new employee(1,'neel','ui/ux',25000);

obj.display()

obj2 = new employee(1,'maxwell','HR',25000);

obj2.display()