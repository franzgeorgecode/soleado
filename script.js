// Menu Hamburguesa

const menuHamburguesa = document.getElementById('hamburguesa');
const cerrar = document.getElementById('cerrar');
const menuLista = document.getElementById('lista-menu')

if (menuHamburguesa) {
    menuHamburguesa.addEventListener('click', () => {
        menuLista.classList.add('active')
    })
};
if (cerrar) {
    cerrar.addEventListener('click', () => {
        menuLista.classList.remove('active')
    })
};

