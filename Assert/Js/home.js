  // Get the button
  let topbtn = document.getElementById("gotop");
        
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topbtn.style.display = "block";
    } else {
      topbtn.style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
 

 
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
  var clearBtn = document.getElementById("clearBtn");

    var input, filter, ul, li, a, i;


    clearBtn.addEventListener("click", function() {
      input.value = "";
      filterFunction();
    });

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
        
        
      } else {
        a[i].style.display = "none";
       

      }
    }

    // window.location.reload();
  // Reload the page after the search results are filtered
  }

 //disable inspect element menu

  document.onkeydown = (e) => {
    if(e.keyCode == 123) {
            return false;
        }
    if (e.ctrlKey && e.shiftKey && e.key == 'I') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'C') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'J') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.key == 'U') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'f12') {
      e.preventDefault();
  }
};

 //disable inspect element menu
 