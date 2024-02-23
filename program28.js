
//    *   
//   * *   
//  * * *  
// * * * *

for(i=1;i<=4;i++){
    str = '';
    for(j=4;j>=i;j--){
        str = str + ' ';
    }
    for(col=1;col<=i; col++){
        str = str + ' *';
    }
    console.log(str);
}

console.log('-----------------------------------');

//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * * 
//    * *
//     *

for(i=1;i<=5;i++){
    str = '';
    for(j=5;j>=i;j--){
        str = str + ' ';
    }
    for(col=1;col<=i; col++){
        str = str + ' *';
    }
    console.log(str);
}

for(i=4;i>=1;i--){   
    str = '';
    for(j=1;j<4;j++){ 
        str = str + ' '; 
    }
    for(col=1;col<=i; col++){
        str = str + '* ';
    }
    console.log(str);
}
