class Calculator
{
constructor(firstNum,SecondNum)
{
this.firstNum = firstNum;
this.SecondNum=SecondNum;
}
    subtraction()
    {
        console.log(this.firstNum -this.SecondNum);
    }
    addition()
    {
         console.log(this.firstNum +this.SecondNum);
    }
    division()
    {
        console.log( this.firstNum /this.SecondNum);
    }
    modulus()
    {
        console.log( this.firstNum %this.SecondNum);
    }
}
let res = new Calculator(5,5);
res.addition();
res.subtraction();
res.modulus();
res.division();
