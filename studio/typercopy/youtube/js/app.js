function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}

$(function() {
    $("form").on("submit", function(e) {
       e.preventDefault();
         $(document).on("keydown", function(a) {
            //space key
            if (a.which == 32) {
              // prepare the request
              var request = gapi.client.youtube.search.list({
                   part: "snippet",
                   type: "video",
                   q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
                   maxResults: 1,
                   order: "date"
              }); 

              // execute the request
              request.execute(function(response) {
                 var results = response.result;
                 $("#results").html("");
                 $.each(results.items, function(index, item) {
                   $.get("tpl/item.html", function(data) {
                       $("#results").append(tplawesome(data, [{"videoid":item.id.videoId}])); //"title":item.snippet.title,
                   });
                 });
                 resetVideoHeight();
              });
              return;
            }
              
        });
    });
    
    $(window).on("resize", resetVideoHeight);
});

function resetVideoHeight() {
    $(".video").css("height", $("#results").width() * 9/16);
}

function init() {
    gapi.client.setApiKey("AIzaSyB5vBH0Y4SUC-9WY6IFGqVnETMMeOlQbEA");
    gapi.client.load("youtube", "v3", function() {
        // youtube api is ready
    });
}