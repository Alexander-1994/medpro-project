$(document).ready(function() {
    function valideForms(form) {                                                                                         
        $(form).validate({                                                                                               
            rules: {                                                                                                     
                name: {                                                                                                  
                    required: true,                                                                                      
                    minlength: 2                                                                                         
                },
                phone: 'required',
                email: { 
                    required: true,
                    email: true
                },
                company: 'required'
            },
            messages: {                                                                                                  
                name: {
                    required: "Enter your name",
                    minlength: jQuery.validator.format("Minimum number of letters - {0}")                              
                },
                phone: "Enter phone number",
                email: {
                    required: "Enter email",
                    email: "Invalid email address"
                },
                company: "Specify a company"
            }
        });
    };                                                                                        
    valideForms('#sending-data');
// 000000000000000000000000000000000000000000000000000000000000000000000000000
    $('input[name=phone]').mask("+7 (999) 999-99-99");      
// 000000000000000000000000000000000000000000000000000000000000000000000000000
    new WOW().init(); 

    $('.modal-window__close').on('click', function() {                                                            /* возьмем наш "крестик", пользователь будет кликать на него - выполнится функция: */
        $('.blackout, #ok').fadeOut('slow');                                                                      /* задний фон И все модальные окна становятся невидимыми - fadeOut (крестик будет закрывать окна и затемнение фона); медленная скорость отображения - 'slow' */
    });
// 000000000000000000000000000000000000000000000000000000000000000000000000000
    $('form').submit(function(e) {                                                                                        /* вначале мы обращаемся ко всем формам на сайте, далее событие sunbit - "когда инпуты прошли валидацию" (все обязательные поля корректно заполнены) - выполнится действие (функция с агрументом:) */
        e.preventDefault();                                                                                               /* отключ. станд. поведение браузера (обновление страницы после отправки форм).. Далее используем технологию AJAX - взаимодействие с сервером без перезагрузки страницы */
        if (!$(this).valid()) {                                                                                           /* если форма не прошла валидацию - мы не будем идти дальше в коде (пустые данные из форм на сервер отправляться не будут!) */
            return;
        }
        $.ajax({                                                                                                          /* метод ajax внутри jquery. Позволяет отправлять данные на сервер */
            type: "POST",                                                                                                 /* именно ОТПРАВКА данных на сервер */
            url: "mailer/smart.php",                                                                                      /* указываем, какой обработчик будет обрабатывать данную операцию. URl - куда отправляем запрос */
            data: $(this).serialize()                                                                                     /* данные, для отправки на сервер, this - работаем с конкретными данными из конкретной формы, serialize - метод для подготовки данных перед отправкой на сервер */    
        }).done(function() {                                                                                              /* ппосле выполнения операции (отправки формы) выполним еще действие */
            $(this).find("input").val("");                                                                                /* очистим все инпуты, т.к. у из значения(val) пустая строка: "" */
            $('.blackout, #ok').fadeIn('slow');                                                                           /* после отправки формы, модальное окно "Спасибо за заказ" и затемнение заднего фона становятся видимыми (появляются) slow-медленно */
            $('form').trigger('reset');                                                                                   /* в конце все формы на сайте должны обновиться(очиститься) */
        });
        return false;
    });   
    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.header__links'),
        menuItem = document.querySelectorAll('.header__li'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__links_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('header__links_active');
            })
        })
    })   
});    

