$(document).ready(function(){
    $.ajax({
        url: "https://api.github.com/repos/c1nde/c1nde.github.com",
        dataType: 'jsonp',
        error: function (err) {
            $(".git-status").html('<p>Sorry, no info</p>');
        },
        success: function(data) {
            var date = data.data.updated_at.slice(0,10).split('-').reverse().join('.');
            $(".git-status").html('<p> updated_at: ' + date +'</p>');
        }
    });
});