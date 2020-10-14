

class SavingsAccount extends Account {

    /**
     * 
     *  In addition to the attributes of Account, SavingsAccount should
have an interest variable, which is set in the constructor and has a getter and a setter mehtod. It
should also have an addInterest() method which deposits the interest amount into the
account. The calculation for the amount is balance * interest / 100 . Be sure to also overwrite
the toString() method
     * 
     * @param {number} number account number 
     * @param {number} interest  is the interest rate
     */
    constructor(number,interest){
        super(number);
        this._interest = interest;
    }
    getInterest(){ 
        return this.interest;
    }
    setInterest(newInterest) {
        this._interest = newInterest;
    }
    addInterest(){
        this._balance = this._balance * this._interest / 100;
    }
    toString(){
        return `Savings account number ${this.number}'s balance: ${this._balance}`
    }
}

let newSavings = new SavingsAccount(1234, 3);

newSavings.deposit(1000);

console.log(newSavings.getBalance());