class PlaywrightBatch
{
    constructor(student_name)
    {
      this.student_name =student_name;
      console.log("Student name is " + this.student_name);
    }
    static batch_name="Playwright2x";
    static Mentor_name ="Prrammod sir";
   
}
let studName =new PlaywrightBatch("Sohan");
let studName1 =new PlaywrightBatch("Mohan");
let studName2 =new PlaywrightBatch("Rohan");
let studName3 =new PlaywrightBatch("Dohan");
let studName4 =new PlaywrightBatch("Tohan");
let studName5 =new PlaywrightBatch("Hohan");
let studName6 =new PlaywrightBatch("Kohan");
console.log(PlaywrightBatch.batch_name);