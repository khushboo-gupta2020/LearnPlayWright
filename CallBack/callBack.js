function print()
{
    console.log("Normal print function")
}

function placeOrder(Item,callbackme)
{
    console.log("This is a call back function");
    callbackme();
}

//first way
placeOrder("burger",print);

//second way
placeOrder("biryani",function()
{
    console.log ("Normal print function");
   
});
//Third way
placeOrder("pizza",()=>{
     console.log ("Normal printout function");
})