// document.ready(){
    $('.searchButton').on('click', function(event){
        event.preventDefault()
        
        var searchTerm = $('.searchTerm').val();
        // var recordCount = $('.recordCount').val();
    
    // https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey
    
    queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=JjjjUGVZqjMXl1fACexkIcrBmgjZKslq";
    console.log(searchTerm);
    // console.log(recordCount);
    
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
    
      })
    })

