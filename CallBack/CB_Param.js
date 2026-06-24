//sync call back : foreach
let bugs =["loginpage","credentialsiSuse","loginbutton"];
bugs.forEach(function(bug,i)
{
console.log("Bug#" + (i+1) +  ":"+ bug);
});

console.log("Total bugs " + bugs.length);


// function greetTester(name,callback){
//     console.log("Welcome  " +name);
//     callback();
// }
// greetTester("khushi",function(){
// console.log("Lets start testing");
// });