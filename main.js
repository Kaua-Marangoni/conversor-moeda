const sidenav = document.querySelector( "nav.sidenav");
const mainContent = document.querySelector( "div.main-content"); 
const openSidenav = document.querySelector("span.open-sidenav"); 
const closeSidenav = document.querySelector("span.close-sidenav");

openSidenav.onclick = () => {
    sidenav.style.width = "300px";
    mainContent.style.marginLeft = "-100px";
}
    
closeSidenav.onclick = () => {
    sidenav.style.width = "0";
    mainContent.style.marginLeft = "0";
}