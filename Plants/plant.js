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
  }

//plant link to open bigger and exit control
   const plantImageLinks = document.querySelectorAll('.plant-image-link');
   plantImageLinks.forEach(link => {
   link.addEventListener('click', e => {
   e.preventDefault();
   const imageUrl = link.href;
   const fullImage = document.createElement('div');
   fullImage.classList.add('full-image');
   fullImage.innerHTML = `
     <img src="${imageUrl}" alt="Plant Image"/>
     <button class="exit-button">&#x2716;</button>
     <div class="zoom-controls">
     <button class="zoom-in">&plus;</button>
     <button class="zoom-out">&#8722;</button>
    
    
   </div>
   </div>
   `;
   document.body.appendChild(fullImage);

   const img = fullImage.querySelector('img');
   let scale = 1;
// const container = fullImage.querySelector('.scroll-controls');

   const zoomInButton = fullImage.querySelector('.zoom-in');
   zoomInButton.addEventListener('click', () => {
     scale += 0.1;
     img.style.transform = `scale(${scale})`;
   });

   const zoomOutButton = fullImage.querySelector('.zoom-out');
   zoomOutButton.addEventListener('click', () => {
     if (scale > 0.2) {
       scale -= 0.1;
       img.style.transform = `scale(${scale})`;
     }
   });

   const exitButton = fullImage.querySelector('.exit-button');
   exitButton.addEventListener('click', () => {
     fullImage.remove();
   });

  


   });
   });
//plant link to open bigger and exit control
 


 


