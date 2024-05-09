const executarPrograma = () => {
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');

    let segundos = 0;
    let timer;


    function criaSegundosDaHora(segundos) {
        const data = new Date(segundos * 1000);

        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }


    function iniciaRelogio() {
        clearInterval();
        iniciar.classList.add('remove-iniciar');

        timer = setInterval(() => {
            segundos++;
            relogio.innerHTML = criaSegundosDaHora(segundos);
        }, 1000);
    }

    function pausarRelogio() {
        clearInterval(timer);
        iniciar.classList.remove('remove-iniciar');
        iniciar.innerHTML = 'continuar'
    }

    function zerarRelogio() {
        iniciar.classList.remove('remove-iniciar');
        iniciar.innerHTML = 'iniciar';
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }


    document.addEventListener('click', (event) => {
        const elemento = event.target;

        if (elemento.classList.contains('iniciar')) {
            iniciaRelogio();
        }

        if (elemento.classList.contains('pausar')) {
            pausarRelogio();
        }

        if (elemento.classList.contains('zerar')) {
            zerarRelogio();
        }
    });
};

executarPrograma();