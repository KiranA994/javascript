class Bank{
    accountDetails={
        1000:{acno:1000, username: 'userone', 
        password:'userone',balance:500},
        1001:{acno:1001, username: 'usertwo', 
        password:'usertwo',balance:500},
        1002:{acno:1002, username: 'userthree', 
        password:'userthree',balance:500},
        1003:{acno:1003, username: 'userfour', 
        password:'userfour',balance:500}
    }


    // method to validate the account

    validate(accountnumber){
        return accountnumber in this.accountDetails?true:false
    }
    // method to authenticate the account

    authenticateAccount(acn,pswd){
        if(this.validate(acn)){
            if(this.accountDetails[acn].password == pswd){
                console.log('Authentication success');
            }
            else{
                console.log('Invalid password');
            }
        }
        else{
            console.log('Invalid account number');
        }
    }
    // method to check the balance

    checkBalance(acn,pswd){
        if(this.validate(acn)){
            if(this.accountDetails[acn].password == pswd){
                console.log(this.accountDetails[acn].balance);
            }
            else{
                console.log('Invalid password');
            }
        }
        else{
            console.log('Invalid account number');
        }
    }
    // method to transfer the money 

    transferMoney(fromacno,toacno,frompaswd,amount){
        if(this.validate(fromacno) && this.validate(toacno)){
            if(this.accountDetails[fromacno].password == frompaswd){
                if(this.accountDetails[fromacno].balance >= amount){
                    console.log(`Balance of fromacno ${this.accountDetails[fromacno].balance}
                    and Balance of toacno ${this.accountDetails[toacno].balance} before money transfer`);
                    this.accountDetails[fromacno].balance -= amount;
                    this.accountDetails[toacno].balance += amount;
                    console.log(`Balance of fromacno ${this.accountDetails[fromacno].balance}
                    and Balance of toacno ${this.accountDetails[toacno].balance} after money transfer`);
                }
                else{
                    console.log('Insufficient Balance');
                }
            }
            else{
                console.log('Invalid password');
            }
        }
        else{
            console.log('Invalid account number');
        }
    }
}

obj = new Bank()

console.log(obj.validate(1000)?'acount is valid': 'no such account');

obj.authenticateAccount(1001,'hai');

obj.checkBalance(1000,'hai')

obj.transferMoney(1002,1000,'userthree',100)