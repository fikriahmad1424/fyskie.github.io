const txtElement = ['I am student class']
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik() {

    if (count == txtElement.length){
            count = 0;
        }

        currentTxt = txtElement[count];

        words = currentTxt.slice(0, ++txtIndex);
        document.querySelector('.efek-ngetik').textContent = words;

        if(words.length == currentTxt.length) {
        count++;
        txtIndex = 0;
        }

        setTimeout(ngetik, 150)
})();

const txtE = ['Fikri Ahmad Hafid']
let counte = 0;
let txtI = 0;
let currentT = '';
let word = '';

(function ngtik() {

    if (counte == txtE.length){
            counte = 0;
        }

        currentT = txtI[counte];

        word = currentT.slice(0, ++txtI);
        document.querySelector('.efek-ng').textContent = word;

        if(word.length == currentT.length) {
        counte++;
        txtI = 0;
        }

        setTimeout(ngtik, 150)
})();