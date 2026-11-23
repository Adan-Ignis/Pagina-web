const htmlElement = document.documentElement;

// Función para detectar la preferencia del navegador
const getSystemTheme = () => {
    // Comprueba si el navegador soporta prefers-color-scheme y si está en modo oscuro
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    // Si no lo soporta o está en modo claro, devuelve 'light' por defecto
    return 'light';
};

// 1. Tema inicial según el sistema/navegador
htmlElement.setAttribute('data-theme', getSystemTheme());

// 2. Delegación de eventos: funciona aunque #theme-toggle se inserte después
// Escuchar el clic del botón para alternar el tema manualmente durante la visita
document.addEventListener('click', (event) => {
    const toggleBtn = event.target.closest('#theme-toggle');
    if (!toggleBtn) return;

    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    // Aplicar el nuevo tema al elemento <html>
    htmlElement.setAttribute('data-theme', newTheme);
});

// 3. Cambios en tiempo real en la preferencia del navegador
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        htmlElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    });
}