const startButton = document.getElementById('startButton');
const leftDiv = document.querySelector('#left');
const startingView = document.getElementById('starting-view')
const answerContainer = document.getElementById('answer-container');
const cardContainer = document.getElementById('card-container');
const yourScorePageDiv = document.getElementById('your-score-page')
const question = document.getElementById('question');
const answers = document.getElementById('answers');
const answerResult = document.getElementById('answer-result');
const highScorePageDiv = document.getElementById('high-score-page');
var score = 0;
var startTime = 60;
var initials;

// This array contains all of the questions and answers
const questionsAndAnswers = [
    {question: '1) What is JavaScript?',
    answers: [
       {option1: 'Markup Language'}, 
       {option2: 'Scripting Language'}, 
       {option3: 'Java add on'}, 
       {option4: 'Operating System'}
       ],
    correctAnswer: 'Scripting Language',
    id: 'card1'
   },
   {question:'2) What is an anonymous function?',
   answers: [
      {option1: 'A function that can not be tracked'},
      {option2: 'A function that creates nameless variables'}, 
      {option3: 'A function that does not have a name'}, 
      {option4: 'Not a real function'}
      ],
   correctAnswer: 'A function that does not have a name',
   id: 'card2'
  },
  {question:'3) What is the DOM used for?',
  answers: [
     {option1: 'Access and change the content of HTML'}, 
     {option2: 'Structure your JavaScript file'}, 
     {option3: 'Interacts with the browser'}, 
     {option4: 'Debug your code '}
     ],
  correctAnswer: 'Access and change the content of HTML',
  id: 'card3'
 },
 {question:'4) What is BOM',
 answers: [
   {option1: 'Does not exist'}, 
   {option2: 'JavaScript module'}, 
   {option3: 'They are the JavaScript creator\’s initials'}, 
   {option4: 'Browser Object Model'}
   ],
 correctAnswer:'Browser Object Model',
 id: 'card4'
},
{question:'5) What is BOM used for?',
answers: [
  {option1: 'Access and change the content of Html'}, 
  {option2: 'Interact with the browser'}, 
  {option3: 'Interact with servers'}, 
  {option4: 'Represent content of the page'}
  ],
correctAnswer: 'Interact with the browser',
id:'card5'
},
{question:'6) What is the difference between == and ===',
answers: [
   {option1: 'There is no difference'}, 
   {option2: '== checks for data types'}, 
   {option3: '=== only checks equality'}, 
   {option4: '=== checks for data types'}
   ],
correctAnswer:'=== checks for data types',
id:'card6'
},
{question:'7) To create an array, you would use:',
answers: [
   {option1: '()'}, 
   {option2: '{}'}, 
   {option3: '[]'}, 
   {option4: 'Any of the options listed above'}
   ],
correctAnswer: '[]',
id:'card7'
},
{question:'8) What is the output of 5 + 5 + “5”',
answers: [
   {option1: '15'}, 
   {option2: '555'}, 
   {option3: '510'}, 
   {option4: '105'}
   ],
correctAnswer:'105',
id:'card8'
},
{question:'9) What was JavaScript’s original name',
answers: [
   {option1: 'Mocha'}, 
   {option2: 'Java'}, 
   {option3: 'Live Script'}, 
   {option4: 'JS'}
   ],
correctAnswer:'Mocha',
id:'card9'
},
{question:'10) You can create a variable with the following, except for',
answers: [
   {option1: 'var'}, 
   {option2: 'set'}, 
   {option3: 'const'}, 
   {option4: 'let'}
   ],
correctAnswer:'set',
id:'card10'
},
{question: '11) In what year was JavaScript created?',
answers: [
    {option1: '1994'},
    {option2: '1995'},
    {option3: '1996'},
    {option4: '1997'}
    ],
correctAnswer: '1995',
id: 'card11'
},
{
    question: '12) Who created JavaScript?',
    answers: [
        {option1: 'Brendan Eich'},
        {option2: 'Brendan Rossum'},
        {option3: 'Guido van Rossum'},
        {option4: 'Guido Eich'}
    ],
    correctAnswer: 'Brendan Eich',
    id: 'card12'
},
{
    question: '13) What is the output of NaN === NaN',
    answers: [
        {option1: 'false'},
        {option2: 'null'},
        {option3: 'undefined'},
        {option4: 'true'}
    ],
    correctAnswer: 'false',
    id: 'card13'
},
{
    question: '14) What is NaN?',
    answers: [
        {option1: 'Does not exist'},
        {option2: 'Large Number'},
        {option3: 'Not a number'},
        {option4: 'Method that adds two numbers'}
    ],
    correctAnswer: 'Not a number',
    id: 'card14'
},
{
    question: '15) What do you use, to comment?',
    aswers: [
        {option1: '//'},
        {option2: '##'},
        {option3: '$$'},
        {option4: '/*'}
    ],
    correctAnswer: '//',
    id: 'card15'
}
]

//This function initiates the quiz
function startQuiz() {

    for(let i=0; i<questionsAndAnswers.length;) {
        
        //Creates a card with one question and 4 possible answers
        function createCard(i) {
            const card = document.createElement('div');
            cardContainer.append(card);
            card.setAttribute('class', 'card');
            card.setAttribute('id', questionsAndAnswers[i].id);
            
            const question = document.createElement('div');
            card.append(question);
            question.setAttribute('class', 'question');
            question.innerHTML = questionsAndAnswers[i].question;
        
            const answer1 = document.createElement('div');
            card.append(answer1);
            answer1.setAttribute('class', 'answers')
            answer1.innerHTML = questionsAndAnswers[i].answers[0].option1;
        
            const answer2 = document.createElement('div');
            card.append(answer2);
            answer2.setAttribute('class', 'answers')
            answer2.innerHTML = questionsAndAnswers[i].answers[1].option2;
        
            const answer3 = document.createElement('div');
            card.append(answer3);
            answer3.setAttribute('class', 'answers')
            answer3.innerHTML = questionsAndAnswers[i].answers[2].option3;
        
            const answer4 = document.createElement('div');
            card.append(answer4);
            answer4.setAttribute('class', 'answers')
            answer4.innerHTML = questionsAndAnswers[i].answers[3].option4;
        
            //Adds functionality to the cards
            //Allows the user to select an answer
            const answers = document.querySelectorAll('.answers');
            answers.forEach(answer  => {
                answer.addEventListener('click', event => {
                    const correctAnswer = questionsAndAnswers[i].correctAnswer;
                    console.log(correctAnswer)
                    const optionPicked = event.target.innerHTML;
                    console.log(optionPicked);
                    
                        //If the user clicks on the correct answer, the user will get 10 points added to his score
                        if (optionPicked === correctAnswer) {
                            answerResult.innerHTML = 'Correct!';
                            score = score + 10;
                            console.log(score);
                            i++;
                            createCard(i);
                        } else {
                        //If the user gets the wrong answer, 10 seconds will be removed from the time
                            answerResult.innerHTML = 'Wrong!';
                            startTime = startTime - 10;
                            console.log(startTime);
                            i++;
                            createCard(i);
                        }
                        //Clicking on an option, wil make the card disappear
                        card.style.display='none';
                  
                })
            })
        }
        createCard(i)
        break;
        
    }

}

//Will generate the div that shows you your score
//Will also ask for you initials
function yourScorePage() {
    const card = document.createElement('div');
    yourScorePageDiv.append(card); 

    const h1 = document.createElement('div');
    card.append(h1);
    h1.innerHTML = 'All done!';
    h1.style.fontSize = "50px";

    const h2 = document.createElement('h2');
    card.append(h2);
    h2.innerHTML=`Your final score is ${score}`;

    const form = document.createElement('form');
    card.append(form);

    const span = document.createElement('span');
    form.append(span);
    span.innerHTML = 'Enter Initials:'
    
    const input = document.createElement('input');
    form.append(input)
    input.setAttribute('type', 'text');

    //Button used to send your initials and score to local storage
    const submitButton = document.createElement('button');
    form.append(submitButton);
    submitButton.setAttribute('type', 'button');
    submitButton.setAttribute('id', 'submit')
    submit.innerHTML = 'Submit';
    submit.addEventListener('click', event => {
        //Makes this page disappear
        yourScorePageDiv.style.display='none';
        localStorage.setItem(`${input.value}`, `${score}`);
        //Generates the high score div
        highScorePage();
    })
    
}

//Starts the time
function startTheClock() {
    const timeDiv = document.getElementById('time-div');
    
    const countdown = setInterval(() => {
        const card = document.querySelector('.card');
        startTime--;
        timeDiv.innerHTML = `${startTime}`;
            //Will end the quiz if time ends 
            if(startTime <= 0) {
            clearInterval(countdown);
            cardContainer.style.display='none';
            answerResult.style.display='none';
            //Will show your score
            yourScorePage();
        }
    }, 1000)

}

//Will start the quiz
//Starts the clock
//Will call the startQuiz function which generates the cards with questions and answers
startButton.addEventListener('click', event => {
    startingView.style.display = 'none'
    leftDiv.style.display = 'none';
    startTheClock();
    startQuiz();
});

//Generates the the high score div
leftDiv.addEventListener('click', event => {
    startingView.style.display = 'none';
    highScorePage();
    leftDiv.style.display = 'none';
});

//Will generate the div containing high scores
function highScorePage() {
    const h1 = document.createElement('div');
    highScorePageDiv.append(h1);
    h1.innerHTML = 'High Scores';
    h1.style.fontSize = "50px";
    
    const highScores = document.createElement('div');
    highScorePageDiv.append(highScores);
    highScores.setAttribute('id', 'high-scores')
    const topScores = [];
    //Creates an object and pushes the obect into the topScores variable
    for(let i=0; i<localStorage.length; i++) {
        //Pulls data from local storage
        const userInitials = localStorage.key(i);
        const userScore = localStorage.getItem(userInitials);
        function buildObject(userInitials, userScore) {
            let object = {initials: userInitials, score: userScore};
            topScores.push(object);
        }
        buildObject(userInitials, userScore);
    }
    console.log(topScores);
    
    //Sorts the scores from greatest to smallest
    topScores.sort((a, b) => {
        return b.score - a.score;
    })
    
    //Generates the high scores
    topScores.forEach((event) => {
        highScores.innerHTML += `${event.initials} ${event.score} <br/>`;
    })

    //Button that will send you to the starting view
    const goBackButton = document.createElement('button');
    highScorePageDiv.append(goBackButton);
    goBackButton.setAttribute('type', 'button');
    goBackButton.setAttribute('class', 'high-score-buttons');
    goBackButton.innerHTML = 'Go Back';
    //Just realoads the page to go to starting view
    goBackButton.addEventListener('click', event => {
        location.reload();
    })

    //Button used to clear all of the scores
    const clearHighScoresButton = document.createElement('button');
    highScorePageDiv.append(clearHighScoresButton);
    clearHighScoresButton.setAttribute('type', 'button');
    clearHighScoresButton.setAttribute('class', 'high-score-buttons');
    clearHighScoresButton.innerHTML = 'Clear High Scores';
    //Deletes local storage
    clearHighScoresButton.addEventListener('click', event => {
        localStorage.clear();
        location.reload();
    })
}

