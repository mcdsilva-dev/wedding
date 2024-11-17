// Quantidade de presentes visíveis inicialmente
let presentesVisiveis = 6;

// Função para criar o HTML de um presente
function criarPresenteHTML(presente) {
    return `
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="${presente.imagem}" alt="${presente.nome}" class="w-full h-56 object-cover">
            <div class="p-4">
                <h3 class="text-lg font-bold text-gray-800">${presente.nome}</h3>
                <p class="text-gray-600 mt-2">
                    <span class="font-bold text-gray-800">R$ ${presente.preco.toFixed(2)}</span>
                </p>
                <button onclick="presentear(${presente.id})" class="mt-4 w-full bg-rose-500 text-white py-2 rounded-lg hover:bg-rose-600">
                    Presentear
                </button>
            </div>
        </div>
    `;
}

// Função para atualizar a exibição dos presentes
function atualizarPresentes() {
    const grid = document.getElementById('presentesGrid');
    const presentes = JSON.parse(localStorage.getItem('presentes') || '[]');
    
    grid.innerHTML = '';
    
    presentes.slice(0, presentesVisiveis).forEach(presente => {
        grid.innerHTML += criarPresenteHTML(presente);
    });

    // Esconde o botão "Ver mais" se não houver mais presentes para mostrar
    const btnVerMais = document.getElementById('verMais');
    if (presentesVisiveis >= presentes.length) {
        btnVerMais.classList.add('hidden');
    } else {
        btnVerMais.classList.remove('hidden');
    }
}

// Função para ver mais presentes
function verMaisPresentes() {
    presentesVisiveis += 6;
    atualizarPresentes();
}

// Função para presentear
function presentear(id) {
    alert(`Presente selecionado! Em breve você será redirecionado para o pagamento.`);
    // Adicione aqui a lógica para o processo de presentear
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Adiciona o event listener para o botão ver mais
    document.getElementById('verMais').addEventListener('click', verMaisPresentes);

    // Exibe os presentes iniciais
    atualizarPresentes();

    // Configura um intervalo para verificar novos presentes
    setInterval(atualizarPresentes, 5000); // Verifica a cada 5 segundos
});