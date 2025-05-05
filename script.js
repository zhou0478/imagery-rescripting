let currentStep = 1;
document.getElementById("step1").classList.add("active");

function nextStep(stepNumber) {
  const current = document.getElementById(`step${stepNumber}`);
  const next = document.getElementById(`step${stepNumber + 1}`);
  const textarea = current.querySelector("textarea");
  if (!textarea.value.trim()) {
    alert("Please fill this out before continuing.");
    return;
  }
  current.classList.remove("active");
  next.classList.add("active");
}

document.getElementById("woopForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const answers = Array.from(document.querySelectorAll("textarea")).map(t => t.value.trim());
  const summaryList = document.getElementById("summaryList");
  summaryList.innerHTML = `
    <li><strong>Wish:</strong> ${answers[0]}</li>
    <li><strong>Outcome:</strong> ${answers[1]}</li>
    <li><strong>Obstacle:</strong> ${answers[2]}</li>
    <li><strong>Plan:</strong> ${answers[3]}</li>
  `;

  document.getElementById("woopForm").classList.add("hidden");
  document.getElementById("results").classList.remove("hidden");
});
