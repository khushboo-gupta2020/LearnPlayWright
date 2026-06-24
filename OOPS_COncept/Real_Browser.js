

class testCase
{
    constructor(name,status,priority)
    {
        this.name=name;
        this.status =status;
        this.priority= priority;
    }

    display()
    {
        console.log("Tcname ::: " + this.name +" with priority as "+ this.priority +" is " + this.status);

    }
}
let  FstTc = new testCase("Login","Pass","high");
let stc = new testCase("Register","Low","Fail");
FstTc.display();
stc.display();