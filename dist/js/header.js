/*** HEADER ****/

$(document).ready(function () {

    /* Despliega el menu principal */
    $(".headerYPF .openmenu").click(function (e) {
        e.preventDefault();
        $(".headerYPF .menu").toggleClass("open");
        $(this).toggleClass("open");
        $('body').removeClass("headerYPF-overflow-loged").removeClass("headerYPF-overflow-logoff").toggleClass("headerYPF-overflow");
        $("#logedInfo, #loginModal, .headerYPF-overlay").removeClass("open");

        //Para Perfil Unificado: como est� visible men� header, oculta men� usuario si est� visible.
        var menuHeader = $(".headerYPF .menu.open");
        if (menuHeader.length > 0) {
            var verMenuUsuario = document.getElementsByClassName("resumen-offcanvas");
            if (verMenuUsuario[0].style.display == "block") {
                verMenuUsuario[0].style.display = "none";
            }
        }
        
    });

    /* Maneja los links desplegables */
    $('.headerYPF .linkmenu').click(function (e) {
        if ($(this).attr('href') == '' || $(this).attr('href') == '#') {
            e.preventDefault();
            $(this).toggleClass("active");
            $(this).find(".arrow").toggleClass("open");
            $(this).next('.submenu').toggleClass('open');
        }
    });

    /* Maneja los botones de la derecha */
    $(".headerYPF .nav-sec-link").click(function (e) {
        e.preventDefault();
        $(".headerYPF .nav-sec-desplegable").not($(this).next(".headerYPF .nav-sec-desplegable")).not($("#logedInfo.nav-sec-desplegable")).not($("#loginModal.nav-sec-desplegable")).removeClass("open");
        $(".headerYPF .arrow").not($(this).find(".headerYPF .arrow")).removeClass("open");
        $(".headerYPF .nav-sec-link").not($(this)).removeClass("active");

        /* Maneja el boton de buscar */
        if ($(this).hasClass("openbusc")) {
            $(".headerYPF").toggleClass("open");
        } else {
            $(".headerYPF").removeClass("open");
        }

        /* Maneja el boton de usuario logueado */
        if ($(this).hasClass("loged")) {
            $("#logedInfo").toggleClass("open");
            $(".headerYPF .menu").removeClass("open");
            $("body").removeClass("headerYPF-overflow").removeClass("headerYPF-overflow-logoff").toggleClass("headerYPF-overflow-loged");
        } else {
            $("#logedInfo").removeClass("open");
        }

        /* Maneja el boton de usuario deslogueado */
        if ($(this).hasClass("logoff")) {
            $("#loginModal").toggleClass("open");
            $(".headerYPF-overlay").toggleClass("open");
            $(".headerYPF .menu").removeClass("open");
            $('body').removeClass("headerYPF-overflow").removeClass("headerYPF-overflow-loged").toggleClass("headerYPF-overflow-logoff");
        } else {
            $("#loginModal").removeClass("open");
            $(".headerYPF-overlay").removeClass("open");
        }

        //$(this).next(".headerYPF .nav-sec-desplegableLogin").toggleClass("hiden").toggleClass("open");
        $(this).next(".headerYPF .nav-sec-desplegable").toggleClass("open");
        $(this).find(".headerYPF .arrow").toggleClass("open");
        $(this).toggleClass("active");
    });

    /* Manipula el listado de imagenes */
    $(".headerYPF .sitioslist li a").hover(function () {
        $(".headerYPF .sitioslist .imagen").attr("src", $(this).data("imagen"));
    });

});  