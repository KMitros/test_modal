$(document).ready(function(){
    $(".buttonSign").magnificPopup({
        fixedContentPos: true
    });

    $(".modal").on("click", ".tab", function(){
        $(".modal").find(".active").removeClass('active');

        $(this).addClass("active");

        $(".tab-item").eq($(this).index()).addClass("active");
    });

    $(".buttonSign.-signIn").on("click", function(){
        $(".modal").find(".active").removeClass('active');
        $(".tab.-signIn").toggleClass('active');
        $(".tab-item.-logIn").toggleClass('active');
    });

    $(".buttonSign.-signUp").on("click", function(){
        $(".modal").find(".active").removeClass('active');
        $(".tab.-registr").toggleClass('active');
        $(".tab-item.-registr").toggleClass('active');
    });

    $(".linkRestorePass").on("click", function(){
        $(".modal").find(".active").removeClass('active');
        $(".tab.-signIn").toggleClass('active');
        $(".tab-item.-restore").toggleClass('active');
    });

    $(".linkBackToLog").on("click", function(){
        $(".modal").find(".active").removeClass('active');
        $(".tab.-signIn").toggleClass('active');
        $(".tab-item.-logIn").toggleClass('active');
    });


});