function filtrarProyectos(categorSelect) {
    const cajas = document.querySelectorAll('.caja');
    cajas.forEach(caja => {
        if (categorSelect === 'all' || caja.dataset.categoria === categorSelect) {
            caja.classList.remove('oculto');
        } else {
            caja.classList.add('oculto');
        }
    });
}

const botones = document.querySelectorAll('button[data-categoria]');
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        botones.forEach(b => b.classList.remove('select'));
        boton.classList.add('select');
        filtrarProyectos(boton.dataset.categoria);
    });
});
