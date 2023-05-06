import Notiflix from 'notiflix';
const formRef = document.querySelector('form');
const amountRef = document.querySelector('input[name="amount"]');
const stepRef = document.querySelector('input[name="step"]');
const delayRef = document.querySelector('input[name="delay"]');

formRef.addEventListener('submit', onformSubmit)

function onformSubmit(evt) {
  evt.preventDefault();

  const amount = Number(amountRef.value);
  const step = Number(stepRef.value);
  const delay = Number(delayRef.value);

  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, (delay + step * i)).then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

  }

}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  })

}

