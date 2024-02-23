function parent(){
    const parent = 'parent';
    console.log(`variable inside parent function is  : ${parent}`);
    console.log(`variable inside child function is  : ${childVariable}`);

    function child(){
        const childVariable = 'child';
        console.log(`variable inside parent function is  : ${parent}`);
        console.log(`variable inside child function is  : ${childVariable}`);
    }

    child()
}

parent()