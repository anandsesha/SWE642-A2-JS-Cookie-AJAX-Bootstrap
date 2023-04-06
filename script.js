// Below function will load the content of each page into the main section of the current page when the link is clicked.
function loadPage(page) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("main").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", page, true);
    xhttp.send();
  }

  document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("#nav a");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function(e) {
        e.preventDefault();
        var page = this.getAttribute("href");
        loadPage(page);
      });
    }
  });