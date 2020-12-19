(function load() {
  function confettiInit() {
    const wrapper = document.getElementById('confetti-wrapper');
    for (let i = 0; i < 50; i += 1) {
      // Random rotation
      const randomRotation = Math.floor(Math.random() * 360);
      // Random width & height between 0 and viewport
      const randomWidth = Math.floor(Math.random() * wrapper.offsetWidth);
      const randomHeight = Math.floor(Math.random() * wrapper.offsetHeight);

      // Random animation-delay
      const randomAnimationDelay = Math.floor(Math.random() * 5);

      // Random colors
      const colors = ['#09369F', '#ed1c2b', '#8497B0'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      // Create confetti piece
      const confetti = document.createElement('div');
      confetti.className = ['confetti', 'confetti-2'][
        Math.floor(Math.random() * 2)
      ];
      confetti.style.top = `${randomHeight}px`;
      confetti.style.left = `${randomWidth}px`;
      confetti.style.backgroundColor = randomColor;
      confetti.style.transform = `skew(15deg) rotate(${randomRotation}deg)`;
      confetti.style.animationDelay = `${randomAnimationDelay}s`;
      wrapper.appendChild(confetti);
    }
  }

  window.addEventListener('load', () => {
    setTimeout(confettiInit, 500);
  });
})();
