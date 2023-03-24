function WordFrequencyAnalyze(sentence) {
    const TextToLowerCase = sentence.toLowerCase().replace(/[^a-z ]/g, '');
    const words = TextToLowerCase.split(' ');
    const wordFrequency = {};
    words.forEach(word => {
      if (wordFrequency[word]) {
        wordFrequency[word]++;
      } else {
        wordFrequency[word] = 1;
      }
    });
    const wordFrequencyArray = Object.entries(wordFrequency);
    wordFrequencyArray.sort((a, b) => b[1] - a[1]);
    return wordFrequencyArray;
  }
  const sentence = "In computing, a word is the natural unit of data used by a particular processor design. A word is a fixed-sized piece of data handled as a unit by the instruction set or the hardware of the processor. The number of bits in a word (the word size, word width, or word length) is an important characteristic of any specific processor design or computer architecture.";
const FrequencyArray = WordFrequencyAnalyze(sentence);

console.log(FrequencyArray);
