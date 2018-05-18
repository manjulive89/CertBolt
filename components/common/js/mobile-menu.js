(function () {  
    let touchstartX;
    let touchendX; 
    let toggleClass = "js-mobile-menu-toggle";
    let menuClass = "js-mobile-menu"; 
    
    if(document.querySelector("." + menuClass)){
           function closeMobileMenu() {
        document.getElementById(toggleClass).checked = false;
    } 
    document.body.addEventListener("mouseup", function (e) {
        if (!e.target.classList.contains(menuClass) && !e.target.classList.contains(toggleClass) && !e.target.parentElement.classList.contains(menuClass) && !e.target.parentElement.classList.contains(toggleClass)) {
            closeMobileMenu();
        }
    });
    document.querySelector("." + menuClass).addEventListener("touchstart", function (e) {
        touchstartX = e.changedTouches[0].screenX;
    });
    document.querySelector("." + menuClass).addEventListener("touchend", function (e) {
        touchendX = e.changedTouches[0].screenX;
        if (touchstartX > touchendX && Math.abs(touchstartX - touchendX) > 50) {
            closeMobileMenu();
        }
    });
    
    }
    

}());