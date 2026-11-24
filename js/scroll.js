
document.addEventListener('DOMContentLoaded', () => {
    let animacionId = null;

    function scrollSuave(destinoY, duracion) {
        if (animacionId) {
            cancelAnimationFrame(animacionId);
        }

        const inicioY = window.scrollY;
        const distancia = destinoY - inicioY;
        let tiempoInicio = null;

        function animar(tiempoActual) {
            if (tiempoInicio === null) tiempoInicio = tiempoActual;
            const progreso = Math.min((tiempoActual - tiempoInicio) / duracion, 1);

            // Curva de aceleración y frenado suave (easeInOutCubic)
            const curva = progreso < 0.5
                ? 4 * progreso * progreso * progreso
                : 1 - Math.pow(-2 * progreso + 2, 3) / 2;

            window.scrollTo({
                top: inicioY + distancia * curva,
                behavior: 'instant'
            });

            if (progreso < 1) {
                animacionId = requestAnimationFrame(animar);
            } else {
                animacionId = null;
            }
        }

        animacionId = requestAnimationFrame(animar);
    }

    // Cancelar la animación si el usuario mueve la rueda del mouse o toca la pantalla
    const cancelarScroll = () => {
        if (animacionId) {
            cancelAnimationFrame(animacionId);
            animacionId = null;
        }
    };
    window.addEventListener('wheel', cancelarScroll, { passive: true });
    window.addEventListener('touchstart', cancelarScroll, { passive: true });

    document.querySelectorAll('a[href^="#"]').forEach((enlace) => {
        enlace.addEventListener('click', function (e) {
            const id = this.getAttribute('href');
            if (id === '#') return;

            const objetivo = document.querySelector(id);
            if (!objetivo) return;

            e.preventDefault();

            let destinoY;
            if (id === '#inicio') {
                destinoY = 0;
            } else if (id === '#final') {
                destinoY = document.documentElement.scrollHeight - window.innerHeight;
            } else {
                destinoY = objetivo.getBoundingClientRect().top + window.scrollY;
            }

            scrollSuave(destinoY, 700); // Duración en ms (700 = 0.7 segundos)
        });
    });
});
