class BasePage{
    constructor(pageName)
    {
        this.pageName =pageName;
    }

    open()
    {
        console.log("open the page");
    }
    close()
    {
       console.log("closing the page");
    }
}
class LoginPage extends BasePage{

}
const lp = new LoginPage();
lp.open();
lp.close();