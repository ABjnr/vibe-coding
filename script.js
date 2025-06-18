const reminders = [
  "Don't forget to breathe!",
  "Remember to blink occasionally.",
  "Stand up and stretch… or don’t.",
  "Smile at your screen for no reason.",
  "Take a moment to appreciate your elbows.",
  "Wiggle your toes!",
  "Check if your shoes are still on.",
  "Pat yourself on the back (literally or figuratively).",
  "Look away from the screen for a second.",
  "Think about your favorite color.",
  "Make sure you’re sitting comfortably.",
  "Take a deep breath and exhale slowly.",
  "Remind yourself how awesome you are.",
  "Count to three just because.",
  "Give yourself a thumbs up.",
];

const facts = [
  "Bananas are yellow.",
  "The sky is sometimes blue.",
  "Water is wet.",
  "You are reading this.",
  "Fish live in water.",
  "Grass is green.",
  "The sun rises in the east.",
  "Most cats have four legs.",
  "Most people have ten fingers.",
  "A minute has 60 seconds.",
  "You can't hum while holding your nose.",
  "Your nose is in the middle of your face.",
  "The word 'the' is very common.",
  "You blink about 15-20 times per minute.",
];

const compliments = [
  "Nice elbows!",
  "You have a great sense of direction.",
  "Your shoes are tied perfectly.",
  "You blink very well.",
  "You’re good at existing.",
  "Your breathing technique is flawless.",
  "You have excellent taste in useless apps.",
  "You’re a champion at sitting.",
  "Your posture is inspiring.",
  "You have a world-class yawn.",
  "Your ability to stand is unmatched.",
  "You’re a master at opening doors.",
  "Your presence is as refreshing as a cool breeze.",
  "You excel at being yourself.",
  "You have a fantastic sense of time.",
  "Your hair grows at the perfect speed.",
  "You’re amazing at noticing things.",
  "You’re a pro at reading this compliment.",
  "You make blinking look easy.",
  "You’re the best at being here right now.",
];

function showReminder() {
  const reminder = reminders[Math.floor(Math.random() * reminders.length)];
  document.getElementById("reminderText").textContent = reminder;
}

function showFact() {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("factText").textContent = fact;
}

function showCompliment() {
  const compliment =
    compliments[Math.floor(Math.random() * compliments.length)];
  document.getElementById("complimentText").textContent = compliment;
}

// Show one of each on load
showReminder();
showFact();
showCompliment();
