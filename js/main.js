const row = document.querySelector('.container-carousel');
const films = document.querySelectorAll('.pelicula');
const arrowLeft = document.querySelector('#flecha-izquierda');
const arrowRight = document.querySelector('#flecha-derecha');

// --- event Listener flechas --- 

arrowRight.addEventListener('click', () => {
    row.scrollLeft += row.offsetWidth;
    const indicadorActive = document.querySelector('.indicadores .active');
    if(indicadorActive.nextSibling) {
        indicadorActive.nextSibling.classList.add('active');
        indicadorActive.classList.remove('active');
        
    }
    
})

arrowLeft.addEventListener('click', () => {
    row.scrollLeft -= row.offsetWidth;

    const indicadorActive = document.querySelector('.indicadores .active');
    if(indicadorActive.previousSibling) {
        indicadorActive.previousSibling.classList.add('active');
        indicadorActive.classList.remove('active');
        
    }
   
})

// ------ Pagination ---- 

const pageNumbers = Math.ceil(films.length / 5);
for(let i = 0; i < pageNumbers; i++) {
    const indicador = document.createElement('button');
    if(i === 0) {
        indicador.classList.add('active');
    }
    const indicadorHtml = document.querySelector('.indicadores');
    indicadorHtml.appendChild(indicador);
    indicador.addEventListener('click', e => {
        row.scrollLeft = i * row.offsetWidth;
        const active = document.querySelector('.indicadores .active');
        active.classList.remove('active');
        e.target.classList.add('active');

    });

}


//  ----- hover -----

films.forEach(film => {
   film.addEventListener('mouseenter', e => {
       const element = e.currentTarget;
       console.log(element);
       setTimeout(() => {
           films.forEach( film => film.classList.remove('hover'));
           element.classList.add('hover')
           
        }, 300);
    })
})

row.addEventListener('mouseleave', () => {
    films.forEach( film => film.classList.remove('hover'));

})