$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });

    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('#form').validate({
        errorClass: 'error',
        messages: {
            nome: {
                required: "Por favor, insira seu nome completo."
            },
            email: {
                required: "Por favor, insira seu e-mail.",
                email: "Por favor, insira um e-mail válido."
            },
            telefone: {
                required: "Por favor, insira seu telefone."
            },
            cpf: {
                required: "Por favor, insira seu CPF."
            },
            endereco: {
                required: "Por favor, insira seu endereço completo."
            },
            cep: {
                required: "Por favor, insira seu CEP."
            }
        }
    });
});
