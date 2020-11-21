const sr = ScrollReveal();
sr.reveal('', {
    origin: 'top',
    distance: '1000px',
    delay: 3000,
    duration: 500,
    scale: 1,
    opacity: 0,
    easing: 'ease',
});

sr.reveal('.p-brand', {
    origin: 'right',
    distance: '200px',
    delay: 500,
    duration: 300,
    scale: 1,
    opacity: 0,
    easing: 'ease',
});

sr.reveal('.sub-text', {
    origin: 'left',
    distance: '200px',
    delay: 1500,
    duration: 500,
    scale: 1,
    opacity: 0,
    easing: 'ease',
});

// sr.reveal('.col', {
//     origin: 'left',
//     distance: '100px',
//     delay: 1500,
//     duration: 1000,
//     scale: 1,
//     opacity: 0,
//     easing: 'ease',
// });



window.sr = ScrollReveal();
sr.reveal('.verge', { duration: 100 }, 5);