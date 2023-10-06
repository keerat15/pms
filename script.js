const progressBars = document.querySelectorAll('.progress-bar');

progressBars.forEach(progressBar => {
  const progress = progressBar.getAttribute('data-progress');
  const progressCircle = progressBar.querySelector('circle');
  const progressText = progressBar.querySelector('.progress-text');

  progressBar.addEventListener('mouseover', () => {
    progressCircle.style.strokeDasharray = `calc(${progress} * 1.25), 125`;
    progressText.textContent = `${progress}%`;
  });

  progressBar.addEventListener('mouseout', () => {
    progressCircle.style.strokeDasharray = `0, 125`;
    progressText.textContent = `0%`;
  });
});
