// $ $ $  $ $
//   $   $
//     $
//   $   $
// $ $ $ $ $


for(i=1;i<=5;i++){
    str='';
    for(j=1;j<=5;j++){
        if(i+j == 6 || i==j || i==1 || i==5){
            str = str +'$'
        }
        else{
            str = str + ' '
        }
    }
    console.log(str);
}