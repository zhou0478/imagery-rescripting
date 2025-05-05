const slides = [
  // Slide 1: Intro
  {
    text: [
      "People with body image issues often say that memories of early negative appearance experiences, like being teased about how they look, can still affect how they feel about their body, even years later. These negative images can get ‘stuck’ in our minds.",
      "Now, we can't change what happened, but these past experiences don’t have to continue to impact our lives today.",
      "With a strategy called ‘imagery updating’, we can look at those old memories in a new way, which helps us stop letting them affect how we see ourselves. This method is proven to make those memories feel less important over time.",
      "<strong>Now, let’s give this strategy a go, it has 3 steps…</strong>"
    ]
  },

  // Slide 2: Step 1 Instruction
  {
    text: [
      "<strong>Let’s start with Step 1…</strong>",
      "First, try to think about the earliest event you can remember of an unpleasant body experience where you felt ashamed or embarrassed of your body or how your body looks. It could be something that happened to you when you were a child, or a teenager.",
      `<div class="example-box">
        <p><strong>Some examples are:</strong></p>
        <ul>
          <li>being teased by your peers about how you look</li>
          <li>receiving negative/critical comments about your body or appearance</li>
          <li>feeling uncomfortable/insecure about your body when trying on clothes in a change-room, looking yourself in the mirror, getting ready with friends to go to a party, walking past a group of people who were looking at you, out in public</li>
        </ul>
      </div>`,
      "Now take a moment to close your eyes and imagine this earliest event as if it is happening right now. Notice the thoughts and feelings that come up for you. Please only continue when you have a picture of this earliest event in your mind."
    ]
  },

  // Slide 3: Step 1 Writing
  {
    text: [
      "When you’re ready, in a few sentences, write about this earliest event you just thought about. Describe the event as if it is happening right now.",
      `<div class="reminders">
        <p><strong>Try to:</strong></p>
        <ol>
          <li>Write using “I” language (e.g., “I’m in the change room, trying on a pair of blue jeans. My friend is in the change room next to me also trying on clothes.”)</li>
          <li>Include as much detail as you can, such as what you are doing, who you are with, what you can see, how you are feeling, and what thoughts are going through your mind.</li>
        </ol>
      </div>`
    ],
    textarea: true
  },

  // Slide 4: Step 2 Instruction
  {
    text: [
      "<strong>Let’s move onto Step 2…</strong>",
      "Think about the same memory again. This time, when you close your eyes and imagine this event, imagine it as if you were someone else watching the event happen from the outside. Imagine you were watching your younger self going through the event again.",
      "Now take a moment to close your eyes and re-imagine this event as if it were happening to you right now. Remember, this time you are someone else watching the event happen from the outside. Imagine you are watching your younger self going through the event again. Please only continue when you have a picture of this in your mind."
    ]
  },

  // Slide 5: Step 2 Writing
  {
    text: [
      "Now, in a few sentences, write about this event as if it is happening right now, but this time, write about what someone else would see if they were watching the event happen from the outside, as if it were happening to your younger self right now.",
      `<div class="reminders">
        <p><strong>Try to:</strong></p>
        <ol>
          <li>Write as if someone else is telling the story about you (e.g., if your name is Sarah, write \"I see Sarah in the change room, she is trying on a pair of blue jeans. She’s with her friend who is also trying on clothes.\")</li>
          <li>Include as much detail as you can, such as where Sarah is, what Sarah is doing, who Sarah is with, how Sarah might be feeling, and what thoughts might be going through Sarah’s mind.</li>
        </ol>
      </div>`
    ],
    textarea: true
  }
];

// Rest of the script remains unchanged from the working version:
let currentSlide = 0;
const container = document.getElementById('slide-container');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
const reflections = [];

function animateText(textArray, containerElement, callback) {
  containerElement.innerHTML = '';
  let i = 0;

  function addParagraph() {
    if (i < textArray.length) {
      const p = document.createElement('div');
      p.innerHTML = textArray[i];
      p.style.opacity = 0;
      containerElement.appendChild(p);
      setTimeout(() => {
        p.style.transition = 'opacity 0.5s ease-in-out';
        p.style.opacity = 1;
        i++;
        setTimeout(addParagraph, 600);
      }, 100);
    } else if (callback) {
      callback();
    }
  }

  addParagraph();
}

function showSlide(index) {
  const slide = slides[index];
  container.innerHTML = '';
  animateText(slide.text, container, () => {
    if (slide.textarea) {
      const textarea = document.createElement('textarea');
      textarea.value = reflections[index] || '';
      textarea.addEventListener('input', () => {
        reflections[index] = textarea.value;
      });
      container.appendChild(textarea);
    }
  });

  backBtn.classList.toggle('hidden', index === 0);
  nextBtn.textContent = index === slides.length - 1 ? 'Finish' : 'Next';
}

backBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  } else {
    showSummary();
  }
});

function showSummary() {
  container.innerHTML = '<h2>Reflection Summary</h2>';
  reflections.forEach((r, i) => {
    if (r) {
      const section = document.createElement('div');
      section.innerHTML = `<h3>Step ${i + 1}</h3><p>${r}</p>`;
      container.appendChild(section);
    }
  });
  backBtn.classList.add('hidden');
  nextBtn.classList.add('hidden');
}

showSlide(currentSlide);
