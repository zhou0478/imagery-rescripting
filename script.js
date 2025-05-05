const instructionBox = document.getElementById("instructions");
const form = document.getElementById("imageryForm");
const textarea = document.getElementById("userInput");
const summary = document.getElementById("summary");
const summaryList = document.getElementById("summaryList");

const steps = [
  `People with body image issues often say that memories of early negative appearance experiences, like being teased about how they look, can still affect how they feel about their body, even years later. These negative images can get ‘stuck’ in our minds.
Now, we can't change what happened, but these past experiences don’t have to continue to impact our lives today.

With a strategy called ‘imagery updating’, we can look at those old memories in a new way, which helps us stop letting them affect how we see ourselves. This method is proven to make those memories feel less important over time. 

Now, let’s give this strategy a go, it has 3 steps…
Let’s start with Step 1…

First, try to think about the earliest event you can remember of an unpleasant body experience where you felt ashamed or embarrassed of your body or how your body looks. It could be something that happened to you when you were a child, or a teenager.

Now take a moment to close your eyes and imagine this earliest event as if it is happening right now. Notice the thoughts and feelings that come up for you. Please only continue when you have a picture of this earliest event in your mind.

When you’re ready, in a few sentences, write about this earliest event you just thought about. Describe the event as if it is happening right now.
Try to:
1. Write using “I” language...
2. Include as much detail as you can...`,

  `Well done! Let’s move onto Step 2…

Think about the same memory again. This time, when you close your eyes and imagine this event, imagine it as if you were someone else watching the event happen from the outside. Imagine you were watching your younger self going through the event again.

Now take a moment to close your eyes and re-imagine this event as if it were happening to you right now. Remember, this time you are someone else watching the event happen from the outside.

Now, write about what someone else would see if they were watching the event happen from the outside, as if it were happening to your younger self right now.
Try to:
1. Write as if someone else is telling the story about you...
2. Include as much detail as you can...`,

  `Well done! Now let’s do Step 3, the final step…

Think about the same memory one last time. This time, you are your younger self again (using “I” language), but your wiser and kinder older self is with you in the room. Your older self can get involved if you want them to.

Now take a moment to close your eyes and re-imagine this event as if it were happening to you right now. Remember, this time your wiser and kinder older self is with you and can get involved if you want them to.

Now, write about this event as if it is happening right now, with your wiser and older self present.
Try to:
1. Use “I” language...
2. Include as much detail as you can...
3. Describe what your wiser and kinder older self does in the situation.`
];

let currentStep = 0;
let userResponses = [];

function typeInstruction(text, i = 0) {
  if (i < text.length) {
    instructionBox.textContent += text.charAt(i);
    setTimeout(() => typeInstruction(text, i + 1), 20); // Typing speed
  } else {
    form.classList.remove("hidden");
  }
}

function loadStep() {
  instructionBox.textContent = "";
  form.classList.add("hidden");
  textarea.value = "";
  typeInstruction(steps[currentStep]);
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  userResponses.push(textarea.value.trim());
  currentStep++;
  if (currentStep < steps.length) {
    loadStep();
  } else {
    displaySummary();
  }
});

function displaySummary() {
  form.classList.add("hidden");
  instructionBox.classList.add("hidden");
  summary.classList.remove("hidden");
  userResponses.forEach((text, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>Step ${i + 1} Reflection:</strong><br>${text}`;
    summaryList.appendChild(li);
  });
}

loadStep();
