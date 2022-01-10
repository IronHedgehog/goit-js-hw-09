refs = {
  startButton: document.querySelector('[data-start]'),
  stopButton: document.querySelector('[data-stop]'),
};

refs.startButton.addEventListener('click', startSwitchColors);
refs.stopButton.addEventListener('click', stopSwitchColors);
let switchColorID = null;

function startSwitchColors() {
  switchColorID = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    console.log(document.body.style.backgroundColor);
  }, 1000);
  refs.startButton.setAttribute('disabled', 'disabled');
}

function stopSwitchColors() {
  clearInterval(switchColorID);
  refs.startButton.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
