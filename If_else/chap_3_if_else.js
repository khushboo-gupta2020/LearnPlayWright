let bugSeverity ="1";
if(bugSeverity ==9 ||  bugSeverity ==10)
console.log("severity : Critical block release");
else if(bugSeverity ==7 ||  bugSeverity ==8)
console.log("severity : High");
else if(bugSeverity == 4||  bugSeverity ==5  ||  bugSeverity ==6)
console.log("severity : Medium");
else if(bugSeverity == 1||  bugSeverity ==2  ||  bugSeverity ==63)
console.log("severity : Low")
else
Console.log("Invalid Score");