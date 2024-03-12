class A{
    methoda(){
   console.log('inside class A');
    }
}

class B extends A{
    methoda(){
   console.log('inside class B');
    }
    
    methoda(){
   console.log('inside class B and second function');
    }
}


obj = new B()

obj.methoda()