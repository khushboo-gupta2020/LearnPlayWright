 function getToken()
{
   return Promise.resolve("123");

}
async  function run(){
   let token = await getToken();
   console.log(token);
}
run();