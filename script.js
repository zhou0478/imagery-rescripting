document.addEventListener('DOMContentLoaded', function () {
  const steps = Array.from(document.querySelectorAll('.step'));
  let currentStep = 0;

  const showStep = (index) => {
    steps.forEach((step, i) => {
      step.classList.toggle('active', i === index);
    });
  };

  showStep(currentStep);

  // Navigation buttons
  document.getElementById('next-1').addEventListener('click', () => {
    const input = document.getElementById('input-step-1');
    if (input.value.trim() !== '') {
      currentStep = 1;
      showStep(currentStep);
    } else {
      alert('Please fill in the textarea before proceeding.');
    }
  });

  document.getElementById('back-2').addEventListener('click', () => {
    currentStep = 0;
    showStep(currentStep);
  });

  document.getElementById('next-2').addEventListener('click', () => {
    const input = document
::contentReference[oaicite:0]{index=0}
 
