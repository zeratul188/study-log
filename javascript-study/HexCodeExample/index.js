var btnColorChanger = document.querySelector('.btn-change');
var txtMain = document.querySelector('.main-content');
var bodyElement = document.getElementsByTagName('body')[0];

btnColorChanger.addEventListener("click", function onClick() {
    var hexCode = '#';
    const code = Math.floor(Math.random()*(15*16*16*16*16*16)+(15*16*16*16*16)+(15*16*16*16)+(15*16*16)+(15*16)+15+1).toString(16);
    if (code.length === 6) {
        hexCode += code;
    } else {
        hexCode += '0'+code;
    }
    if (hexCode.length === 7) {
        bodyElement.style.backgroundColor = hexCode;
        txtMain.textContent = 'HEX COLOR :'+hexCode.toUpperCase();
    } else {
        alert('Code : '+hexCode);
    }
});