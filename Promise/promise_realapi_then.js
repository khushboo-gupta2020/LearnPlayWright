let api=new Promise(function(resolve,reject){
resolve({
    status:200,body:"User json"
})
});

api.then(function(response)
{
    console.log(response);
    console.log(response.status);
});