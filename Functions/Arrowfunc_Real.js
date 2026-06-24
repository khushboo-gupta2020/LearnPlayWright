// function validateStatusCode(statusCode)
// {
//     if(statusCode >=200 &&  statusCode <=300)
//         console.log("request is fine");
// }
//arrow function should always be called once the function is defines earlier.
//NOrmal function can be called before thedefinition



validateStatusCode =(statusCode)=>
{
     if(statusCode >=200 &&  statusCode <=300)
        console.log("request is fine");
}
validateStatusCode(200);
