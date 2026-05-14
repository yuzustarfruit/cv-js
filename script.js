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

console.log("he estado hasta las 4 AM viendo tutoriales, he visto tanto la propiedad de querySelectorAll que ya no me parece una propiedad de verdad.")

