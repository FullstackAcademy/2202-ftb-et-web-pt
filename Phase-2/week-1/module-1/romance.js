// Remove Punctuation
const summerLovin = 
'Well-a well-a well-a huh Tell me more tell me more Did you get very far Tell me more tell me more Like does he have a car'

//split it up by line and then by space

//Create a set of word associations 

 const testString = "HEllo Class How are you"
console.log(summerLovin.split('\n'))



//splits the song up by lines and then by words
function splitPoem(poem){
    let words = []
    //first split by new line 
    const poemLine = poem.split('\n')
    //split by each line spaces
    for (let line = 0; line < poemLine.length; line++){
        const poemWords = poemLine[line].split(' ')
        words = words.concat(poemWords);
    }  
    return words; 
}



let test = [
    'Well-a', 'well-a', 'well-a', 'huh',
    '',       'Tell',   'me',     'more',
    'tell',   'me',     'more',   'Did',
    'you',    'get',    'very',   'far',
    'Tell',   'me',     'more',   'tell',
    'me',     'more',   'Like',   'does',
    'he',     'have',   'a',      'car'
  ]
//create the object with word pairs 


function createWordPairs(poemWords){
    let pairs = {}
    // iterate through each word
    //don't include last word cause it doesn't have a following word
    for (let i = 0; i < poemWords.length - 1; i++){
        let currentWord = poemWords[i].toLowerCase();
        let nextWord = poemWords[i + 1];
        //in pairs? add the nextWord to its array
        if (pairs[currentWord]) pairs[currentWord].push(nextWord)
        //no? add it to pairs w/ value of [nextWord]
        else pairs[currentWord] = [nextWord]
    }
    return pairs;
}



 const testWords = {
    a: ['car'],
    did: ['you'],
    does: ['he'],
    far: ['Tell'],
    get: ['very'],
    have: ['a'],
    he: ['have'],
    huh: ['Tell'],
    like: ['does'],
    me: ['more', 'more', 'more', 'more'],
    more: ['tell', 'Did', 'tell', 'Like'],
    tell: ['me', 'me', 'me', 'me'],
    very: ['far'],
    "well-a": ['well-a', 'well-a', 'huh'],
    you: ['get']
 }

 //me more tell me
 //very far Tell me

//randomly choose one element of the array 
function randomlyChoose(wordArray) { 
  let index = Math.floor(wordArray.length * Math.random());
  return wordArray[index];
}

//pull a key from the wordPair
//grab the associated words from that key
//randomly pick one, then lookup that word as a key 
//repeat
function writeLine(line_length){
    //Randomly choose a word from the object keys
    let word = randomlyChoose(Object.keys(wordpairs))

    //Add it to the line
    let line = [word];
    
    while(wordpairs[word] && line.length < line_length) {
        //get the associated words with currentWord
        let next_words = wordpairs[word];
        //randomly choose one of the associated words
        word = randomlyChoose(next_words);

        //add it to the line
        line.push(word);

        //check if the word has associations
        //if not, choose a new word randomly from keys
        if (!wordpairs[word]) word = randomlyChoose(Object.keys(wordpairs))
    }

    //join the words together 
    return line.join(' ');
}




function generatePoem(inspiration, numLines, line_length){
    //another poem/song/text - inspiration
    //number of lines I want my poem to be 
    //break the inspiration down into a set of word associations
    //randomly choose words from that set of word associations and add the words to our current line
}   