var position = 1;
var arrayDots = [];

var container = document.querySelector('.center-container');
var btnLeft = document.querySelector('.btn-left');
var btnRight = document.querySelector('.btn-right');
var imgMain = document.querySelector('.img-main');
var dots = document.querySelector('.dots');

for (let i = 0; i < 5; i++) {
    var dot = document.createElement('div');
    dot.style.borderRadius = '200px';
    if (i === 0) {
        dot.style.backgroundColor = '#333333';
    } else {
        dot.style.backgroundColor = '#AAAAAA';
        dot.style.marginLeft = '15px';
    }
    dot.style.width = '10px';
    dot.style.height = '10px';
    dots.append(dot);
    arrayDots.push(dot);
}

btnLeft.style.visibility = 'hidden';

dots.addEventListener('click', function onClick(obj) {
    for (let i = 0; i < arrayDots.length; i++) {
        if (obj.target === arrayDots[i]) {
            position = i+1;
            syncDot(position);
            imgMain.src = 'images/image-'+position+'.png';
            if (position == 5) {
                btnRight.style.visibility = 'hidden';
                btnLeft.style.visibility = 'visible';
            } else if (position == 1) {
                btnLeft.style.visibility = 'hidden';
                btnRight.style.visibility = 'visible';
            } else {
                btnLeft.style.visibility = 'visible';
                btnRight.style.visibility = 'visible';
            }
        }
    }
});

container.addEventListener('click', function onClick(obj) {
    if (obj.target.parentElement.tagName !== 'BUTTON') {
        return;
    } else if (obj.target.parentElement.classList.item(0) === 'btn-right') {
        position++;
        syncDot(position);
        btnLeft.style.visibility = 'visible';
        imgMain.src = 'images/image-'+position+'.png';
        if (position == 5) {
            btnRight.style.visibility = 'hidden';
        }
    } else if (obj.target.parentElement.classList.item(0) === 'btn-left') {
        position--;
        syncDot(position);
        btnRight.style.visibility = 'visible';
        imgMain.src = 'images/image-'+position+'.png';
        if (position == 1) {
            btnLeft.style.visibility = 'hidden';
        }
    }
});

function syncDot(position) {
    for (let i = 0; i < arrayDots.length; i++) {
        if (i === position-1) {
            arrayDots[i].style.backgroundColor = '#333333';
        } else {
            arrayDots[i].style.backgroundColor = '#AAAAAA';
        }
    }
}