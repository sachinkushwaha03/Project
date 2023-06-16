// index page for section two effect
$(".link1").on('click', function () {
    $(this).parent().toggleClass("showContent");    

    var replaceText = $(this).parent().hasClass("showContent") ? "Read Less" : "Read More";
    $(this).text(replaceText);
});

// jawa-yezdi-nomads for section twenty-One

function enter(color){
    color.style.backgroundColor = '#131313';
}

function leave(color){
    color.style.backgroundColor = '#242323';
}



