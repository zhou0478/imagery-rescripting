const instructions = [
  `Step 1:\n\nTry to think about the earliest event you can remember of an unpleasant body experience where you felt ashamed or embarrassed of your body or how your body looks. It could be something that happened to you when you were a child, or a teenager.

Now take a moment to close your eyes and imagine this earliest event as if it is happening right now. Notice the thoughts and feelings that come up for you.

Now, in a few sentences, write about this earliest event as if it is happening now. Use "I" language. Include detail like where you are, who you're with, what you see, and what you feel.`,
  
  `Step 2:\n\nThink about the same memory again. This time, imagine you are someone else watching your younger self go through the event from the outside.

Now, write what someone else would see if they were watching your younger self. Use third-person language (e.g., “Sarah is in the change room…”) and describe everything you notice from this outside perspective.`,

  `Step 3:\n\nNow imagine you are your younger self again, but this time your wiser, older self is in the room with you. They can comfort you, talk to others, or do anything helpful.

Now, write about the event again. Use "I" language for yourself and describe what your wiser, older self does. For example, “I’m in the change room… Older me puts a hand on my shoulder and reminds me this moment won’t define me.”`
];

let currentStep = 0;
const userResponses = ["", "", ""];

const instructionText = document.getElementById("instruction-text");
const inputBox = document.getElementById("step-input");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const finishBtn = document.getElementById("finishBtn");
const summarySection = document.getElementById("summary");
const summaryList = document.getElementById("summaryList");

function showStep(step) {
  instructionText.textContent = "";
  typeWriter(instructions[step], 0);
  inputBox.value = userResponses[step];

  backBtn.classList.toggle("hidden", step === 0);
  nextBtn.classList.toggle("hidden", step === instructions.length - 1);
  finishBtn.classList.toggle("hidden", step !== instructions.length - 1);
}

function typeWriter(text, i) {
  if (i < text.length) {
    instructionText.textContent += text.charAt(i);
    setTimeout(() => typeWriter(text, i + 1), 20);
  }
}

backBtn.addEventListener("click", () => {
  userResponses[currentStep] = inputBox.value;
  currentStep--;
  showStep(currentStep);
});

nextBtn.addEventListener("click", () => {
  userResponses[currentStep] = inputBox.value;
  currentStep++;
  showStep(currentStep);
});

finishBtn.addEventListener("click", () => {
  userResponses[currentStep] = inputBox.value;
  document.getElementById("step-container").classList.add("hidden");
  summarySection.classList.remove("hidden");

  summaryList.innerHTML = "";
  userResponses.forEach((text, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>Step ${i + 1} Reflection:</strong><br>${text}`;
    summaryList.appendChild(li);
  });
});

showStep(currentStep);
