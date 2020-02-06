$(document).ready(function () {
    console.log('HI');
});



$(function () {
    $('.btn').on('click', Percent)
});

function Percent(perc) {
    let currPerc = takeProp();


    let txtProgress = setProp(($(this).text()).replace(/\D+/g, ""));

};


function takeProp() {
    let attrName = $('.progress-bar').prop('style');
    return attrName.width;
};

function setProp(n) {

    let setName = $('.progress-bar').prop('style');
    let gg = getNum(setName.width);
    let ss = incProgressPercent(Number(gg), Number(n));
    if (setText(ss())) {
        setName.width = ss() + '%';
        return setName.width;
    }
};

function getNum(perc) {
    return (perc).replace(/\D+/g, "");
}

function incProgressPercent(width, setName) {
    let widthf = width;
    return function () {

        return widthf + setName;
    }
}

function setText(perc) {
    if (perc <= 100) {
        $('.progress-bar').text(perc + '%');
        return true;
    } else {
        alert("Не кликай больше 100% =(");
    }

}