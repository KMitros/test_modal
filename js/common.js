$(document).ready(function(){
    $(".button").magnificPopup({
        fixedContentPos: true
    });


    $(".hide").click(function(e){
        if ($(e.target).is('.mfp-close')) return;
        if ($(e.target).is('a')) return;
        return false;
    });


    $('.button-submit').click(function() {
        let input = $(".form-input.-mail");
        let pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if(input.val() !== '') {
            if(pattern.test(input.val())){
                $(".error.-mail").css({'display' : 'none'});
            }else{
                $(".error.-mail").css({'display' : 'block'});
            };
        }else{
            $(".error.-mail").css({'display' : 'block'});
        };
    });

    $('.button-submit').click(function() {
        let input = $(".form-input.-name");
        let pattern = /^([a-zA-Z]{1})[a-zA-Z0-9-_\.]{2,20}$/;
        if(input.val() !== '') {
            if(pattern.test(input.val())){
                $(".error.-name").css({'display' : 'none'});
            }else{
                $(".error.-name").css({'display' : 'block'});
            };
        }else{
            $(".error.-name").css({'display' : 'block'});
        };
    });

    $('.button-submit').click(function() {

        let pass = document.getElementById('pass1');
        let confirmPass = document.getElementById('pass2');
        let pattern = /^(?=.*[A-Za-z])(?=.*\d).{3,18}$/;
        console.log(pattern.test(pass.value));
        if(pattern.test(pass.value)) {
            if(pass.value === confirmPass.value){
                $(".error.-password").css({'display' : 'none'});
            }else{
                $(".error.-password").css({'display' : 'block'});
            }
        }else{
            $(".error.-password").css({'display' : 'block'});
        };
    });



    $('.hide').click(function(){
        let type = $('.form-input.-password').attr('type') == "text" ? "password" : 'text',
            c = $(this).text() == "Hide" ? "Show" : "Hide";
        $(this).text(c);
        $('.form-input.-password').prop('type', type);
    });


    $(".modal").on("click", ".tab", function(){
        $(".modal").find(".active").removeClass('active');

        $(this).addClass("active");

        $(".tab-item").eq($(this).index()).addClass("active");
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
    });


    $(".link.-backToLog").on("click", function(){
        $(".modal").find(".active").removeClass('active');
        $(".tab.-signIn").toggleClass('active');
        $(".tab-item.-logIn").toggleClass('active');
    });




});