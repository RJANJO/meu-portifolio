document.addEventListener("DOMContentLoaded", function () {
    // Carrega cada parte do HTML e só inicializa os elementos depois que todos foram carregados.
    loadHTML('header.html', '#header')
        .then(() => loadHTML('footer.html', '#footer'))
        .then(() => loadHTML('aside.html', '#aside'))
        .then(() => {
            // Após todos os componentes serem carregados, inicializar o Flatpickr e os listeners
            inicializarComponentes();
        });
});

function loadHTML(file, element) {
    return fetch(file)
        .then(response => response.text())
        .then(data => {
            document.querySelector(element).innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o arquivo:', error));
}

function inicializarComponentes() {
    // Inicializando Flatpickr para calendários
    flatpickr('#calendarioDestino1', {
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
        minDate: "today"
    });

    flatpickr('#calendarioDestino2', {
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
        minDate: "today"
    });

    // Detecta mudanças no select para mostrar opções de pagamento
    document.querySelector('#formaPagamento1').addEventListener('change', function () {
        atualizarFormularioPagamento('1', this.value);
    });

    document.querySelector('#formaPagamento2').addEventListener('change', function () {
        atualizarFormularioPagamento('2', this.value);
    });
}

function atualizarFormularioPagamento(destinoId, formaPagamento) {
    let detalhesPagamento = document.querySelector(`#detalhesPagamento${destinoId}`);
    detalhesPagamento.innerHTML = '';

    switch (formaPagamento) {
        case 'cartao':
            detalhesPagamento.innerHTML = `
                <div class="form-group">
                    <label for="numeroCartao">Número do Cartão</label>
                    <input type="text" class="form-control" id="numeroCartao${destinoId}" placeholder="0000 0000 0000 0000">
                </div>
                <div class="form-group">
                    <label for="nomeCartao">Nome no Cartão</label>
                    <input type="text" class="form-control" id="nomeCartao${destinoId}" placeholder="Nome como no cartão">
                </div>
                <div class="form-group">
                    <label for="validadeCartao">Validade</label>
                    <input type="text" class="form-control" id="validadeCartao${destinoId}" placeholder="MM/AA">
                </div>
                <div class="form-group">
                    <label for="cvvCartao">CVV</label>
                    <input type="text" class="form-control" id="cvvCartao${destinoId}" placeholder="Código de segurança">
                </div>
            `;
            break;
        case 'boleto':
            detalhesPagamento.innerHTML = `
                <p>Ao clicar em "Gerar Boleto", será gerado um boleto bancário para o pagamento.</p>
                <button type="button" class="btn btn-secondary" onclick="gerarBoleto(${destinoId})">Gerar Boleto</button>
            `;
            break;
        case 'pix':
            detalhesPagamento.innerHTML = `
                <p>Ao clicar em "Gerar QR Code", será gerado um QR Code para pagamento via Pix.</p>
                <button type="button" class="btn btn-secondary" onclick="gerarPix(${destinoId})">Gerar QR Code</button>
            `;
            break;
    }
}

function gerarBoleto(destinoId) {
    alert(`Boleto para pagamento do destino ${destinoId} gerado com sucesso!`);
}

function gerarPix(destinoId) {
    alert(`QR Code para pagamento do destino ${destinoId} gerado com sucesso!`);
}

function calcularValor(destino) {
    let dataSelecionada = document.querySelector(`#calendarioDestino${destino === 'Rio de Janeiro' ? '1' : '2'}`).value;
    let valorBase = destino === 'Rio de Janeiro' ? 2000 : 3500; // Valor base dos destinos

    // Ajuste de preço por data
    let precoFinal = valorBase;
    if (dataSelecionada.includes('12')) {
        precoFinal += 500; // Aumenta o valor se for dezembro (alta temporada)
    }

    document.querySelector(`#valorDestino${destino === 'Rio de Janeiro' ? '1' : '2'}`).innerHTML = `
        <p>O valor total para ${destino} na data ${dataSelecionada} é R$ ${precoFinal},00.</p>
    `;
}
