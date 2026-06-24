class Bank{
    #balance =0;
    deposit(amount)
    {
        this.#balance =+amount;
       return this.#balance;
    }

    getbalance()
    {
        return this.#balance;
    }
}
let b1= new Bank();
console.log(b1.deposit(100));
console.log(b1.getbalance());

