import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    datetimePicker: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    seconds: document.querySelector('span[data-seconds]'),
    minutes: document.querySelector('span[data-minutes]'),
    hours: document.querySelector('span[data-hours]'),
    days: document.querySelector('span[data-days]'),
}
refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click', onTimerStart);

function onTimerStart() {
    Notiflix.Notify.success('The timer has started');
    const insertTime = new Date(refs.datetimePicker.value).getTime();
    refs.startBtn.disabled = true;

    let timerId = setInterval(() => {
        let countdown = insertTime - new Date().getTime();
        let timerData = convertMs(countdown);
        console.log(timerData)
        if (countdown > 0) {
            refs.seconds.textContent = addLeadingZero(timerData.seconds);
            refs.minutes.textContent = addLeadingZero(timerData.minutes);
            refs.hours.textContent = addLeadingZero(timerData.hours);
            refs.days.textContent = timerData.days;
        } else if (countdown <= 0) {
            clearInterval(timerId);
            Notiflix.Notify.warning('The timer has ended');
            refs.startBtn.disabled = false;
        }

    }, 1000);
}


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {

        const selectedDate = selectedDates[0].getTime();
        if (selectedDate >= new Date().getTime()) {
            refs.startBtn.disabled = false;
        } else {
            Notiflix.Notify.failure('Please choose a date in the future');
            return;
        }
    },
};
flatpickr(refs.datetimePicker, options);


function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}