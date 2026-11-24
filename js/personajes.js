document.addEventListener('DOMContentLoaded', () => {
    const elementos = [
        {
                "tema": "clasico",
                "fondo": "./img/hero-alice.jpg",
                "etiqueta": "PROTAGONISTA — 19 AÑOS",
                "capitulo": "ÚNICA SUPERVIVIENTE DE LA FAMILIA LIDDELL",
                "titulo": "ALICE LIDDELL",
                "texto": "Marcada por el incendio de 1863 y diez años en el Asilo Rutledge, Alice regresa al País de las Maravillas decidida a recuperar sus recuerdos robados y descubrir quién asesinó a su familia.",
                "origen": "Rol: Protagonista jugable en Londres y en todos los dominios del País de las Maravillas."
        },
        {
                "tema": "cheshire",
                "fondo": "./img/dominio-valle.jpg",
                "etiqueta": "ALIADO ENIGMÁTICO — TODOS LOS DOMINIOS",
                "capitulo": "LA VOZ DE LA CONCIENCIA",
                "titulo": "EL GATO DE CHESHIRE",
                "texto": "Demacrado, cubierto de tatuajes y dueño de una sonrisa afilada. Aparece en los momentos clave con acertijos mordaces que empujan a Alice a enfrentar la verdad sin compasión.",
                "origen": "Rol: Guía principal y narrador de las pistas ocultas durante todo el viaje."
        },
        {
                "tema": "londres",
                "fondo": "./img/historia-londres.jpg",
                "etiqueta": "ANTAGONISTA — LONDRES (1875)",
                "capitulo": "DIRECTOR DEL HOGAR HOUNDSDITCH",
                "titulo": "DR. ANGUS BUMBY",
                "texto": "Psiquiatra respetado en apariencia que utiliza la hipnosis para borrar los recuerdos de niños huérfanos. En realidad es el culpable del incendio de los Liddell y el verdadero Fabricante de Muñecas.",
                "origen": "Rol: Antagonista principal de la historia en el mundo real y jefe final en la mente de Alice."
        },
        {
                "tema": "sombrerero",
                "fondo": "./img/dominio-sombrerero.jpg",
                "etiqueta": "DOMINIO II — FÁBRICA DE RELOJERÍA",
                "capitulo": "ANTIGUO RIVAL, ALIADO FORZADO",
                "titulo": "EL SOMBRERERO LOCO",
                "texto": "Traicionado y desmembrado por la Liebre de Marzo y el Lirón, pide ayuda a Alice para recuperar sus extremidades y vengar la destrucción de su fábrica de té.",
                "origen": "Rol: Personaje clave del Capítulo I y custodio de la verdad sobre el origen del Tren."
        },
        {
                "tema": "sombrerera",
                "fondo": "./img/dominio-sombrerero.jpg",
                "etiqueta": "DOMINIO II — USURPADORES",
                "capitulo": "LOS NUEVOS AMOS DE LA FÁBRICA",
                "titulo": "LA LIEBRE DE MARZO Y EL LIRÓN",
                "texto": "Antes simples compañeros de té, hoy dirigen con brutalidad los hornos mecánicos del Sombrerero para alimentar las calderas del Tren Infernal sin importar el costo.",
                "origen": "Rol: Antagonistas secundarios del Dominio del Sombrerero."
        },
        {
                "tema": "profundidades",
                "fondo": "./img/dominio-profundidades.jpg",
                "etiqueta": "DOMINIO III — PROFUNDIDADES DESLIZANTES",
                "capitulo": "CAPITÁN DEL HMS GRYPHON",
                "titulo": "LA FALSA TORTUGA",
                "texto": "Un viejo marino melancólico con caparazón oxidado que comanda el barco HMS Gryphon. Ayuda a Alice a atravesar el océano congelado hasta el teatro submarino.",
                "origen": "Rol: Aliado y guía en la primera mitad de Profundidades Deslizantes."
        },
        {
                "tema": "profundidades",
                "fondo": "./img/dominio-profundidades.jpg",
                "etiqueta": "DOMINIO III — TEATRO SUBMARINO",
                "capitulo": "ESPECTÁCULO DE ENGAÑO",
                "titulo": "LA MORSA Y EL CARPINTERO",
                "texto": "El Carpintero recluta artistas marinos para su gran obra teatral, ocultando que el verdadero propósito del espectáculo es servir de banquete a la voraz Morsa.",
                "origen": "Rol: Figuras centrales del arco del Teatro Submarino en el Capítulo II."
        },
        {
                "tema": "oruga",
                "fondo": "./img/dominio-bosque.jpg",
                "etiqueta": "DOMINIO IV — BOSQUE ORIENTAL",
                "capitulo": "EL ORÁCULO DE LA MONTAÑA",
                "titulo": "LA ORUGA",
                "texto": "Sabia, serena y en proceso de metamorfosis hacia mariposa. Aguarda en la cumbre del Bosque Oriental para revelar a Alice que solo la Reina Roja conoce quién controla el Tren.",
                "origen": "Rol: Mentora espiritual que orienta la búsqueda de Alice hacia Queensland."
        },
        {
                "tema": "queensland",
                "fondo": "./img/dominio-queensland.jpg",
                "etiqueta": "DOMINIO V — TIERRA DE QUEENSLAND",
                "capitulo": "LA MONARCA CAÍDA",
                "titulo": "LA REINA ROJA",
                "texto": "Reducida a una figura infantil atrapada dentro de su propio castillo orgánico, revela que encarna la parte más feroz de la supervivencia de Alice y señala el camino hacia La Casa de Muñecas.",
                "origen": "Rol: Antigua némesis convertida en pieza clave para destapar la identidad del culpable."
        },
        {
                "tema": "munecas",
                "fondo": "./img/dominio-munecas.jpg",
                "etiqueta": "RECUERDOS — CASA LIDDELL (1863)",
                "capitulo": "LA HERMANA MAYOR DE ALICE",
                "titulo": "ELIZABETH 'LIZZIE' LIDDELL",
                "texto": "El vínculo más profundo del pasado de Alice. Sus ecos y cartas revelan el crimen cometido por Angus Bumby la noche del 5 de noviembre de 1863, liberando a Alice de la culpa.",
                "origen": "Rol: Núcleo emocional de los recuerdos desbloqueados y motor de la justicia final."
        }
];

    const escenario = document.getElementById('carrusel-trajes');
    const tarjetas = Array.from(document.querySelectorAll('.tarjeta-traje'));
    const fondoA = document.getElementById('fondo-a');
    const fondoB = document.getElementById('fondo-b');
    const cajaDesc = document.getElementById('caja-descripcion');
    const elEtiqueta = document.getElementById('etiqueta-dominio');
    const elContador = document.getElementById('contador-trajes');
    const elCapitulo = document.getElementById('desc-capitulo');
    const elTitulo = document.getElementById('desc-titulo');
    const elTexto = document.getElementById('desc-texto');
    const elOrigen = document.getElementById('desc-origen');
    const btnAnterior = document.getElementById('btn-anterior');
    const btnSiguiente = document.getElementById('btn-siguiente');

    const total = elementos.length;
    let indiceActual = 0;
    let capaActiva = 'a';
    let timerDesc = null;

    const fondosUnicos = [...new Set(elementos.map((item) => item.fondo))];
    fondosUnicos.forEach((ruta) => {
        const img = new Image();
        img.src = ruta;
    });

    function calcularPosicionRelativa(i, centro) {
        let diff = (i - centro + total) % total;
        if (diff > total / 2) diff -= total;
        return diff;
    }

    function clasePorDiff(diff) {
        if (diff === 0) return 'pos-centro';
        if (diff === -1) return 'pos-izq-1';
        if (diff === 1) return 'pos-der-1';
        if (diff === -2) return 'pos-izq-2';
        if (diff === 2) return 'pos-der-2';
        return diff < 0 ? 'pos-oculta-izq' : 'pos-oculta-der';
    }

    function actualizarFondo(rutaImagen) {
        const capaEntrante = capaActiva === 'a' ? fondoB : fondoA;
        const capaSaliente = capaActiva === 'a' ? fondoA : fondoB;

        capaEntrante.style.backgroundImage = `url("${rutaImagen}")`;
        capaEntrante.classList.add('fondo-activo');
        capaSaliente.classList.remove('fondo-activo');

        capaActiva = capaActiva === 'a' ? 'b' : 'a';
    }

    function actualizarDescripcion(datos, animado) {
        if (elContador) {
            elContador.textContent = `${indiceActual + 1} / ${total}`;
        }

        if (!animado) {
            elEtiqueta.textContent = datos.etiqueta;
            elCapitulo.textContent = datos.capitulo;
            elTitulo.textContent = datos.titulo;
            elTexto.textContent = datos.texto;
            elOrigen.textContent = datos.origen;
            return;
        }

        clearTimeout(timerDesc);
        cajaDesc.classList.add('cambiando');

        timerDesc = setTimeout(() => {
            elEtiqueta.textContent = datos.etiqueta;
            elCapitulo.textContent = datos.capitulo;
            elTitulo.textContent = datos.titulo;
            elTexto.textContent = datos.texto;
            elOrigen.textContent = datos.origen;
            cajaDesc.classList.remove('cambiando');
        }, 220);
    }

    function actualizarCarrusel(nuevoIndice, animado = true) {
        const indicePrevio = indiceActual;
        indiceActual = (nuevoIndice + total) % total;

        tarjetas.forEach((tarjeta, i) => {
            const diffPrev = calcularPosicionRelativa(i, indicePrevio);
            const diffNuevo = calcularPosicionRelativa(i, indiceActual);
            const nuevaClase = clasePorDiff(diffNuevo);

            const saltoExtremo = Math.abs(diffNuevo - diffPrev) > 3;
            if (saltoExtremo && animado) {
                tarjeta.style.transition = 'none';
            }

            tarjeta.className = 'tarjeta-traje ' + nuevaClase;

            if (saltoExtremo && animado) {
                void tarjeta.offsetWidth;
                tarjeta.style.transition = '';
            }
        });

        const seleccionado = elementos[indiceActual];
        escenario.setAttribute('data-tema', seleccionado.tema);

        if (animado) {
            actualizarFondo(seleccionado.fondo);
        } else {
            fondoA.style.backgroundImage = `url("${seleccionado.fondo}")`;
        }

        actualizarDescripcion(seleccionado, animado);
    }

    tarjetas.forEach((tarjeta) => {
        tarjeta.addEventListener('click', () => {
            const idx = parseInt(tarjeta.getAttribute('data-index'), 10);
            if (idx !== indiceActual) {
                actualizarCarrusel(idx, true);
            }
        });
    });

    btnAnterior.addEventListener('click', () => actualizarCarrusel(indiceActual - 1, true));
    btnSiguiente.addEventListener('click', () => actualizarCarrusel(indiceActual + 1, true));

    [btnAnterior, btnSiguiente].forEach((btn, i) => {
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                actualizarCarrusel(indiceActual + (i === 0 ? -1 : 1), true);
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') actualizarCarrusel(indiceActual - 1, true);
        if (e.key === 'ArrowRight') actualizarCarrusel(indiceActual + 1, true);
    });

    actualizarCarrusel(0, false);
});