async function interviewcall()
{
    console.log("Helo interview");
    return "Hi QA!"
}

interviewcall().then(function(msg)
{
    console.log(msg);
})