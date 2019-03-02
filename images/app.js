var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=QgRwxNAag4UBD6kjrUIJJv7F0P7XJe5E";
     $.ajax({
       url: queryURL,
       method: "GET"
     })
       .then(function(response) {
           console.log(response);

       })