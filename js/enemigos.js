document.addEventListener('DOMContentLoaded', () => {
    const elementos = [
        {
                "tema": "clasico",
                "fondo": "./img/dominio-valle.jpg",
                "etiqueta": "CORRUPCIÓN MENTAL — TODOS LOS DOMINIOS",
                "capitulo": "MANIFESTACIÓN DE LA CULPA",
                "titulo": "LA RUINA INSIDIOSA",
                "texto": "Criaturas deformes de brea negra y cabezas de muñeca derretidas que brotan de la psique fracturada de Alice. Atacan en grupo y escupen fuego oscuro desde sus entrañas.",
                "origen": "Debilidad: Combos rápidos de Espada Vorpal y Bomba Reloj para dispersar sus variantes gigantes."
        },
        {
                "tema": "sombrerero",
                "fondo": "./img/dominio-sombrerero.jpg",
                "etiqueta": "DOMINIO DEL SOMBRERERO — AUTÓMATA",
                "capitulo": "GUARDIÁN DE LA FÁBRICA",
                "titulo": "TETERA OJO (EYEPOT)",
                "texto": "Una tetera mecánica gigante con patas arácnidas y un enorme ojo ciclópeo que dispara chorros hirvientes. Su cuerpo metálico resiste ataques frontales hasta que queda aturdida.",
                "origen": "Debilidad: Devuelve sus disparos con la Sombrilla o ataca su ojo expuesto con el Molinillo."
        },
        {
                "tema": "sombrerera",
                "fondo": "./img/dominio-sombrerero.jpg",
                "etiqueta": "DOMINIO DEL SOMBRERERO — INFANTERÍA",
                "capitulo": "TALLERES DE RELOJERÍA",
                "titulo": "MOSCAS LOCAS (MADCAPS)",
                "texto": "Enemigos frenéticos con tazas y teteras por cabeza armados con cuchillas, tenedores y escudos improvisados. Suelen emboscar en pasillos estrechos.",
                "origen": "Debilidad: Rompe sus escudos con el Caballito de Madera y remata con la Espada Vorpal."
        },
        {
                "tema": "profundidades",
                "fondo": "./img/dominio-profundidades.jpg",
                "etiqueta": "PROFUNDIDADES DESLIZANTES — COLOSO",
                "capitulo": "NAUFRAGIOS CONGELADOS",
                "titulo": "CANGREJO CAÑÓN",
                "texto": "Crustáceo acorazado que utiliza el casco de un barco hundido como caparazón. Dispara andanadas de cañonazos explosivos y se entierra en el hielo para emboscar.",
                "origen": "Debilidad: Usa la Bomba Reloj o el Cañón Tetera para volcarlo y atacar su vientre blando."
        },
        {
                "tema": "bosque",
                "fondo": "./img/dominio-bosque.jpg",
                "etiqueta": "BOSQUE ORIENTAL — INVASOR AÉREO",
                "capitulo": "ASEDIO AL SANTUARIO",
                "titulo": "AVISPAS SAMURÁI Y DAIMYO",
                "texto": "Ejército disciplinado de insectos guerreros armados con katanas, arcos y armaduras lacadas. Los comandantes Daimyo superan en tamaño a Alice y bloquean casi cualquier ataque frontal.",
                "origen": "Debilidad: Derriba a las arqueras con el Molinillo y quiebra la guardia del Daimyo con el Cañón Tetera."
        },
        {
                "tema": "queensland",
                "fondo": "./img/dominio-queensland.jpg",
                "etiqueta": "TIERRA DE QUEENSLAND — EJÉRCITO REAL",
                "capitulo": "FORTALEZA DE LA REINA ROJA",
                "titulo": "GUARDIAS DE CARTAS",
                "texto": "Soldados sin rostro hechos de naipes ensangrentados armados con alabardas. Los Guardias Blindados exigen maniobras evasivas precisas para atacar por la espalda.",
                "origen": "Debilidad: Esquiva con mariposas hacia su retaguardia y golpea con Caballito o Vorpal."
        },
        {
                "tema": "carne",
                "fondo": "./img/dominio-queensland.jpg",
                "etiqueta": "TIERRA DE QUEENSLAND — ACECHADOR",
                "capitulo": "PERSECUCIÓN EN EL CASTILLO",
                "titulo": "EL VERDUGO (EXECUTIONER)",
                "texto": "Un coloso inmortal de armadura y guadaña gigante al servicio de la Reina Roja. A tamaño normal es completamente invulnerable y obliga a Alice a huir por pasillos estrechos.",
                "origen": "Debilidad: Solo puede ser derrotado cuando Alice alcanza el tamaño gigante en Queensland."
        },
        {
                "tema": "munecas",
                "fondo": "./img/dominio-munecas.jpg",
                "etiqueta": "LA CASA DE MUÑECAS — PESADILLA",
                "capitulo": "TALLER DE PORCELANA",
                "titulo": "NIÑA MUÑECA (DOLL GIRL)",
                "texto": "Monstruo ágil de porcelana agrietada con múltiples extremidades cosidas y un rostro vacío que gira violentamente. Sus cabezas actúan como escudos hasta que se rompen.",
                "origen": "Debilidad: Destruye su máscara con el Cañón Tetera y remata su corazón expuesto."
        },
        {
                "tema": "histeria",
                "fondo": "./img/dominio-tren.jpg",
                "etiqueta": "JEFE FINAL — EL TREN INFERNAL",
                "capitulo": "LA VERDAD DEL 5 DE NOVIEMBRE",
                "titulo": "EL FABRICANTE DE MUÑECAS",
                "texto": "La forma monstruosa del Dr. Angus Bumby dentro de la mente de Alice. Una entidad gigantesca rodeada de manos de Ruina, fuego infernal y cabezas de niños olvidados.",
                "origen": "Debilidad: Esquiva sus golpes colosales, destruye los núcleos de sus manos y ataca su lengua expuesta."
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