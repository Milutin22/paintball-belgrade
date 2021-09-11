window.addEventListener('load', function() {
    $('#loader').animate({
        zIndex: '-50',
        opacity: '0'
    }, 'slow');
})

window.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementsByClassName('nav')[0];
    //navbar toggle
    navbarToggle()
    //scrolling to the particularly section
    scrollToSection();
    
    
    function navbarToggle() {
        $('.nav__toggle').on('click', function() {
            //toggling navbar
            $('.nav__navbar').slideToggle();
            //burger animation
            $('.nav__burger').addClass('burgerToggle');
            setTimeout(removeAnimation, 1100);
            function removeAnimation() {
                $('.nav__burger').removeClass('burgerToggle');
            }
        })
    }


    function scrollToSection() {
        // if window get resized
        let resized = false;
        window.addEventListener('resize', function() {
           let windowWidth = window.innerWidth;
            if(windowWidth >= 768) {
                linkClick();
                $('.nav__navbar').css({
                    display: 'block'
                });
                $('.nav__logo').on('click', function() {
                    $('.nav__navbar').css({
                        display: 'block'
                    });
                })
            } else {
                linkClick();
                
                $('.nav__logo').on('click', function() {
                    $('.nav__navbar').css({
                        display: 'none'
                    });
                })
            }
            resized = true;
        })
        // if window don't get resized
        if(!resized) {
            linkClick();
            logoClick();
        }
    }

    // scroll on section when nav link is clicked
    function linkClick() {
        const scrollLinks = document.querySelectorAll('.nav__link');
        scrollLinks.forEach(function(link) {    
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const id = e.currentTarget.getAttribute("href").slice(1);
                const element = document.getElementById(id);
                // hide nav when you click on the link
                if(window.innerWidth < 768) {
                    $('.nav__navbar').css({
                        display: 'none'
                    });
                }
    
                const navHeight = nav.getBoundingClientRect().height;
                let position = element.offsetTop - navHeight;
    
                window.scrollTo({
                    left: 0,
                    top: position
                });
                //burger animation
                $('.nav__burger').toggleClass('burgerToggle');
            })
        })
    }

    // hide nav when the logo is clicked
    function logoClick() {
        if(window.innerWidth < 768) {
            $('.nav__logo').on('click', function() {
                $('.nav__navbar').css({
                    display: 'none'
                });
            })
        } 
    }
})



