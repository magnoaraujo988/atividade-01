const formulario = document.querySelector('#meu-formulario');

function validarFormulario(event) {
    event.preventDefault();

    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const msg = document.querySelector('#msg').value;

    if (nome === "" || email === "" || msg === "") {
        alert("Todos os campos são obrigatórios");
    } else {
        alert(`Obrigado, ${nome}! Mensagem foi enviada com sucesso.`);
        formulario.reset();
    }
}

formulario.addEventListener('submit', validarFormulario);


const btnTema = document.querySelector('#btn-tema');
const body = document.body;

function alternarTema() {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        btnTema.innerText = "Claro";
    } else {
        btnTema.innerText = "Escuro";
    }
}

btnTema.addEventListener('click', alternarTema);


const meusProjetos = [
    {
        titulo: "Projeto 01 - Aplicativo de vendas online",
        descricao: "Esse sistema tem como objetivo agilar o modelo de vendas online.",
        link: "#"
    },
    {
        titulo: "Projeto 02 - Sistema de Logistíca",
        descricao: "Sistema criado para uma melhor agilidade nas entregas dos produtos da empresa.",
        link: "#"
    },
    {
        titulo: "Projeto 03 - Sistema de Finanças",
        descricao: "Sistema para o controle financeiro da empresa.",
        link: "#"
    },
    {
        titulo: "Projeto 04 - Sistema de Rh",
        descricao: "Sistema para melhoramento do rh na contratação de novos colaboradores.",
        link: "#"
    }
];

function renderizarProjetos() {
    const container = document.querySelector('.projetos-container');

    container.innerHTML = "";

    meusProjetos.forEach(projeto => {
        const cardHTML = `
            <article class="card-projeto">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                <a href="${projeto.link}" target="_blank">Ver no GitHub</a>
            </article>
        `;
        container.innerHTML += cardHTML;
    });
}

renderizarProjetos();