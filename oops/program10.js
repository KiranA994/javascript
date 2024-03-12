console.log('calculation');

exp = '*10/2*5';

try{
    result = eval(exp);

    console.log(`result is ${result}`);
}
// eval(exp) - It is a pre defined method which evaluates the arithmetic expressions.
catch {
    console.log('expression have some errors');
}

finally{
    console.log('Task ended');
}