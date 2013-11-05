/// <reference path="jquery-2.0.3-vsdoc.js" />
/// <reference path="jquery-ui-vsdoc_1.js" />
/// <reference path="jquery.mCustomScrollbar.js" />
/// <reference path="jquery.uniform.min.js" />



$(document).ready(function () {

    $("#fullcal").fullCalendar({
        events: [
                        'https://www.google.com/calendar/feeds/mesquitefirstcotn%40gmail.com/public/basic',
                        'https://www.google.com/calendar/feeds/en.usa%23holiday%40group.v.calendar.google.com/public/basic'
                    ]
    });

    var $mainContent = $('.maincontent');
    var $menuitem = $('.menuitem');

    $(".dropdown-toggle").dropdown(function (e) {
        e.preventDefault();
    });

    $("#servicetabs").tabs();
    //Starts the home screen div when document loads//
    $mainContent.show('fade', 'slow').load("../Pages/home.html", function () {
        $mainContent.mCustomScrollbar({
            scrollButtons: { "enable": true },
            scrollInertia: 0
        });
    });
    /************************************************/


    //Hides current content and shows clicked content// 


    $(".menuitem, .logo").click(function (e) {

        var clickid = $(this).attr('id');
        var url = "../Pages/" + clickid + ".html";
        e.preventDefault();
        //Hide and show pages in the main
        $mainContent.hide('fade', 'slow', function () {

            if (clickid != 'logo') {
                $mainContent.show('fade', 'slow').load(url, function () {

                    $mainContent.mCustomScrollbar({
                        scrollButtons: { enable: true },
                        scrollInertia: 0
                    });
                });
            }

        }).empty();
    });



});

