const relogio = () => {
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const horaDom = document.querySelector('#hora');
    const minutosDom = document.querySelector('#minutos');
    const segundosDom = document.querySelector('#segundos');
    const milissegundosDom = document.querySelector('#milissegundos');

    let running = false;
    let hora = 0;
    let minutos = 0;
    let segundos = 0;
    let milissegundos = 0;
    let cronometro;

    function iniciaRelogio() {
        clearInterval(cronometro);
        cronometro = setInterval(() => { timer(); }, 10);
        relogio.classList.remove('pausando');
        running = true;
        iniciar.innerHTML = "pausar"
    }

    function pausarRelogio() {
        clearInterval(cronometro);
        running = false;
        iniciar.innerHTML = 'continuar'
        relogio.classList.remove('iniciando');
    }

    function zerarRelogio() {
        clearInterval(cronometro);
        iniciar.innerHTML = 'iniciar';
        running = false;
        hora = 0;
        minutos = 0;
        segundos = 0;
        milissegundos = 0;

        horaDom.innerHTML = '00';
        minutosDom.innerHTML = '00';
        segundosDom.innerHTML = '00';
        milissegundosDom.innerHTML = '000';
    }

    function timer() {
        if ((milissegundos += 10) === 1000) {
            milissegundos = 0;
            segundos++;
        }

        if (segundos === 60) {
            segundos = 0;
            minutos++;
        }

        if (minutos === 60) {
            minutos = 0;
            hora++;
        }

        horaDom.innerHTML = retornaData(hora);
        minutosDom.innerHTML = retornaData(minutos);
        segundosDom.innerHTML = retornaData(segundos);
        milissegundosDom.innerHTML = retornaData(milissegundos);
    }

    function retornaData(input) {
        return input > 10 ? input : `0${input}`;
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