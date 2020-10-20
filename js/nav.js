function main() {
    loadNav();
    function loadNav() {
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        // console.log(this)
        if (this.readyState === 4 ) {
          if (this.status !== 200) return;

          // Muat daftar tautan menu
          const nav = document.querySelector(".mobile_nav_item");
          nav.innerHTML = xhttp.responseText;
        };

        const loadNav = document.querySelectorAll(".mobile_nav_item a")
        loadNav.forEach( elm => {
          elm.addEventListener("click", e => {
            let page = e.target.parentElement.getAttribute("href").substr(1);
            loadPage(page);
          });
        });
      }
      xhttp.open("GET", "nav.html", true);
      xhttp.send();
    };

    let page = window.location.hash.substr(1);
    if (page === "") page = "home";
    loadPage(page);

    function loadPage(page) {
      if (page === "todo") {
           todoInput();
      } else if (page === "jadwal") {
          jadwal();
      } else if (page === "quot") {
          quotes();
      }
    }
  };

  document.addEventListener("DOMContentLoaded", main);