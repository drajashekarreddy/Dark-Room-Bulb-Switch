const globeFill = document.getElementById('globe-fill');
const glow = document.getElementById('glow');
const switchEl = document.getElementById('switch');
const label = document.getElementById('label');
const body = document.body;

let isOn = false;

function toggleLight() {
  isOn = !isOn;
  globeFill.classList.toggle('on', isOn);
  glow.classList.toggle('on', isOn);
  switchEl.classList.toggle('on', isOn);
  body.classList.toggle('light-on', isOn);
  label.textContent = isOn ? 'ON' : 'OFF';
}
