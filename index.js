const executarPrograma = () => {
    // chamando as variáveis
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    
    // variável para incremento
    let segundos = 0;

    // var utilizável nas funções
    let timer;

    
    function criaSegundosDaHora(segundos) {
        // data criada para pegar os segundos, porém como só pega os milisegundos, precisou fazer um cálculo para pegar os segundos
        const data = new Date(segundos * 1000);

        // Formatando a data em PT-BR e o timezone UTC para zerar
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    function iniciaRelogio() {
        // Limpando qualquer intervalo anterior para não gerar duplo intervalo
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

        // zerando o relógio novamente
        relogio.innerHTML = '00:00:00';

        // zerando os segundos para não iniciar de onde parou
        segundos = 0;
    }


    iniciar.addEventListener('click', iniciaRelogio);
    pausar.addEventListener('click', pausarRelogio);
    zerar.addEventListener('click', zerarRelogio);
};

executarPrograma();