var progressLayout1 = document.getElementById('progress1');
var progressLayout2 = document.getElementById('progress2');
var txtInfo = document.querySelectorAll('.txt-info');

var btnStart = document.querySelector('.btn-start');
var inputs = [];
var limit = 0;

btnStart.addEventListener('click', function onClick(obj) {
    obj.target.style.display = 'none';
    progressLayout1.style.display = 'inline';
    limit = 0;
});

var btnNext = document.getElementById('btn-next');

btnNext.addEventListener('click', function onClick() {
    inputs = [];
    for (let i = 1; i <= 3; i++) {
        inputs.push(document.querySelector('#num'+i).value);
    }
    for (var input of inputs) {
        if (input === '') {
            alert('비어있는 값이 있습니다.');
            return;
        }
    }
    if (checkDouble(inputs)) {
        alert('중복된 값이 존재합니다.');
        return;
    }
    progressLayout1.style.display = 'none';
    progressLayout2.style.display = 'inline';
});

var btnResult = document.getElementById('btn-result');
btnResult.addEventListener('click', function onClick() {
    var answers = [];
    for (let i = 1; i <= 3; i++) {
        answers.push(document.querySelector('#answer-num'+i).value);
    }
    for (var answer of answers) {
        if (answer === '') {
            alert('비어있는 값이 있습니다.');
            return;
        }
    }
    if (checkDouble(answers)) {
        alert('중복된 값이 존재합니다.');
        return;
    }
    let ball = 0;
    let strike = 0;
    for (let position = 0; position < answers.length; position++) {
        if (inputs.indexOf(answers[position]) === -1) continue;
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i] === answers[position]) {
                if (position === i) {
                    strike++;
                } else {
                    ball++;
                }
                break;
            }
        }
    }

    limit++;
    txtInfo[1].textContent = '맞출 세 가지 숫자를 입력하세요. ('+limit+'/10)';
    alert(result(strike, ball));
    if (result(strike, ball) === '승리!!') {
        gameover();
    } else if (limit === 10) {
        alert("제한 횟수를 초과하였습니다.");
        gameover();
    }
});

function gameover() {
    progressLayout2.style.display = 'none';
    btnStart.style.display = 'inline';
    btnStart.textContent = "재시작";
    for (let i = 1; i <= 3; i++) {
        document.querySelector('#answer-num'+i).value = '';
        document.querySelector('#num'+i).value = '';
    }
}

function result(strike, ball) {
    let content = '';
    if (strike === 0 && ball === 0) {
        content = '아웃';
    } else if (strike === 3) {
        content = '승리!!';
    } else {
        content = '스트라이크 : '+strike+"\n볼 : "+ball;
    }
    return content;
}

function checkDouble(inputs) {
    var values = [];
    for (var input of inputs) {
        if (values.indexOf(input) !== -1) {
            return true;
        }
        values.push(input);
    }
    return false;
}