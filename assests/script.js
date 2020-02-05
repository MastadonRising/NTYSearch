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

    for (var i = 0; i < numofRec; i++) {
        var container = document.createElement("div");
        var containerBody = document.createElement("div");
        var header = document.createElement("h5");
        var para = document.createElement("p");
        header.classList.add("mt-0");
        header.innerHTML = response.response.docs[i].headline.main;
        containerBody.classList.add("media-body");
        container.classList.add("media");
        para.innerHTML = response.response.docs[0].abstract;
        wrapper.insertBefore(container, footer);
        container.appendChild(containerBody);
        containerBody.appendChild(header);
        containerBody.appendChild(para);
    }
  })