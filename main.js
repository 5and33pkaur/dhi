$(document).ready(function () {
    $(function () {
        $('#nav').click(function () {
            $('#nav ul').css('display', 'block');
        });
    });

    $(function (){
        if( $(window).width()>1601){
            $('.partner_wrapper').addClass('container');
        }else{
            $('.partner_wrapper').removeClass('container');
        }
    });

    // $(function () {
    //     $(".DropdownLink").hover(function () {
    //         $('.dropdown1').removeClass('hidden');
    //     },function(){
    //         $('.dropdown1').addClass('hidden');
    //     });
    // });

    /*TABS RESOURCES*/
    $('.tabs .tabBlock span').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('.tabs .tabBlock span').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });

    // $("#nav ul li a").click(function () {
    //     $(this).addClass("active");
    //     $("#nav ul li a").not(this).removeClass("active");
    // });

    /* POPUP CONTACT*/
    $('.popUp_close').click(function () {
        $('.fade').css('display', 'none');
    });

    /*TABS RESOURCES*/
    /*CONSUMER TAB*/
    $('.tablinks').click(function () {
        var tab_id = $(this).attr('data-tab');

        // $('.tablinks').removeClass('btnactive1');
        $('.tabcontent').removeClass('active');

        $(this).addClass('btnactive1');
        $("#" + tab_id).addClass('active');
    });

    /*PRODUCER TAB*/
    $('.tablinks1').click(function () {
        var tab_id = $(this).attr('data-tab');

        // $('.tablinks1').removeClass('btnactive2');
        $('.tabcontent').removeClass('active1');

        $(this).addClass('btnactive2');
        $("#" + tab_id).addClass('active1');
    });
    /*ANALYST TAB */
    $('.tablinks2').click(function () {
        var tab_id = $(this).attr('data-tab');

        // $('.tablinks2').removeClass('btnactive3');
        $('.tabcontent').removeClass('active2');

        $(this).addClass('btnactive3');
        $("#" + tab_id).addClass('active2');
    });
    /*ADMIN TAB */
    $('.tablinks3').click(function () {
        var tab_id = $(this).attr('data-tab');

        // $('.tablinks3').removeClass('btnactive4');
        $('.tabcontent').removeClass('active3');

        $(this).addClass('btnactive4');
        $("#" + tab_id).addClass('active3');
    });
});

