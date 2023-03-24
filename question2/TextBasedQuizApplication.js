const readline = require('readline')
const questions = [
  {
    question: "What is the most populous country in the world?",
    options: ["India", "China", "United States", "Russia"],
    answer: "China"
  },
  {
    question: "What is the largest continent in the world?",
    options: ["Asia", "North America", "Africa", "South America"],
    answer: "Asia"
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yuan", "Yen", "Euro", "Dollar"],
    answer: "Yen"
  }
]

let score = 0

function previewAllQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const question = questions[randomIndex];
  console.log(question.question);
  for (let i = 0; i < question.options.length; i++) {
    console.log(`${i + 1}. ${question.options[i]}`);
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Enter your answer (1-4): ', (userAnswer) => {
    const index = parseInt(userAnswer) - 1;
    if (question.options[index] === question.answer) {
      score++;
      console.log("you did ")
    } else {
      console.log(`oops you wrong. The correct answer is ${question.answer}.`)
    }
    rl.close();
    if (score < questions.length) {
      previewAllQuestion()
    } else {
      console.log(`Your score is ${score} out of ${questions.length}.`);
    }
  });
}

previewAllQuestion();