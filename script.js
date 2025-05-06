const userResponses = ["", "", ""]; // 3 response fields (Step 1, 2, 3)

const slides = [
 // Step 1 Intro
  `
  <div class="slide">
    <p>People with body image issues often say that memories of early negative appearance experiences, like being teased about how they look, can still affect how they feel about their body, even years later. These negative images can get ‘stuck’ in our minds.</p>
    <p>Now, we can't change what happened, but these past experiences don’t have to continue to impact our lives today.</p>
    <p>With a strategy called ‘imagery updating’, we can look at those old memories in a new way, which helps us stop letting them affect how we see ourselves. This method is proven to make those memories feel less important over time.</p>
    <p><strong>Now, let’s give this strategy a go, it has 3 steps…</strong></p>
  </div>
  `,

  // Step 1 Imagery
  `
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
    <p>Now take a moment to close your eyes and imagine this earliest event as if it is happening <u>right now</u>. Notice the thoughts and feelings that come up for you. Please only continue when you have a picture of this earliest event in your mind.</p>
  </div>
  `,
  // Step 1 - Writing
  `
  <div class="slide">
    <p><strong>Step 1</strong></p>
    <p>When you’re ready, in a few sentences, write about this <u>earliest</u> event you just thought about. Describe the event as if it is happening <u>right now</u>.</p>
    <div class="reminders">
      <p><strong>Try to:</strong></p>
      <ol>
        <li>Write using “I” language (e.g., “I’m in the change room, trying on a pair of blue jeans. My friend is in the change room next to me also trying on clothes.”)</li>
        <li>Include as much detail as you can,such as what you are doing, who you are with, what you can see, how you are feeling, and what thoughts are going through your mind.</li>
      </ol>
    </div>
    <textarea id="response1" placeholder="Write about this memory following the instructions here..."></textarea>
  </div>
  `,

  // Step 2 - Imagery
  `
  <div class="slide">
    <p><strong>Let’s move onto Step 2…</strong></p>
    <p>Think about the same memory again. This time, when you close your eyes and imagine this event, imagine it as if you were someone else watching the event happen from the outside. Imagine you were watching your younger self going through the event again.</p>
    <p>Now take a moment to close your eyes and re-imagine this event as if it were happening to you right now. Remember, this time you are someone else watching the event happen from the outside. Imagine you are watching your younger self going through the event again. Please only continue when you have a picture of this in your mind.</p>
  </div>
  `,
  
  // Step 2 - Writing
  `
  <div class="slide">
    <p><strong>Step 2</strong></p>
    <p>Now, in a few sentences, write about this event as if it is happening right now, but this time, write about what someone else would see if they were watching the event happen from the outside, as if it were happening to your younger self right now. </p>
    <div class="reminders">
      <p><strong>Try to:</strong></p>
      <ol>
        <li>Write as if someone else is telling the storyabout you (e.g., if your name is Sarah, write "I see Sarah in the change room, she is trying on a pair of blue jeans. She’s with her friend who is also trying on clothes.”)</li>
        <li>Include as much detail as you can, such as where Sarah is, what Sarah is doing, who Sarah is with, how Sarah might be feeling, and what thoughts might be going through Sarah’s mind.       </li>
      </ol>
    </div>
    <textarea id="response2" placeholder="Write about this memory following the instructions here..."></textarea>
  </div>
  `,

  // Step 3 - Imagery
  `
  <div class="slide">
    <p><strong>Well done! Now let’s do Step 3, the final step…</strong></p>
    <p>Think about the same memory one last time. This time, <strong>you are your younger self again</strong> (using “I” language), but your wiser and kinder older self is with you in the room. Your older self can get involved if you want them to. They can offer you kindness or provide new updated information based on what you know now, they can talk to you (or others) or do anything else that feels helpful and right in the situation.</p>
    <p>Now take a moment to close your eyes and re-imagine this event as if it were happening to you right now. Remember, this time your wiser and kinder older self is with you and can get involved if you want them to. Please only continue when you have a picture of this in your mind.</p>
  </div>
  `,

  // Step 3 - Writing
  `
  <div class="slide">
    <p><strong>Step 3</strong></p>
    <p>Now, in a few sentences, write about this event, as if it is happening right now, but this time, your wiser and older self is with you and can get involved if you want them to. </p>
    <div class="reminders">
      <p><strong>Try to:</strong></p>
      <ol>
        <li>Write using “I” language  like you did earlier (e.g., “I’m in the change room, trying on a pair of blue jeans. My friend is in the change room next to me also trying on clothes.”) but, when you talk about your older self, write it like you’re telling a story about them (e.g., “older Sarah said…”). </li>
        <li>Include as much detail as you can, such as what you are doing, who you are with, what you can see, how you are feeling, and what thoughts are going through your mind. </li>
        <li><strong>Describe what your wiser and kinder older self does in the situation.</strong> Remember, they can offer you kindness or provide new updated information based on what you know now, they can talk to you (or others) or do anything else that feels helpful and right in the situation.</li>
      </ol>
    </div>
    <textarea id="response3" placeholder="Write about this memory following the instructions here..."></textarea>
  </div>
  `,

  // Final summary page
  `
  <div class="slide">
    <h2>A summary of your past imagery updating</h2>
    <div>
      <h3>Step 1</h3>
      <p id="summary1" class="summary-box"></p>
      <h3>Step 2</h3>
      <p id="summary2" class="summary-box"></p>
      <h3>Step 3</h3>
      <p id="summary3" class="summary-box"></p>
      <button id="downloadBtn">Download PDF</button>
    </div>
  </div>
  `
];

let currentSlide = 0;

const container = document.getElementById('slide-container');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');

function showSlide(index) {
  // Save responses before navigating away
  if (currentSlide === 2) userResponses[0] = document.getElementById("response1")?.value || "";
  if (currentSlide === 4) userResponses[1] = document.getElementById("response2")?.value || "";
  if (currentSlide === 6) userResponses[2] = document.getElementById("response3")?.value || "";

  container.innerHTML = slides[index];
  container.classList.remove('fade-in');
  void container.offsetWidth;
  container.classList.add('fade-in');

  backBtn.classList.toggle('hidden', index === 0);
  nextBtn.textContent = index === slides.length - 1 ? 'Finish' : 'Next';

  if (index === slides.length - 1) {
    document.getElementById("summary1").textContent = userResponses[0];
    document.getElementById("summary2").textContent = userResponses[1];
    document.getElementById("summary3").textContent = userResponses[2];
  }
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
    alert("You've completed past imagery updating!");
  }
});

showSlide(currentSlide);

document.addEventListener('click', function (e) {
  if (e.target.id === 'downloadBtn') {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const allSlides = document.querySelectorAll('.slide');

    let addSlideToPDF = (index) => {
      if (index >= allSlides.length) {
        doc.save("imagery-summary.pdf");
        return;
      }

      html2canvas(allSlides[index]).then(canvas => {
        let imgData = canvas.toDataURL("image/png");
        let imgWidth = 190;
        let pageHeight = 295;
        let imgHeight = canvas.height * imgWidth / canvas.width;

        doc.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
        if (index < allSlides.length - 1) doc.addPage();
        addSlideToPDF(index + 1);
      });
    };

    addSlideToPDF(0);
  }
});

