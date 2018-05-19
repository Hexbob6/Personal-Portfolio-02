$.getJSON('content.json', function (data) {
    
    "use strict";
    
    var content = data.content;
    
    /*
    
    //OLD CODE TO BE DELETED
    $('#1 img').attr('src', content[0].thumbImg);
    $('#2 img').attr('src', content[1].thumbImg);
    $('#3 img').attr('src', content[2].thumbImg);
    
    
    $('#1 h1').html(content[0].name);
    $('#2 h1').html(content[1].name);
    $('#3 h1').html(content[2].name);
    

    $('#1 p').html(content[0].thumbDescription);
    $('#2 p').html(content[1].thumbDescription);
    $('#3 p').html(content[2].thumbDescription);
    
    */
    
    content.forEach(e => { //arrow selector, 'for each element in content, do this'
        
        $("#" + e.id + " .content img").attr('src', e.thumbImg);
        $("#" + e.id + " .thumb-text h1").html(e.name);
        $("#" + e.id + " .thumb-text p").html(e.thumbDescription);
        
    });
    
    
    
    /*$('.small-box').click(function () {
        
        //Within 'content' find the objects. From all of the found objects, output the one where the object id is the same as the <div> id. Make this singular object referenced as 'c'.
        var c = content.find(obj => obj.id == this.id);
        var boxId = c.id;
        
        if (c) {
            
            $('.quick-view img').fadeOut(100 , function () {
                $(this).attr('src', c.largeImg).fadeIn(200);
            });
            
//            console.log(c.largeImg, boxId)    
        }
        
    }); */
    
    
//    console.log(content[0].thumbImg);
    
});



$('.small-box').hover(
    
    function () {
        
        "use strict";
        
        $(this).find('.box-outline').css({
            'border': '1vw solid #57e1ca'
        });
        
        $(this).find('.content img').css({
            '-webkit-filter': 'blur(10px) saturate(0%)'
        });
        
        $(this).find('.thumb-text').css({
            'transform' : 'translateY(0)'
        });
        
    },
    
    function () {
        
        "use strict";
        
        $(this).find('.box-outline').css({
            'border': '0 solid #57e1ca'
        });
        
        $(this).find('.content img').css({
            '-webkit-filter': 'blur(0) saturate(100%)'
        });
        
        
        var thumbTextHeight = $(this).find('.thumb-text').outerHeight();
        
        $(this).find('.thumb-text').css({
            'transform' : 'translateY(' + thumbTextHeight + 'px'
        });
        
    }
);


$('.overlay-darken').on("click", function () {
    
    $(this).fadeOut(200);
    $('.popup-overlay').fadeOut(200);
    
});

$(document).on('load', 'resize', function (){
    
    "use strict";
    
    var screenWidth = $(this).width(),
        screenHeight = $(this).height();
    
    console.log(screenWidth + " * " + screenHeight + "px");
    
});