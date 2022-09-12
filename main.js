window.onload = function(){
    const mobile_btn = document.querySelector('.menu-icon-wrapper');
    const heder_mobile = document.querySelector('.header-container');
    
    mobile_btn.onclick = function(){
        heder_mobile.classList.toggle('header-mobile');
        document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    }

    document.querySelectorAll(".header-info a").forEach((el) => {
        if (window.location.pathname.indexOf(el.getAttribute("href").slice(1)) > -1) {
            el.classList.add("active");
        }
    });
}