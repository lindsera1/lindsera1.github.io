class CheckingsAccount extends Account {
    /**
     * In addition to the attributes of an
Account, it should have an overdraft limit variable. The overdraft amount indicates how much
a person is allowed to temporarily withdraw beyond what they have. In other words, it’s the
amount that an account is allowed to go into the red (negative balance). Be sure to set this value
in the constructor and create a getter and a setter for it. Also make sure that you override the
withdraw(amount) method and the toString() method.
     */
    constructor(number, od_limit){
        super(number);
        this.od_limit = od_limit;
    }
    getOd_Limit(){
        return this.od_limit;
    }
    setOd_Limit(new_limit){
        this.od_limit = new_limit;
    }
    Withdraw(amount){
        if(amount > 0){
            if(this.balance - amount >= od_limit){
                this.balance -= amount;
            } else if (this.balance - amount < od_limit){
                throw Error("Over your draft limit!");
            }
        } else {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
    }
    toString() {
        return `Checkings account number ${this.number}'s balance: ${this._balance}`;
    }
}

let newCheckings2 = new CheckingsAccount(1357, -50);

newCheckings2.deposit(2000);

console.log(newCheckings2.toString());
