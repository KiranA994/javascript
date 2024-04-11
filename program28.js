
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
    for(j=4;j>=i;j--){
        str = str + ' ';
    }
    for(col=1;col<=i; col++){
        str = str + ' *';
    }
    console.log(str);
}

for(i=1;i<=4;i++){   
    stri = '';
    for(j=1;j<=i;j++){ 
        stri = stri + ' '; 
    }
    for(col=4;col>=i; col--){
        stri = stri + ' *';
    }
    console.log(stri);
}
