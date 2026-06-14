let apicall=new Promise(function(resolve,reject){
    let apiresponse=true;
    if(apiresponse)
        resolve("I am resolved");
    else
        reject("I am rejected");
});

apicall.then(function(data){
    console.log("call resolve");
    console.log(data)
}).catch(function(error){
console.log("call reject");
cosnole.log(error);
}).finally(function(){
    
console.log("I will be always executed")
});

