//globals
var wrapper = document.querySelector(".wrapper");
var footer = document.querySelector(".footer");
var searchTerm = "election"; // this will get user input later
var numofRec = 5; // this will get user input later

// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey

queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=JjjjUGVZqjMXl1fACexkIcrBmgjZKslq";


$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      console.log(response.response.docs[0])
    console.log(response.response.docs[0].headline.main);
    console.log(response.response.docs[0].abstract);

    for (var i = 0; i < numofRec.length; i++) {
        var container = document.createElement("div");
        container.classList.add("media");
        wrapper.insertBefore(container, footer);
    }
  })