class Animal
{
constructor(name)
{
    this.name=name;
}
eat()
{
    console.log("Animal is eating");
}
sleep ()
{
    console.log("Animal is sleeping");
}
}
class Dog extends Animal
{
    constructor(name,breed)
    {
        super(name);
        this.breed=breed;
    }

    bark()
    {
        console.log(this.name +"is barking");
    }
}
let dog = new Dog("Rex","Labrador");
dog.bark();
dog.eat();
dog.sleep();
console.log(dog.breed);
console.log(dog.name);
