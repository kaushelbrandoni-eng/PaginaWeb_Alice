document.addEventListener('DOMContentLoaded', () => {
    const elementos = [
        {
                "tema": "clasico",
                "fondo": "./img/dominio-valle.jpg",
                "etiqueta": "ARMA PRINCIPAL — CUERPO A CUERPO",
                "capitulo": "CAPÍTULO I — VALLE DE LAS LÁGRIMAS",
                "titulo": "ESPADA VORPAL",
                "texto": "Hoja de cocina victoriana grabada en plata. Permite encadenar combos veloces, cortar la Ruina Insidiosa con agilidad y alternar golpes ligeros con ataques pesados.",
                "origen": "Obtención: Recuperada al inicio del Valle de las Lágrimas. Mejorable hasta Nivel 4 con dientes."
        },
        {
                "tema": "sombrerero",
                "fondo": "./img/dominio-sombrerero.jpg",
                "etiqueta": "ARMA DE LARGO ALCANCE — FUEGO RÁPIDO",
                "capitulo": "CAPÍTULO I — LA DUQUESA Y EL SOMBRERERO",
                "titulo": "MOLINILLO DE PIMIENTA",
                "texto": "Ametralladora improvisada con cabeza de cerdo que dispara ráfagas de pimienta ardiente. Esencial para derribar enemigos voladores, activar hocicos ocultos y romper puntos débiles a distancia.",
                "origen": "Obtención: Entregado por la Duquesa en el Valle de las Lágrimas. Se recalienta al disparar sin pausa."
        },
        {
                "tema": "profundidades",
                "fondo": "./img/dominio-profundidades.jpg",
                "etiqueta": "ARMA PESADA — IMPACTO DEMOSTRADOR",
                "capitulo": "CAPÍTULO I — DOMINIO DEL SOMBRERERO",
                "titulo": "CABALLITO DE MADERA",
                "texto": "Un mazo colosal tallado como un juguete infantil. Aunque es lento, sus golpes destrozan escudos, rompen guardias pesadas, agrietan muros frágiles y generan ondas expansivas al caer.",
                "origen": "Obtención: Desbloqueado dentro de la fábrica del Sombrerero Loco. Mejorable hasta Nivel 4."
        },
        {
                "tema": "bosque",
                "fondo": "./img/dominio-bosque.jpg",
                "etiqueta": "ARTILLERÍA — DAÑO EXPLOSIVO",
                "capitulo": "CAPÍTULO II — PROFUNDIDADES DESLIZANTES",
                "titulo": "CAÑÓN TETERA",
                "texto": "Lanzagranadas portátil que dispara proyectiles de té hirviendo con gran daño de área. Puede cargarse para duplicar su potencia explosiva y quebrar armaduras pesadas.",
                "origen": "Obtención: Recuperado en las Profundidades Deslizantes. Comparte indicador de sobrecalentamiento."
        },
        {
                "tema": "conejo",
                "fondo": "./img/dominio-valle.jpg",
                "etiqueta": "HERRAMIENTA TÁCTICA — EXPLOSIVO",
                "capitulo": "CAPÍTULO I — DOMINIO DEL SOMBRERERO",
                "titulo": "BOMBA RELOJ",
                "texto": "Un conejo mecánico de cuerda que atrae la atención de los enemigos cercanos antes de detonar. También sirve como contrapeso sobre placas de presión para resolver acertijos.",
                "origen": "Obtención: Conseguida en el Dominio del Sombrerero. Se detona manualmente o por temporizador."
        },
        {
                "tema": "londres",
                "fondo": "./img/dominio-sombrerero.jpg",
                "etiqueta": "HERRAMIENTA DEFENSIVA — CONTRAGOLPE",
                "capitulo": "CAPÍTULO I — VALLE DE LAS LÁGRIMAS",
                "titulo": "SOMBRILLA",
                "texto": "Escudo victoriano que bloquea ataques frontales y, si se abre en el instante exacto, devuelve proyectiles enemigos como los disparos de té de las Teteras Ojo y los cañonazos.",
                "origen": "Obtención: Se obtiene al inicio del Capítulo I al fijar objetivo sobre un enemigo."
        },
        {
                "tema": "queensland",
                "fondo": "./img/dominio-queensland.jpg",
                "etiqueta": "ARMA DLC — PACK WEAPONS OF MADNESS",
                "capitulo": "VARIANTE MEJORADA DE LA VORPAL",
                "titulo": "CUCHILLA VORPAL (VORPAL CLEAVER)",
                "texto": "Versión más brutal y dentada de la Espada Vorpal clásica, forjada con una hoja ancha ensangrentada inspirada en la estética más macabra del País de las Maravillas.",
                "origen": "Efecto especial (DLC): Reduce a la mitad el daño que infligen todos los ataques enemigos."
        },
        {
                "tema": "profundidades",
                "fondo": "./img/dominio-profundidades.jpg",
                "etiqueta": "ARMA DLC — PACK WEAPONS OF MADNESS",
                "capitulo": "VARIANTE MEJORADA DEL MOLINILLO",
                "titulo": "OCTO-GRINDER",
                "texto": "Rediseño abisal del Molinillo de Pimienta con tentáculos mecánicos y detalles náuticos que evocan las cavernas sumergidas de Profundidades Deslizantes.",
                "origen": "Efecto especial (DLC): Duplica la capacidad de disparo continuo antes de sobrecalentarse."
        },
        {
                "tema": "carne",
                "fondo": "./img/dominio-tren.jpg",
                "etiqueta": "ARMA DLC — PACK WEAPONS OF MADNESS",
                "capitulo": "VARIANTE MEJORADA DEL CABALLITO",
                "titulo": "CABALLITO INFERNAL (KNIGHTMARE)",
                "texto": "Un corcel blindado de acero oscuro y fuego infernal que transforma el juguete de madera en una maza demoníaca salida directamente de las calderas del Tren.",
                "origen": "Efecto especial (DLC): Restaura una porción de salud de Alice con cada golpe conectado."
        },
        {
                "tema": "bosque",
                "fondo": "./img/dominio-bosque.jpg",
                "etiqueta": "ARMA DLC — PACK WEAPONS OF MADNESS",
                "capitulo": "VARIANTE MEJORADA DEL CAÑÓN TETERA",
                "titulo": "CAÑÓN TETERA DE OJO (CAT NIP)",
                "texto": "Versión estilizada y felina del Cañón Tetera con detalles metálicos ornamentales, diseñada para desatar bombardeos todavía más destructivos contra hordas blindadas.",
                "origen": "Efecto especial (DLC): Aumenta en un 50% el daño explosivo de cada disparo."
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