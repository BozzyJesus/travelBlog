$(document).ready(function () {
    // Owl-carousel
    $(".slide-one").owlCarousel({
        autoplay: true,
        margin: 50,
        responsive: {
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        },
        loop: true,
        nav: true,
        navText: ["<i class='fa fa-chevron-left fa-3x'style='color:grey'></i>", "<i class='fa fa-chevron-right fa-3x'style='color:grey'></i>"]
    });
    //Scroll
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });



});


// Check for hash value in URL

    var hash = window.location.hash.substr(1);

    var href = $('#loading').each(function () {

        var href = $(this).attr('href');

        if (hash == href.substr(0, href.length - 5)) {

            var toLoad = hash + '.html #content';

            $('#content').load(toLoad)

        }

    });


    $('#loading').click(function () {


        var toLoad = $(this).attr('href') + ' #content';

        $('#content').hide('fast', loadContent);

        $('#load').remove();

        $('#wrapper').append('<span id="load">LOADING...</span>');

        $('#load').fadeIn('normal');

        window.location.hash = $(this).attr('href').substr(0, $(this).attr('href').length - 5);

        function loadContent() {

            $('#content').load(toLoad, '', showNewContent())

        }

        function showNewContent() {

            $('#content').show('normal', hideLoader());

        }

        function hideLoader() {

            $('#load').fadeOut('normal');

        }

        return false;


    });
var images = {
    image: [
        {src: '../image/photos/img_1.jpg', alt: 'Project 2'}
        , {src: '../image/photos/img_2.jpg', alt: 'Project 2'}
        , {src: '../image/photos/img_3.jpg', alt: 'Project 3'}
        , {src: '../image/photos/img_4.jpg', alt: 'Project 4'}
        , {src: '../image/photos/img_5.jpg', alt: 'Project 5'}
        , {src: '../image/photos/img_6.jpg', alt: 'Project 6'}
        , {src: '../image/photos/img_7.jpg', alt: 'Project 7'}
        , {src: '../image/photos/img_8.jpg', alt: 'Project 8'}
        , {src: '../image/photos/img_9.jpg', alt: 'Project 9'}
        , {src: '../image/photos/img_10.jpg', alt: 'Project 10'}
        , {src: '../image/photos/img_11.jpg', alt: 'Project 11'}
        , {src: '../image/photos/img_12.jpg', alt: 'Project 12'}
        , {src: '../image/photos/img_13.jpg', alt: 'Project 13'}
        , {src: '../image/photos/img_14.jpg', alt: 'Project 14'}
        , {src: '../image/photos/img_15.jpg', alt: 'Project 15'}
        ]
};

// Show Modal Image
function onClick(element) {
    document.getElementById("img").src = element.src;
    document.getElementById("modal").style.display = "block";
}


