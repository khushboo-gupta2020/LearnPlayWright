function apicall(name)
{
    return new Promise(function(resolve)
{
setTimeout(function()
{
    resolve(name,"200OK")
},2000);
})
    
}

async function seq()
{
    console.log("starting the test");
    let start = Date.now();
    let r = await apicall("login");
    console.log(r);
    let r1 = await apicall("dasboard");
    console.log(r1);
    let r2 = await apicall("report");
    console.log(r2);
    let r3 = await apicall("logout");
    console.log(r3);


}
seq();