(() => {
  const wireframeGenerator = document.querySelector('#wireframe-project-generator');
  if (wireframeGenerator) {
    wireframeGenerator.addEventListener('submit', (e) => {
      e.preventDefault();
      const selectedOption = wireframeGenerator.querySelector('select').selectedOptions[0];
      if (!selectedOption.disabled) {
        window.open(selectedOption.value, '_blank');
      }
    });
  }
})();
