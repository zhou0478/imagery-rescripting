const slides = [
  // Page 1: Intro
  `
    <div class="slide">
      <p>People with body image issues often say that memories of early negative appearance experiences, like being teased about how they look, can still affect how they feel about their body, even years later.</p>
      <p>These negative images can get ‘stuck’ in our minds. Now, we can't change what happened, but these past experiences don’t have to continue to impact our lives today.</p>
      <p>With a strategy called ‘imagery updating’, we can look at those old memories in a new way, which helps us stop letting them affect how we see ourselves. This method is proven to make those memories feel less important over time.</p>
      <p><strong>Now, let’s give this strategy a go. It has 3 steps…</strong></p>
    </div>
  `,
  // Page 2: Step 1
  `
    <div class="slide">
      <p><strong>Let’s start with Step 1…</strong></p>
      <p>First, try to think about the earliest event you can remember of an unpleasant body experience where you felt ashamed or embarrassed of your body or how your body looks. It could be something that happened to you when you were a child, or a teenager.</p>

      <div class="example-box">
        <p><strong>Some examples are:</strong></p>
        <ul>
          <li>Being teased by your peers about how you look</li>
          <li>Receiving negative/critical comments about your body</li>
          <li>Feeling uncomfortable trying on clothes, looking in the mirror, getting ready for a party, etc.</li>
        </ul>
      </div>

      <p>Now close your eyes and imagine this earliest event as if it's happening now. Notice the thoughts and feelings that come up.</p>
      <p>When ready, describe this event in a few sentences.</p>

      <div class="reminders">
        <p><strong>Try to:</strong></p>
        <ol>
          <li>Use “I” language (e.g., “I’m in the change room, trying on jeans.”)</li>
          <li>Include detail: what you're doing, who you're with, what you see/feel/think.</li>
        </ol>
      </div>

      <textarea placeholder="Write your reflection here..."></textarea>
    </div>
  `
];

let currentSlide = 0;

const container = document.getElementById('slide-container');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');

function showSlide(index) {
  container.innerHTML = slides[index];
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
    alert('Thank you! (Summary page coming soon…)');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
});
