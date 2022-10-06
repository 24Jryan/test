
var isMobile = false;
var ranOnce = false;
var slideToggleState = false
$(".hamburger").click(function (){
    $(".nav__link").slideToggle("hide")
    slideToggleState = !slideToggleState
})

$("#vehicles").click(() => {
    window.location.href = "vehicles.html"
})

$("#contact").click(() => {
    window.location.href = "contact.html"
})

$("#about").click(() => {
    window.location.href = "about.html"
})


$(window).resize(() => {
    let width = window.innerWidth;
    if (width >= 600) {
        if (!ranOnce) {
            $(".nav__link").slideToggle("show")
            ranOnce = true;
        }
        
    } 
    else {
        ranOnce = false;
    }
})