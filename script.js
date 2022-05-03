function toggleMenu (){
    var menutoggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menutoggle.classList.toggle('active');
    menu.classList.toggle('active');
}

const src = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2000,
    reset: true
})

src.reveal('.home-text',{})
src.reveal('.social',{})
src.reveal('.heading',{})
src.reveal('.about-text',{})
src.reveal('.skills-text',{})
src.reveal('.projects-content',{})
src.reveal('.contact-social',{})
src.reveal('.contact-form',{})


