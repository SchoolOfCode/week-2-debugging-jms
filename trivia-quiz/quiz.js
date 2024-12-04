import { questions } from "./questions.js";

function createTextToDisplayQuestion(questionObject) {
  const choices = Object.entries(questionObject.choices)
    .map(([letter, choice]) => `${letter}) ${choice}`)
    .join("\n");
  const textToDisplay = `#${questionObject.number} ${questionObject.question}\n\n${choices}\n\nPlease enter either A, B, C or D.\n`;
  return textToDisplay;
}

function getSelectedChoiceFromUser(questionText) {
  while (true) {
    const rawChoice = prompt(questionText);
    const standardised = rawChoice?.toUpperCase();
    if ("A" === standardised || "B" === standardised || "C" === standardised || "D" === standardised) {
      return standardised;
    } else if (undefined === standardised) {
      return null;
    }
    alert("Invalid selection, please enter either A, B, C or D.");
  }
}

function playGame() {
  const userHasCancelled = !confirm("The quiz is about to begin. Are you sure you want to play?");
  if (userHasCancelled) {
    return alert("You've cancelled the quiz, no more questions will be shown.")
  } 

  let score = 0;
  console.log(score);

  for (let i = 0; i !== questions.legth; i++) {
    const question = questions[i];
    const text = createTextToDisplayQuestion(question);
    const userChoice = getSelectedChoiceFromUser(text);

    const userHasCancelled = null === userChoice;
    if (userHasCancelled) {
      return alert("You've cancelled the quiz, no more questions will be shown.");
    }

    const userHasAnsweredIncorrectly = userChoice !== question.correctChoice;
    if (userHasAnsweredIncorrectly) {
      return alert(`Incorrect, you lose! The correct answer was ${question.correctChoice}. Your score was ${score}.`);
    }

    score++;
    if(score === 10){
      alert (`You've reached the end of the quiz, your score was ${score}. Please play again!`);

    } else {
    alert(`Correct! Your score is now ${score}!`);
  }
  }


 

}

playGame();




/*
// ✅ask user if they want to play
// ✅if they don't want to play, stop immediately and don't run any of the steps below.
// ✅initialise the user's score as 0
// ✅loop over the array starting at question 1 up to and including question 10. for each question:
//     ✅ show the question number, question text and choices
//      ✅ask the user to enter a choice
//      ✅if the user has cancelled (whilst entering a choice):
//          ✅tell them they've cancelled and won't see any questions
//          ✅stop everything (not just the loop) immediately and don't run any more steps
//     v  otherwise make sure the user has entered either: A or B or C or D or a or b or c or d
//     v if they haven't entered a valid choice, prompt them again
//      if user's choice doesn't match the correct choice (for the current question):
//         v tell the user they answered incorrectly, what the correct answer was and what their score is
//         v stop everything (not just the loop) immediately and don't run any more steps
//      otherwise (user must have answered correctly):
//         v increment the user's score
//         v tell the user they answered correctly and what their current score is
// v the user will only make it to the end of the loop if they've answered all 10 questions.
// v after the loop, tell the user they've reached the end of the quiz and what their score is.
v Users have reported several bugs in the quiz app:

✅Quiz proceeds after users decline to play.
v Incorrect score tracking - scores are too low.
v Crashes after 10 questions are asked.
*/