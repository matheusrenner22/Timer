const executarPrograma = () => {
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
        running = true;
        iniciar.innerHTML = "pausar"

        timer = setInterval(() => {
            segundos++;
            relogio.innerHTML = criaSegundosDaHora(segundos);
        }, 1000);
    }

    function pausarRelogio() {
        clearInterval(timer);
        running = false;
        iniciar.innerHTML = 'continuar'
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
            if(running == false)
                iniciaRelogio();
            else
                pausarRelogio();
        }

        if (elemento.classList.contains('zerar')) {
            zerarRelogio();
        }
    });
};

executarPrograma();