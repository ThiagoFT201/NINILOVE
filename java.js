function typeEffect(elementId, text, speed = 50) {
  const element = document.getElementById(elementId);
  if (!element) return;

  element.innerHTML = "";
  let i = 0;
  const interval = setInterval(() => {
    element.innerHTML += text.charAt(i);
    i++;
    if (i === text.length) clearInterval(interval);
  }, speed);
}

window.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("typed-text");
  if (el) {
    const fullText = el.textContent.trim();
    typeEffect("typed-text", fullText);
  }
});
