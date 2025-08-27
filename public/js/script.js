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