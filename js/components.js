async function cargarComponente(selector, ruta) {
    const contenedor = document.querySelector(selector);
    if (!contenedor) return;

    try {
        const respuesta = await fetch(ruta);
        if (!respuesta.ok) throw new Error(`Error al cargar ${ruta}`);
        contenedor.innerHTML = await respuesta.text();
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    await Promise.all([
        cargarComponente("#header-placeholder", "/components/header.html"),
        cargarComponente("#footer-placeholder", "/components/footer.html")
    ]);
});