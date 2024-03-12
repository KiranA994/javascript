class A{
    n1
    methoda(){
     console.log('inside first method');
   }

   methoda(n){
    this.n1 = n;
    console.log('inside second method and the argument passed is',this.n1);

  }
}

obj = new A()
obj.methoda()