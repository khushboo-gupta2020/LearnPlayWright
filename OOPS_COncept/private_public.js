class credentials
{
    #apikey;
    user;
    constructor(apikey,user){
        this.#apikey =apikey;
        this.user=user;
    }
    getauth()
    {
        console.log("Bearer "+ this.#apikey + " for user : " + this.user);
    }
}

let cred = new credentials("kuhgsisalxzx","khus");
cred.getauth();
console.log(cred.user);
//cred.#apikey not possile as apikey is private
