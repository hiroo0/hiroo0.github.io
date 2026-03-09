// Toggle del menu ad hamburger (Mobile)
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Cambia l'icona in una X
    navbar.classList.toggle('active'); // Mostra/nasconde il menu
};

// Seleziona tutte le sezioni e i link della navbar per l'effetto "Scroll Active"
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Se lo scroll si trova all'interno della sezione corrente...
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // Effetto "Sticky" per l'header (cambia leggermente l'ombra quando scorri giù)
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Rimuove il menu toggle quando si clicca un link o si scrolla
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* === TYPING ANIMATION (Effetto Macchina da Scrivere) === */
const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer', 'Game Developer', 'Web Developer'],
    typeSpeed: 100,      
    backSpeed: 100,      
    backDelay: 1000, 
    loop: true           
});

/* === LOGICA MODAL DISCORD === */
function openModal() {
    document.getElementById('discord-modal').classList.add('active');
}

function closeModal() {
    document.getElementById('discord-modal').classList.remove('active');
    document.getElementById('copy-msg').classList.remove('active'); // Resetta la scritta "Copiato!"
}

function copyDiscord() {
    // Copia il testo negli appunti
    navigator.clipboard.writeText("pluuum_");
    
    // Mostra il messaggio "Nome copiato!"
    let msg = document.getElementById('copy-msg');
    msg.classList.add('active');
    
    // Nasconde il messaggio dopo 2 secondi
    setTimeout(() => {
        msg.classList.remove('active');
    }, 2000);
}