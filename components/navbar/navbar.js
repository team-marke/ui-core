import Offcanvas from 'bootstrap/js/dist/offcanvas';

if (document.querySelector('.offcanvas')) {
  document.querySelectorAll('.offcanvas').forEach((offcanvasEl) => {
    new Offcanvas(offcanvasEl);
  });
}
