document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animated", {
        speed: 200,
        loop: true,

    }).type(' Front-End!', { delay: 900 })
        .delete(11)
        .type(' Back-End!', { delay: 900 }).go();
        // .delete(6)
        // .type('Guia!', { delay: 900 })
        // .delete(5)
        // .type('Mentor!', { delay: 900 }).go();
});

// Função de Adicionar Texto

$(document).ready(function() {
    $("#verMaisBtn").click(function() {
        var $btn = $(this);
        var $pSobre = $(".p_sobre");

        if ($btn.text() === "Ver mais") {
            var additionalContent = "<div class='additional-content'>\
                Começando por alguns fatos sobre mim, eu ingressei no Instituto Federal de Santa Catarina no começo do ano de 2020 no curso de Engenharia de Telecomuniçãoes. Foi nesse curso que tive meu primeiro contato com programação tendo aulas em C#. Nesse meio tempo, estava trabalhando em empregos temporários que não eram da área que eu estava estudando. No meio do ano de 2021, surgiu a oportunidade de estágio na Prefeitura de Florianópolis na área de T.I como suporte técnico. Após alguns meses, comecei a me interessar pela área de desenvolvimento e fui convidado para migrar para esse setor. Atualmente estou nesse mesmo setor, mas agora como terceirizado, somando uma experiência de quase 4 anos ajudando a modernizar e criar diversos sistemas na Prefeitura. Durante este percurso, troquei de faculdade para Ciência da Computação, escolhendo seguir a carreira de Programador.\
            </div>";

            $pSobre.append(additionalContent).hide().slideDown(500); 
            $btn.text("Ver menos");
        } else {
            $pSobre.find(".additional-content").slideUp(500, function() {
                $(this).remove();
            });
            $btn.text("Ver mais");
        }
    });
});

// Função de Criar e espalhar estrelas

    const starField = document.getElementById('starField');
    const starCount = 400; // Ajuste a quantidade de estrelas aqui

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = `${Math.random() * 2 + 1}px`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}vw`;
        starField.appendChild(star);
    }

// Função para abrir o modal

function openModalSitePessoal() {
    document.getElementById("modalSitePessoal").style.display = "block";
}
  
function openModalSiteAloSaude() {
    document.getElementById("modalSiteAloSaude").style.display = "block";
}
  
function openModalContatosPmf() {
    document.getElementById("modalContatosPmf").style.display = "block";
}

function openModalInshelf() {
    document.getElementById("modalInshelf").style.display = "block";
}

// Função para fechar o modal

function closeModalSitePessoal() {
    document.getElementById("modalSitePessoal").style.display = "none";
}
  
function closSiteAloSaude() {
    document.getElementById("modalSiteAloSaude").style.display = "none";
}
  
function closeModalContatosPmf() {
    document.getElementById("modalContatosPmf").style.display = "none";
}

function closeModalInshelf() {
    document.getElementById("modalInshelf").style.display = "none";
}
  