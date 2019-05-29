$(document).ready(function() {
    $(".gold").css({
      'height': ($(".bullets").height()+ 100 + 'px'),
      'width': ($(".bullets").width()+ 30 + 'px')
    });
    $(".projects").css({
      'margin-top': $(window).height() + $('.bio').height() + 100 + 'px'
    });
    $(".contact").css({
      'margin-top': ($(window).height() * .95) + $('.gold').height() + 180 + 'px'
    });
    console.log('window', $(window).height());

  });

$(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    $('.bio, .projects').css({
        'transform' : `translate(0px, ${wScroll / 24}vh )`
    })
    $('.bullets').css({
        'transform' : `translate(0px, ${wScroll / 20}px )`
    })
    $('.contact').css({
        'transform' : `translate(0px, ${wScroll / 7.33}px )`
    })
    

    if($('.gold').attr('top') > 0){
        $('.gold').css({
            'transform' : `translate(0px, ${wScroll / 5}px )`
        })
    }

    if(wScroll < 509){
        $('.line-1').css({
            'transform' : `translate(${wScroll / 2}px, 0px)`
        })
    }
    if(wScroll >= 509 && wScroll < 978){
        $('.line-1').css({
            'transform' : `translate(${wScroll / 2}px, 0px)`
        })
        $('.line-2').css({
            'transform' : `translate(${(wScroll - 509) / 2}px, 0px)`
        })
    }
    
    if(wScroll >= 978){
        $('.line-1').css({
            'transform' : `translate(${wScroll / 2}px, 0px)`
        })
        $('.line-2').css({
            'transform' : `translate(${(wScroll - 509) / 2}px, 0px)`
        })
        $('.line-3').css({
            'transform' : `translate(${(wScroll - 978) / 2}px, 0px)`
        })
    }
    
    $('.h-right').css({
        'transform' : `translate(${(wScroll) / 2}px, 0px)`
    })


    console.log(wScroll);
})