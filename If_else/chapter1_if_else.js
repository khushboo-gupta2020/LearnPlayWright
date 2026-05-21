let statuscode ="300";
if(statuscode >=200 && statuscode <=299)
console.log("Success");
else if(statuscode >=300 && statuscode <=399)
console.log("Redirection");
else if(statuscode >=400 && statuscode <=499)
console.log("Client Error");
else if(statuscode >=500 && statuscode <=599)
console.log("Server Error");
else
{
console.log("Invalid");

}