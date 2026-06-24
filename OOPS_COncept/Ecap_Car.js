class Car{
    #engine;
    name;
    constructor(name,eng)
    {
        this.name=name;
        this.#engine=eng;
    }
    getEngine()
{
    return this.#engine;
}
setEngine(name)
{
this.#engine =name;
}
}
let tesla = new Car("Tesla","V8");
console.log(tesla.getEngine());
tesla.setEngine("v9");
console.log(tesla.getEngine());
