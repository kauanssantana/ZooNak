$(document).ready(function () {
    // Inicializa o slider usando Slick
    $('.calendario').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    });

    // Inicializa o calendário
    $('.datepicker').datepicker({
        dateFormat: 'dd/mm/yy',
        minDate: 0,
        beforeShowDay: function (date) {
            const day = date.getDay();
            return [(day !== 0 && day !== 7)]; // Apenas segunda a sábado
        },
        showOtherMonths: true,
        selectOtherMonths: true,
        dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
                     'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 
                          'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    });

    // Alternar entre mostrar e esconder a caixa de agendamento
    $('.toggle-calendar-btn').click(function () {
        let calendarContainer = $(this).next('.calendar-container');
        if (calendarContainer.length) {
            calendarContainer.slideToggle();
        } else {
            console.error('Calendar container not found!');
        }
    });


    $('.book-phone').on('input', function() {
        // Remove tudo que não for número (letras, símbolos)
        var rawValue = $(this).val().replace(/\D/g, ''); 
        
        // Limita a quantidade máxima de números em 11 (DDD + 9 dígitos)
        rawValue = rawValue.substring(0, 11);
        
        var formattedValue = rawValue;
        
        // Aplica a formatação enquanto digita
        if (rawValue.length > 2) {
            formattedValue = '(' + rawValue.substring(0, 2) + ') ' + rawValue.substring(2);
        }
        if (rawValue.length > 7) {
            // Verifica se tem 10 ou 11 dígitos para colocar o traço no lugar certo
            if (rawValue.length === 11) {
                formattedValue = '(' + rawValue.substring(0, 2) + ') ' + rawValue.substring(2, 7) + '-' + rawValue.substring(7, 11);
            } else {
                formattedValue = '(' + rawValue.substring(0, 2) + ') ' + rawValue.substring(2, 6) + '-' + rawValue.substring(6, 10);
            }
        }
        
        // Devolve o valor formatado para o campo
        $(this).val(formattedValue);
    });

    // Função de animação de erro no botão
    function showErrorButton(button, message) {
        let originalText = button.text();
        button.text(message);
        button.css('background-color', '#e74c3c'); // Fica vermelho
        
        setTimeout(function(){
            button.text(originalText);
            button.css('background-color', ''); // Volta a cor original via CSS
        }, 2000);
    }

    // Ação ao confirmar o agendamento
    $('.confirm-btn').click(function () {
        let container = $(this).parent('.calendar-container');
        const selectedDate = $(this).siblings('.datepicker').datepicker('getDate');
        
        // Captura os valores dos campos
        let name = container.find('.book-name').val().trim();
        let email = container.find('.book-email').val().trim();
        let phone = container.find('.book-phone').val().trim();
        let confirmBtn = $(this);

        // Validação dos Campos Vazios
        if (!name || !email || !phone) {
            showErrorButton(confirmBtn, 'Preencha todos os dados!');
            return; 
        }

        // Validação do Formato do E-mail
        // Essa RegEx verifica se tem texto, uma "@", mais texto, um "." e mais texto no final
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showErrorButton(confirmBtn, 'E-mail inválido!');
            return;
        }
        
        // Validação do Celular (10 ou 11 números formatados)
        if (phone.length < 14) {
            showErrorButton(confirmBtn, 'Celular inválido!');
            return;
        }

        // Validação da Data
        if (!selectedDate) {
            showErrorButton(confirmBtn, 'Selecione um dia!');
            return; 
        }

        // Sucesso! Tudo preenchido corretamente.
        const formattedDate = $.datepicker.formatDate('dd/mm/yy', selectedDate);
        
        let mainBtn = container.prev('.toggle-calendar-btn');
        
        // Atualiza o botão principal
        mainBtn.html('<i class="fa fa-check"></i> Agendado para ' + formattedDate);
        mainBtn.css({
            'background-color': '#2ecc71',
            'color': 'white',
            'border-color': '#27ae60'
        });
        
        // Limpa os campos após agendar
        container.find('input').val('');
        
        // Esconde o container
        container.slideUp(); 
    });
});