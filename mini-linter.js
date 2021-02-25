//JAVASCRIPT ITERATORS, OBJECTS, AND CLASSES

let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually'];

//1. Let’s split the string into individual words and save them in a new array called storyWords.
let storyWords = story.split(' ');

//2. Log how many words there are in this story to the console.
console.log(storyWords.length);

//3. There is an array of words that are unnecessary. Iterate over your array to filter out these words. Save the remaining words in an array called betterWords.
let betterWords = storyWords.filter((word) => !unnecessaryWords.includes(word));

//4. There is an array of words called overusedWords. These are words overused in this story. How many times they have used these overused words?
let indices = 0;
for (let i = 0; i < betterWords.length; i++) {
  if (overusedWords.includes(betterWords[i])) {
    indices++;
  }
}
console.log(indices);

//5. Now, count how many sentences are in the paragraph. -> (.) (!) Finish sentences.
let sentences = 0;
betterWords.forEach((word) => {
  if (word[word.length - 1] === '.' || word[word.length - 1] === '!') {
    sentences += 1;
  }
});
// word[word.length - 1] -> see if the last word has a . or !

///// another way (worse)
for (let i = 0; i < betterWords.length; i++) {
  if (betterWords[i].includes('.')) {
    sentences++;
  } else if (betterWords[i].includes('!')) {
    sentences++;
  }
}

/*6. Log these items to the console:
    - The word count
    - The sentence count
    - The number of times each overused word appears
*/
const logInfo = () => {
  console.log('Word count: ' + storyWords.length);
  console.log('The sentence count: ' + sentences);
  console.log('Word count: ' + indices);
};
logInfo();

//7. Log the betterWords array to the console as a single string.
console.log(betterWords.join(' '));

//8.1 For the overused words, remove it every other time it appears.
let counter = 0;
let remove = storyWords.filter((word) => {
  if (overusedWords.includes(word)) {
    counter++;
    if (counter % 2 === 0) {
      return false;
    }
  }

  return true;
});

//This remove all
//let remove = betterWords.filter((word) => !overusedWords.includes(word));

//8.2 Write a function that finds the word that appears the greatest number of times.
// split() -> Separate text into words (' ')
let storyWords = story.split(' ');

// Create an empty object -> containing key: value.
// Key -> will be the word | value -> the number of times it is repeated
// expr -> the: 11,
let countObject = {};

// Itinerating the text (forEach)
// If the word is already there -> add 1 to the value (countObject[word]++)
// If the word is not there -> add key with value 1 (countObject[word] = 1
storyWords.forEach((word) => {
  if (countObject[word]) {
    countObject[word]++;
  } else {
    countObject[word] = 1;
  }
});

// Check which is the most repeated word
function maxWords(countObject) {
  let max = 0;
  let maxVar = null;

  for (var key in countObject) {
    let num = countObject[key];

    if (num > max) {
      max = num;
      maxVar = key;
    }
  }

  return maxVar;
}
console.log(maxWords(countObject));

//8.3 Replaced overusedWords with something else (HI).
// story is a string -> stryWords is an array
// let storyWords = story.split(' '); -> take strory and converts it to an array
let remove = storyWords.map((word) => {
  //return 'hello' -> Than change al words for hello
  if (overusedWords.includes(word)) {
    return 'HI';
  }
  return word;
});
console.log(remove.join(' '));

// Find word '?'
const findWord = betterWords.filter((word) => word === 'called').length;
console.log(
  `The word "${'findWord'}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`
);
