import Form from './js/form';

(() => {
  Array.from(document.querySelectorAll('.form')).forEach((form) => {
    new Form(form);
  });
})();
