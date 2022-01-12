import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const amount = +e.currentTarget.elements.amount.value;
  const delayStep = +e.currentTarget.elements.delay.value;
  const step = +e.currentTarget.elements.step.value;

  let delay = delayStep;
  for (let position = 1; position <= amount; position += 1) {
    if (position != 1) {
      delay += step;
    } else {
      delay;
    }

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
  }
  e.currentTarget.reset();
});

function createPromise(position, delay) {
  console.log(position);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
