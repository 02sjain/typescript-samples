let sentence: string;
sentence = "the quick brown fox jumps over the lazy dog.does this sentence having all alphabets the the the"
let sentences: string[] = sentence.split('.');
let upperCaseSentences: string = '';
let counter: number = 0;
let wordCounter: number = 0;
let wordsHavingCharA: string[] = [];
let matchWordCount: number = 0;
let wordToMatch = 'the';

for (let sentence of sentences) {
    let strArr: string[];
    let charAtFirst = sentence.charAt(0).toUpperCase();
    sentence = sentence.substring(1, sentence.length);
    sentence = charAtFirst + sentence;    
    strArr = sentence.trim().split(' ');
    strArr.forEach(findWordsHavingSpecificCharacter('a'));
    strArr.forEach(findOccurancesOfSpecifiedWord(wordToMatch));    
    wordCounter += strArr.length;
    upperCaseSentences += sentence+'.';
}


function findWordsHavingSpecificCharacter(char: any): (value: string, index: number, array: string[]) => void {
    return z => { z.indexOf(char) != -1 ? wordsHavingCharA.push(z) : wordsHavingCharA; };
}

function findOccurancesOfSpecifiedWord(word: string): (value: string, index: number, array: string[]) => void {
    return z => { z.toLowerCase() == word.toLowerCase() ? matchWordCount++ : matchWordCount; };
}

console.log(upperCaseSentences);
console.log(wordCounter);
console.log(wordsHavingCharA);
console.log(matchWordCount);

