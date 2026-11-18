const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Función para detectar la preferencia del sistema operativo (Windows, Mac, Linux)
const getSystemTheme = () => {
    // Comprueba si el navegador y el SO soportan prefers-color-scheme y si está en modo oscuro
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    // Si no lo soporta (ej. Windows 7) o está en modo claro, devuelve 'light' por defecto
    return 'light';
};

// 1. Asignar el tema inicial según el sistema operativo al cargar la página
const initialTheme = getSystemTheme();
htmlElement.setAttribute('data-theme', initialTheme);

// 2. Escuchar el clic del botón para alternar el tema manualmente durante la visita
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Aplicar el nuevo tema al elemento <html>
    htmlElement.setAttribute('data-theme', newTheme);
});

// 3. (Opcional) Detectar en tiempo real si el usuario cambia el tema en la configuración de su sistema operativo
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        const systemTheme = e.matches ? 'dark' : 'light';
        htmlElement.setAttribute('data-theme', systemTheme);
    });
}