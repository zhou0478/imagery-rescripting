const slides = [
  {
    content: `
      <div class="slide" id="slideText">
        <img src="https://via.placeholder.com/600x200?text=Body+Image+Reflection" style="width:100%; border-radius:10px; margin-bottom:20px;" alt="Placeholder Image"/>
        <p>People with body image issues often say that memories of early negative appearance experiences, like being teased about how they look, can still affect how they feel about their body, even years later. These negative images can get ‘stuck’ in our minds.</p>
        <p>Now, we can't change what happened, but these past experiences don’t have to continue to impact our lives today.</p>
        <p>With a strategy called ‘imagery updating’, we can look at those old memories in a new way, which helps us stop letting them affect how we see ourselves. This method is proven to make those memories feel less important over time.</p>
        <p><strong>Now, let’s give this strategy a go, it has 3 steps…</strong></p>
      </div>
    `
  },
  {
    content: `
      <div class="slide">
        <p><strong>Let’s start with Step 1…</strong></p>
        <p>First, try to think about the earliest event you can remember of an unpleasant body experience where you felt ashamed or embarrassed of your body or how your body looks. It could be something that happened to you when you were a child, or a teenager.</p>

        <div class="example-box">
          <p><strong>Some examples are:</strong></p>
          <ul>
            <li>being teased by your peers about how you look</li>
            <li>receiving negative/critical comments about your body or appearance</li>
            <li>feeling uncomfortable/insecure about your body when trying on clothes in a change-room, looking yourself in the mirror, getting ready with friends to go to a party, walking past a group of people who were looking at you, out in public</li>
          </ul>
        </div>

        <p>Now take a moment to close your eyes and imagine this earliest event as if it is happening right now. Notice the thoughts and feelings that come up for you. Please only continue when you have a picture of this earliest event in your mind.</p>

        <p>When you’re ready, in a few sentences, write about this earliest event you just thought about. Describe the event as if it is happening right now.</p>

        <div class="reminders">
          <p><strong>Try to:</strong></p>
          <ol>
            <li>Write using “I” language (e.g., “I’m in the change room, trying on a pair of blue jeans. My friend is in the change room next to me also trying on clothes.”)</li>
            <li>Include as much detail as you can, such as what you are doing, who you are with, what you can see, how you are feeling, and what thoughts are going through your mind.</li>
          </ol>
        </div>

        <textarea placeholder="Write your reflection here..."></textarea>
      </div>
    `
  }
];

let currentSlide = 0;

const container = document.getElementById('slide-container');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');

function showSlide(index) {
  container.innerHTML = slides[index].content;

  // Back button logic
  backBtn.classList.toggle('hidden', index === 0);

  // Next button logic
  nextBtn.textContent = index === slides.length - 1 ? 'Finish' : 'Next';

  // Animate paragraphs on new slide
  const paragraphs = container.querySelectorAll('#slideText p');
  paragraphs.forEach((p, i) => {
    p.style.animationDelay = `${i * 0.6}s`;
  });
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
    alert('Thanks! Summary coming soon...');
  }
});

// Load first slide
showSlide(currentSlide);
