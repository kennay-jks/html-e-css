class MobileNavbar {
    constructor(mobilemenu, navlist, navlinks){
        this.mobilemenu = document.querySelector(mobilemenu);
        this.navlist = document.querySelector(navlist);
        this.navlinks = document.querySelectorAll(navlinks);
        this.activeClass = "active";
        
        this.handleclick = this.handleclick.bind(this);
    }
    handleclick(){
        console.log(this)
        this.navlist.classlist.toggle(this.activeClass)
    }
    addClickEvent(){
        this.mobilemenu.addEventListener("click", this.handleclick);
    }
    init(){
        if (this.mobilemenu) {
            this.addClickEvent();
        }
        return this;
    }
}
const mobilenavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobilenavbar.init();