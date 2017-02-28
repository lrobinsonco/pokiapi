$('document').ready(function(){
    $('button').click(function(){
        getMovie();
    });
});

function getMovie(){
    var url = "http://www.omdbapi.com/?t=";
    url += $('input').val();
    console.log(url);
    $.get(url, function(data){
        console.log(data);
        var title = data.Title;
        var poster = data.Poster;
        updatePage(title, poster);
        showMessage();
    });
}

function updatePage(title, poster){
    $("body").append(title);
    $("body").append('<img src="'+poster+'">');
}

function showMessage(){
    $("body").append("Cool movie, bro");
}
