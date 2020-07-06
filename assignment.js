var sentence;
sentence = "the quick brown fox jumps over the lazy dog.does this sentence having all alphabets the the the";
var sentences = sentence.split('.');
var upperCaseSentences = '';
var counter = 0;
var wordCounter = 0;
var wordsHavingCharA = [];
var matchWordCount = 0;
var wordToMatch = 'the';
for (var _i = 0, sentences_1 = sentences; _i < sentences_1.length; _i++) {
    var sentence_1 = sentences_1[_i];
    var strArr = void 0;
    var charAtFirst = sentence_1.charAt(0).toUpperCase();
    sentence_1 = sentence_1.substring(1, sentence_1.length);
    sentence_1 = charAtFirst + sentence_1;
    strArr = sentence_1.trim().split(' ');
    strArr.forEach(findWordsHavingSpecificCharacter('a'));
    strArr.forEach(findOccurancesOfSpecifiedWord(wordToMatch));
    wordCounter += strArr.length;
    upperCaseSentences += sentence_1 + '.';
}
function findWordsHavingSpecificCharacter(char) {
    return function (z) { z.indexOf(char) != -1 ? wordsHavingCharA.push(z) : wordsHavingCharA; };
}
function findOccurancesOfSpecifiedWord(word) {
    return function (z) { z.toLowerCase() == word.toLowerCase() ? matchWordCount++ : matchWordCount; };
}
console.log(upperCaseSentences);
console.log(wordCounter);
console.log(wordsHavingCharA);
console.log(matchWordCount);
