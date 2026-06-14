function cafe(item,callyouwhenReady)
{
    console.log("Searchig table 1");
    console.log("Searchig table 2");
    console.log("Searchig table 4");
    console.log("Searchig table 3");
    console.log(item)
    callyouwhenReady();
}
// cafe("Momos",()=>{
// console.log("calling 98765431");

//     });
 function callyouwhenReady()
 {
    console.log("calling u as the table is ready");
 }
  
 cafe("burger",callyouwhenReady);
