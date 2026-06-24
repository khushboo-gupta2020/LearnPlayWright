class ICICI 
{
    #balance;
    name;
    constructor(name,balance)
    {
        this.name=name;
        this.#balance=balance;
    }
    getBalance()
    {
        return this.#balance;
    }

    setbalance(balance,isCashier)
    {
        if(isCashier)
        this.#balance=balance;
    else
        console.log("not allowed");
    }
}

let khush = new ICICI("Khush",500);
console.log(khush.getBalance());
khush.setbalance(500,false);
console.log(khush.getBalance());

let Shrinika = new ICICI("Khush",500);
console.log(Shrinika.getBalance());
Shrinika.setbalance(10000,true);
console.log(Shrinika.getBalance());

