// public/js/script.js

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


function scrollFilters(amount) {
    const filters = document.getElementById('filters');
    filters.scrollBy({ left: amount, behavior: 'smooth' });
    setTimeout(updateArrows, 300);
}

function updateArrows() {
    const filters = document.getElementById('filters');
    const leftBtn = document.querySelector('.scroll-btn.left');
    const rightBtn = document.querySelector('.scroll-btn.right');

    leftBtn.style.display = filters.scrollLeft > 0 ? 'block' : 'none';
    rightBtn.style.display =
        filters.scrollLeft + filters.clientWidth < filters.scrollWidth ? 'block' : 'none';
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('filters').addEventListener('scroll', updateArrows);
    updateArrows();
});



document.addEventListener("DOMContentLoaded", () => {
  const filters = document.getElementById('filters');
  if (filters) {
    filters.addEventListener('scroll', updateArrows);
    updateArrows();
  }

  const listingForm = document.getElementById('listing-form');
  const categoryGroup = document.getElementById('category-group');

  if (listingForm && categoryGroup) {
    const checkboxes = categoryGroup.querySelectorAll('input[type="checkbox"]');
    const feedbackDiv = categoryGroup.querySelector('.invalid-feedback');

    listingForm.addEventListener('submit', (event) => {
      const isOneChecked = Array.from(checkboxes).some(cb => cb.checked);
      if (!isOneChecked) {
        event.preventDefault();
        event.stopPropagation();
        feedbackDiv.style.display = 'block';
      } else {
        feedbackDiv.style.display = 'none';
      }
    });

    // Hides the error message as soon as the user checks a box.
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        if (Array.from(checkboxes).some(cb => cb.checked)) {
          feedbackDiv.style.display = 'none';
        }
      });
    });
  }
});



document.addEventListener("DOMContentLoaded",()=>{
  let taxSwitch =document.getElementById("flexSwitchCheckDefault");
   taxSwitch.addEventListener("click",()=>{
    let taxInfo = document.getElementsByClassName("tax-info");
    for(info of taxInfo){
      if(info.style.display!="inline"){
      info.style.display ="inline";
          }
          else{
            info.style.display ="none"
          }   
         }
     });
});
