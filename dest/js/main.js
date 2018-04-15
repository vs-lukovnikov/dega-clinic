(function(window){
    var slider = document.querySelector('.header-slider');
    var sliders = slider.querySelectorAll('.sliders');
    var currentSlide = 0;
    var menuElem = document.querySelector('.menu-bar');
    var menuElemFoot = document.querySelector('.footer-menu-bar');

    slider.addEventListener('click', toggleSliders);
    menuElem.addEventListener('click', showSubmenu);
    menuElemFoot.addEventListener('click', showSubmenu);


    function toggleSliders(e) {
        var target = e.target;

        sliders[currentSlide].classList.toggle('showing');
        currentSlide = (currentSlide+1)%sliders.length;
        sliders[currentSlide].classList.add('showing');
    };


    function showSubmenu(e) {
        var target = e.target;
        var activeSubmenu = target.nextElementSibling;

        e.preventDefault()
        activeSubmenu.classList.toggle('active');
        activeSubmenu.focus();
        activeSubmenu.onmouseout = function(e) {
            
            if ( !e.relatedTarget.closest('.sub-menu-container')){
                activeSubmenu.classList.toggle('active');
            }
        }

    }



})(window);