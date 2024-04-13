const progress = document.getElementById('progreso');
const ant = document.getElementById('ant');
const sig = document.getElementById('sig');
const circulos = document.querySelectorAll('.circulo');

let currentActive = 1;

sig.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circulos.length) currentActive = circulos.length;
    update();
});

ant.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) currentActive = 1;
    update();
});

const update = () => {
    circulos.forEach((circulo, index) => {
        if (index < currentActive) circulo.classList.add('activo');
        else circulo.classList.remove('activo');
    });
    const activos = document.querySelectorAll('.activo');
    progress.style.width =
        ((activos.length - 1) / (circulos.length - 1)) * 100 + '%';
    if (currentActive === 1) prev.disabled = true;
    else if (currentActive === circulos.length) next.disabled = true;
    else {
        ant.disabled = false;
        sig.disabled = false;
    }
};