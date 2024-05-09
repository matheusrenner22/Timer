const relogio = () => {
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    let running = false;
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
        timer = setInterval(() => {
            segundos++;
            relogio.innerHTML = criaSegundosDaHora(segundos);
        }, 100);
        relogio.classList.remove('pausando');
        running = true;
        iniciar.innerHTML = "pausar"
    }

    function pausarRelogio() {
        clearInterval(timer);
        running = false;
        iniciar.innerHTML = 'continuar'
        relogio.classList.remove('iniciando');
    }

    function zerarRelogio() {
        iniciar.innerHTML = 'iniciar';
        running = false;
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }


    document.addEventListener('click', (event) => {
        const elemento = event.target;

        if (elemento.classList.contains('iniciar')) {
            if (running === false) {
                iniciaRelogio();
                relogio.classList.add('iniciando');
            } else {
                pausarRelogio();
                relogio.classList.add('pausando');
            }
        }

        if (elemento.classList.contains('zerar')) {
            zerarRelogio();
            relogio.classList.remove('iniciando', 'pausando');
        }
    });
};

relogio();