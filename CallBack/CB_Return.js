
function calculate(a,b,operation)
{
    return operation(a,b);
}

let sum = calculate(4,5,function(a,b)
 {
    return a+b
});
console.log(sum);