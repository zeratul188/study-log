var DAYS = [
    'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'
];

  var MONTHS = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

var selectDay = document.querySelectorAll('.calender-title p');
var txtMonth = document.querySelector('.txt-month');
var btnPrev = document.querySelector('.button.prev');
var btnNext = document.querySelector('.button.next');
var tdDays = document.querySelectorAll('tbody td');
var layoutCalender = document.querySelector('.calender');

layoutCalender.addEventListener('click', function onClick(obj) {
    if (obj.target.tagName === 'TD') {
        setSelectDay(obj.target.textContent);
    } else if (obj.target.tagName !== 'BUTTON') {
        return;
    } else if (obj.target.classList.item(1) === 'prev') {
        now.setMonth(now.getMonth()-1);
        syncCalender();
        setSelectDay('1');
    } else if (obj.target.classList.item(1) === 'next') {
        now.setMonth(now.getMonth()+1);
        syncCalender();
        setSelectDay('1');
    }
});

function setSelectDay(day) {
    for (let i = 0; i < tdDays.length; i++) {
        if (tdDays[i].textContent === day) {
            selectDay[1].textContent = day;
            selectDay[0].textContent = DAYS[i%7];
        }
    }
}

var now = new Date();

var nowYear = now.getFullYear();
var nowMonth = now.getMonth();
var nowDate = now.getDate();
var nowDay = now.getDay();

selectDay[0].textContent = DAYS[now.getDay()];
selectDay[1].textContent = now.getDate();
syncCalender();

function syncCalender() {
    txtMonth.textContent = MONTHS[now.getMonth()]+' '+now.getFullYear();
    var lastDay = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
    var undoDate = now.getDate();
    now.setDate(1);
    let day = 1;
    var isSameMY = nowYear === now.getFullYear() && nowMonth === now.getMonth();
    for (let i = 0; i < tdDays.length; i++) {
        if (i < now.getDay() || day > lastDay) {
            tdDays[i].textContent = '';
            tdDays[i].style.visibility = 'hidden';
        } else {
            if (isSameMY && day === nowDate) {
                tdDays[i].style.color = 'red';
            } else {
                tdDays[i].style.color = 'black';
            }
            tdDays[i].textContent = day;
            day++;
            tdDays[i].style.visibility = 'visible';
        }
    }
    now.setDate(undoDate);
}