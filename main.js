function Account(name, password, balance, iban) {
    this.name = name;
    this.password = password;
    this.balance = balance;
    this.iban = iban;
};

var account1 = new Account("Panos", 1234, 1000, "GR 1234 5678 910");
var account2 = new Account("Kostas", 4321, 2000, "GR 1234 4321 911");

Account.prototype.depose = function (amount) {
    if (this.balance = this.balance + amount) {
        return this.name + " your balance is " + this.balance;
    }
    else {
        (this.amount < 0 || typeof this.amount !== "number" || this.amount > this.balance)
        return "Transaction can not be completed"
    };
};


    Account.prototype.withdraw = function (amount) {
        if (this.balance - amount >= 0) {
            this.balance = this.balance - amount;
            return this.name + " your balance is " + this.balance;
        }
        
        else {
            return "The transaction can not be completed"
        };
    };



    Account.prototype.getBalance = function () {
        return this.name + " your balance is " + this.balance;
    };