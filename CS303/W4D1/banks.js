class Bank {
    /**
     * ) Next create a Bank class, a Bank object should have an array of Account objects, and have
addAccount(), addSavingsAccount(interest),
addCheckingAccount(overdraft) methods each of which returns the number of the
created account. Also add a closeAccount(number) method that closes (removes from the 
array) the account with that number, and a accountReport() method that returns a String
with each account on its own line. Use a static nextNumber variable on the Bank class to know
what the number for the next account will be. Create Mocha / Chai tests to ensure that
everything is working.
     */

     constructor(){
         this.accounts = [];
     }
     addCheckingsAccount(number, od_limit){
         let checkings = new CheckingsAccount(number, od_limit);
         this.accounts.append(checkings);
         return `Checkings account ${number} was added.`
     }

     addSavingsAccount(number, interest){
         let savings = new SavingsAccount(number, interest);
         this.accounts.append(savings);
         return `Savings account ${number} was added.`
     }
     addAccount(number){
         let account = new Account(number);
         this.accounts.append(account);
         return `Account ${number} was added`
     }
     closeAccount(number){
         for(let element of this.accounts){
             if (element.getNumber() === number){
                 let index = this.accounts.indexOf(element);
                 this.accounts.splice(index,1);
             }
         }
     }
     accountReport(){
         for(let element of this.accounts){
             console.log(`${element.toString()}\n`);
        }
    }
}

let newBank = new Bank();

newBank.addCheckingsAccount(44444, -75);
newBank.addSavingsAccount(55555, 2);
newBank.addAccount(123456);
newBank.accountReport();