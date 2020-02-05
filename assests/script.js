//globals
var wrapper = document.querySelector(".wrapper");
var footer = document.querySelector(".footer");

  $('.searchButton').on('click', function(event){
    event.preventDefault()
    var searchTerm = $('.searchTerm').val();
    var recordCount = $('#recordCount').val();
    addArticles(searchTerm, recordCount);
  })


  function addArticles(searchTerm, numofRec){
    queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=JjjjUGVZqjMXl1fACexkIcrBmgjZKslq";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

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
}