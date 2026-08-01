document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.mobile-toggle');

  if (toggle) {
    toggle.addEventListener('click', function () {
      header.classList.toggle('open');
    });
  }

  var dropdownParent = document.querySelector('.has-dropdown');
  if (dropdownParent) {
    var dropdownLink = dropdownParent.querySelector(':scope > a');
    dropdownLink.addEventListener('click', function (e) {
      if (window.innerWidth <= 980) {
        e.preventDefault();
        dropdownParent.classList.toggle('open');
      }
    });
  }
});
