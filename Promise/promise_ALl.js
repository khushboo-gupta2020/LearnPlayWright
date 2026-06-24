// let checkAuth=Promise.resolve("Auth OK");
// let checkDB = Promise.resolve("DB OK");
// let checkcache =Promise.resolve("Cache OK");

// Promise.all([checkAuth,checkDB,checkcache]).then(function(message){
//     console.log("All promises done")
// });

Promise.all([
        Promise.resolve("OK"),
        Promise.reject("DB Down")

    ]).then(function(r){
console.log(r);
}).catch(function(r){
    console.log(r);
})