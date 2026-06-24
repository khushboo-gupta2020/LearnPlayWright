async function testapi()
{
    try{
        await Promise.reject("API rejected");
    }
    catch(error){
        console.log("catch block called " + error);
    }
    finally
    {
        console.log("Finally always called");
    }
}
testapi();