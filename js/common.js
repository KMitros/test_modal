$(document).ready(function(){
    $(".button").magnificPopup({
        fixedContentPos: true
    });


    $(".hide").click(function(e){
        if ($(e.target).is('.mfp-close')) return;
        if ($(e.target).is('a')) return;
        return false;
    });

    $('form').submit(function(){
        let currentForm = $(this);
        let email = currentForm[0].mail;
        let name = currentForm[0].name;
        let pass = currentForm[0].password;
        let confirmPass = currentForm[0].confirmPassword;

        let pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

        if(email.value !== '') {

            if(pattern.test(email.value)){

                $(".error.-mail").addClass('hidden');
            }else{
                $(".error.-mail").removeClass('hidden');
                return false;
            };
        }else{
            $(".error.-mail").removeClass('hidden');
            return false;
        };

        if(name != undefined){

            let pattern = /^([a-zA-Z]{1})[a-zA-Z0-9-_\.]{2,20}$/;

            if(name.value !== '') {
                if(pattern.test(name.value)){
                    $(".error.-name").addClass('hidden');
                }else{
                    $(".error.-name").removeClass('hidden');
                    return false
                };
            }else{
                $(".error.-name").removeClass('hidden');
                return false;
            };
        };

        if(pass != undefined){

            let pattern = /^(?=.*[A-Za-z])(?=.*\d).{3,18}$/;
            if(pattern.test(pass.value)) {
                if(pass != undefined && confirmPass != undefined){
                    if(pass.value === confirmPass.value){
                        $(".error.-password").addClass("hidden");
                    }else{
                        $(".error.-password").removeClass("hidden");
                        return false;
                    }
                }
            }else{
                $(".error.-password").removeClass("hidden");
                return false;
            };
        }

    });


    $('.hide.-pass').click(function(){
        let type = $('.form-input.-password').attr('type') == "text" ? "password" : 'text',
            c = $(this).text() == "Hide" ? "Show" : "Hide";
        $(this).text(c);
        $('.form-input.-password').prop('type', type);
    });

    $('.hide.-confirmPass').click(function(){
        let type = $('.form-input.-confirmPass').attr('type') == "text" ? "password" : 'text',
            c = $(this).text() == "Hide" ? "Show" : "Hide";
        $(this).text(c);
        $('.form-input.-confirmPass').prop('type', type);
    });


    $(".modal").on("click", ".tab", function(){
        $(".modal").find(".active").removeClass('active');

        $(this).addClass("active");

        $(".tab-item").eq($(this).index()).addClass("active");
        $(".error").addClass("hidden");
    });


    $(".button.-signIn").on("click", function(){
        $(".modal").find(".active").removeClass('active');
        $(".tab.-signIn").toggleClass('active');
        $(".tab-item.-logIn").toggleClass('active');
    });


    $(".button.-signUp").on("click", function(){
        $(".modal").find(".active").removeClass('active');
        $(".tab.-registr").toggleClass('active');
        $(".tab-item.-registr").toggleClass('active');
    });


    $(".link.-restorePass").on("click", function(){
        $(".modal").find(".active").removeClass('active');
        $(".tab.-signIn").toggleClass('active');
        $(".tab-item.-restore").toggleClass('active');
        $(".error").addClass("hidden");
    });


    $(".link.-backToLog").on("click", function(){
        $(".modal").find(".active").removeClass('active');
        $(".tab.-signIn").toggleClass('active');
        $(".tab-item.-logIn").toggleClass('active');
    });

});