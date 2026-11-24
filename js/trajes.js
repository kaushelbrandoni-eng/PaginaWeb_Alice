document.addEventListener('DOMContentLoaded', () => {
    const trajes = [
        {
            tema: 'londres',
            fondo: './img/historia-londres.jpg',
            etiqueta: 'LONDRES, 1875 — PRÓLOGO',
            capitulo: 'INICIO DEL JUEGO — HOGAR HOUNDSDITCH',
            titulo: 'VESTIDO DE LONDRES (PREDETERMINADO)',
            texto: 'Atuendo sencillo y gris desgastado que viste Alice al comenzar su recorrido por las calles lluviosas de Londres en 1875. Refleja el luto por el incendio familiar y su reciente salida del Asilo Rutledge.',
            origen: 'Cómo se consigue: Disponible por defecto al iniciar el juego en Londres.'
        },
        {
            tema: 'clasico',
            fondo: './img/dominio-valle.jpg',
            etiqueta: 'DOMINIO I — VALLE DE LAS LÁGRIMAS',
            capitulo: 'ENTRADA AL PAÍS DE LAS MARAVILLAS',
            titulo: 'VESTIDO CLÁSICO',
            texto: 'El icónico vestido azul celeste con delantal blanco manchado y símbolos alquímicos en los bolsillos. Marca el regreso de Alice al País de las Maravillas antes de que el reino se quiebre por completo.',
            origen: 'Cómo se consigue: Se equipa automáticamente al caer por la madriguera (Capítulo I).'
        },
        {
            tema: 'sombrerero',
            fondo: './img/dominio-sombrerero.jpg',
            etiqueta: 'DOMINIO II — DOMINIO DEL SOMBRERERO',
            capitulo: 'LA FÁBRICA DE RELOJERÍA Y VAPOR',
            titulo: 'STEAMDRESS (TRAJE DE VAPOR)',
            texto: 'Vestido steampunk en tonos cobre, marrón y crema, adornado con corsé de cuero, engranajes de relojería y detalles mecánicos. Diseñado para atravesar los hornos y prensas de la fábrica del Sombrerero Loco.',
            origen: 'Cómo se consigue: Se desbloquea al adentrarse en el Dominio del Sombrerero (Capítulo I).'
        },
        {
            tema: 'profundidades',
            fondo: './img/dominio-profundidades.jpg',
            etiqueta: 'DOMINIO III — PROFUNDIDADES DESLIZANTES',
            capitulo: 'EL TEATRO SUBMARINO DE LA MORSA',
            titulo: 'VESTIDO SIRENA (SIREN)',
            texto: 'Confeccionado con tonos aguamarina, escamas, corales y detalles marinos. Acompaña a Alice a bordo del HMS Gryphon y en su descenso por las cavernas congeladas y barcos hundidos.',
            origen: 'Cómo se consigue: Se desbloquea automáticamente al iniciar el Capítulo II.'
        },
        {
            tema: 'bosque',
            fondo: './img/dominio-bosque.jpg',
            etiqueta: 'DOMINIO IV — BOSQUE ORIENTAL',
            capitulo: 'EL SANTUARIO DE LA ORUGA',
            titulo: 'DONCELLA DE SEDA (SILK MAIDEN)',
            texto: 'Un elegante kimono victoriano en seda negra, carmesí y oro con bordados tradicionales. Alice lo porta mientras asciende por montañas de papel origami y pergaminos vivientes.',
            origen: 'Cómo se consigue: Se desbloquea al entrar al Bosque Oriental (Capítulo III).'
        },
        {
            tema: 'queensland',
            fondo: './img/dominio-queensland.jpg',
            etiqueta: 'DOMINIO V — TIERRA DE QUEENSLAND',
            capitulo: 'LA FORTALEZA DE LA REINA ROJA',
            titulo: 'CORAZONES REALES (ROYAL SUIT)',
            texto: 'Vestido gótico en rojo sangre, negro azabache y detalles dorados con símbolos de la baraja. Representa el enfrentamiento en el castillo viviente de la Reina Roja y la persecución del Verdugo.',
            origen: 'Cómo se consigue: Se desbloquea al cruzar el Puente de Cartas (Capítulo IV).'
        },
        {
            tema: 'munecas',
            fondo: './img/dominio-munecas.jpg',
            etiqueta: 'DOMINIO VI — LA CASA DE MUÑECAS',
            capitulo: 'EL TALLER DEL FABRICANTE DE MUÑECAS',
            titulo: 'MUÑECA DE RETAZOS (MISSTITCHED)',
            texto: 'Tela pálida remendada con puntadas gruesas, botones oscuros y una llave metálica en la espalda. Simboliza los recuerdos fragmentados de los niños de Houndsditch y el secreto del incendio.',
            origen: 'Cómo se consigue: Se desbloquea al ingresar a La Casa de Muñecas (Capítulo V).'
        },
        {
            tema: 'cheshire',
            fondo: './img/hero-alice.jpg',
            etiqueta: 'TRAJE ESPECIAL — PACK DE VESTIDOS DLC',
            capitulo: 'INSPIRADO EN EL GATO DE CHESHIRE',
            titulo: 'TRAJE CHESHIRE',
            texto: 'Vestido a rayas oscuras con cortes rasgados, collar felino y el rostro sonriente del Gato de Cheshire bordado en la falda. Pensado para quienes buscan el mayor desafío del juego.',
            origen: 'Efecto especial (DLC): Desactiva por completo la caída de rosas de salud de los enemigos.'
        },
        {
            tema: 'jaquemate',
            fondo: './img/dominio-queensland.jpg',
            etiqueta: 'TRAJE ESPECIAL — PACK DE VESTIDOS DLC',
            capitulo: 'TABLERO DE QUEENSLAND',
            titulo: 'JAQUE MATE (CHECKMATE)',
            texto: 'Vestido estructurado en patrón de ajedrez blanco y negro con detalles metálicos de corona, reflejando las letales partidas de lógica que custodian el camino hacia la Reina Roja.',
            origen: 'Efecto especial (DLC): Duplica el daño infligido por todas las armas de Alice.'
        },
        {
            tema: 'conejo',
            fondo: './img/dominio-tren.jpg',
            etiqueta: 'TRAJE ESPECIAL — PACK DE VESTIDOS DLC',
            capitulo: 'INSPIRADO EN EL CONEJO BLANCO',
            titulo: 'TARDE PERO CON SUERTE (LATE BUT LUCKY)',
            texto: 'Atuendo aristocrático en rojo borgoña, blanco y oro con relojes de bolsillo y siluetas de conejo. Evoca la obsesión por el tiempo perdido y los secretos ocultos a simple vista.',
            origen: 'Efecto especial (DLC): Otorga de forma constante el efecto regenerativo de la Violeta Menguante.'
        },
        {
            tema: 'sombrerera',
            fondo: './img/dominio-sombrerero.jpg',
            etiqueta: 'TRAJE ESPECIAL — PACK DE VESTIDOS DLC',
            capitulo: 'INSPIRADO EN EL SOMBRERERO LOCO',
            titulo: 'SOMBRERERA (HATTRESS)',
            texto: 'Versión elegante inspirada en el Sombrerero Loco, con chaleco verde esmeralda, corbatín, engranajes dorados y un diseño impecable de sastrería victoriana.',
            origen: 'Efecto especial (DLC): Al recibir daño, Alice pierde dientes recolectados en lugar de salud.'
        },
        {
            tema: 'oruga',
            fondo: './img/dominio-bosque.jpg',
            etiqueta: 'TRAJE ESPECIAL — PACK DE VESTIDOS DLC',
            capitulo: 'INSPIRADO EN LA SABIA ORUGA',
            titulo: 'TRAJE DE LA ORUGA (CATERPILLAR)',
            texto: 'Vestido de inspiración oriental en tonos azul turquesa, jade y detalles de humo místico, rindiendo homenaje al sabio guardián de la montaña del Bosque Oriental.',
            origen: 'Efecto especial (DLC): Mantiene el Sentido Menguante activo en todo momento sin encogerse.'
        },
        {
            tema: 'carne',
            fondo: './img/dominio-queensland.jpg',
            etiqueta: 'TRAJE ESPECIAL — PACK DE VESTIDOS DLC',
            capitulo: 'CORRUPCIÓN DE LA REINA ROJA',
            titulo: 'DONCELLA DE CARNE (FLESHMAIDEN)',
            texto: 'El atuendo más perturbador de la colección: un vestido orgánico de tonos carmesí y venas vivas que encarna la furia y la desesperación desatada de Alice.',
            origen: 'Efecto especial (DLC): Permite activar el Modo Histeria en cualquier momento, sin estar al borde de la muerte.'
        },
        {
            tema: 'histeria',
            fondo: './img/modo-histeria.jpg',
            etiqueta: 'ESTADO CRÍTICO — LOCURA ABSOLUTA',
            capitulo: 'MODO HISTERIA — EL LÍMITE DE LA CORDURA',
            titulo: 'TRAJE DE HISTERIA',
            texto: 'Cuando solo queda una rosa de vida, el vestido se tiñe de blanco espectral cubierto de sangre carmesí y los ojos de Alice sangran oscuridad. En este estado el daño se multiplica y se vuelve invulnerable.',
            origen: 'Cómo se consigue: Activa el Modo Histeria cuando te quede una sola rosa de salud.'
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

    const total = trajes.length;
    let indiceActual = 0;
    let capaActiva = 'a';
    let timerDesc = null;

    const fondosUnicos = [...new Set(trajes.map((t) => t.fondo))];
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

        const trajeSeleccionado = trajes[indiceActual];
        escenario.setAttribute('data-tema', trajeSeleccionado.tema);

        if (animado) {
            actualizarFondo(trajeSeleccionado.fondo);
        } else {
            fondoA.style.backgroundImage = `url("${trajeSeleccionado.fondo}")`;
        }

        actualizarDescripcion(trajeSeleccionado, animado);
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