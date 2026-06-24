class Student
{
    constructor(student_name,age,phoneno)
    {
        this.student_name =student_name;
        this.age=age;
        this.phoneno=phoneno;
    }
    static batchName="Playwright2x";
    static mentorName="PrramodSIr";
}

let p1= new Student("Khush",40,"9876543212");
let p2= new Student("Shivani",37,"9878877887");
console.log(p1);
console.log(Student.batchName);
console.log(p1.batchName);//static variables can be accessed directly by clasname not by object