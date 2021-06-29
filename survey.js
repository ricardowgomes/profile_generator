const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  `What's your name? Nicknames are also acceptable :)`,
  `What's an activity you like doing?`,
  `What do you listen to while doing that?`,
  `Which meal is your favourite (eg: dinner, brunch, etc.)`,
  `What's your favourite thing to eat for that meal?`,
  `Which sport is your absolute favourite?`,
  `What is your superpower? In a few words, tell us what you are amazing at!`];

// Doing nested
rl.question(`What's your name? Nicknames are also acceptable :)`, (answer1) => {
  rl.question(`What's an activity you like doing?`, (answer2) => {
    rl.question(`What do you listen to while doing that?`, (answer3) => {
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (answer4) => {
        rl.question(`What's your favourite thing to eat for that meal?`, (answer5) => {
          rl.question(`Which sport is your absolute favourite?`, (answer6) => {
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (answer7) => {
              rl.close();
            });
          });
        });
      });
    });
  });
});

// Doing two functions
const ask = (question, nextArray) => {
  rl.question(question, (answer) => {
    if (nextArray.length < 1) {
      rl.close();

    } else {
      askQuestions(nextArray);
    }
  });
};

const askQuestions = (arrOfQuestions) => {
  if (arrOfQuestions.length < 1) {
    return;

  } else {
    let acc = arrOfQuestions[0];

    arrOfQuestions = arrOfQuestions.splice(1);
    return ask(acc, arrOfQuestions);
  }
};

askQuestions(questions);