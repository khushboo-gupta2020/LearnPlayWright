class browser
{
    constructor(name)
    {
        this.name = name;
        this.isopen=true;
    }
    display()
    {
        console.log("browser name  "  +this.name + " launched");
    }
}

let cb = new browser("chrome");
cb.isopen;
cb.display();
let fb = new browser("Firefox");
fb.display();
