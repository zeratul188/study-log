const word = 'dolphin';
const sentence = 'Where did Jane get the dolphin from, John?';

const index_start_value = sentence.indexOf(word);
const indexOfD = index_start_value + indexOfDolphin('d');
const indexOfN = index_start_value + indexOfDolphin('n');
console.log(indexOfD+", "+indexOfN);

function indexOfDolphin(ch) {
    return sentence.slice(sentence.indexOf(word), sentence.indexOf(word)+word.length+1).indexOf(ch);
}