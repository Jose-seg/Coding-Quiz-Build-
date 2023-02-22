let MCQS = [{
    question: 'What is the use of isNaN function?' ,
    choice1: 'A function that returns true if the argument is not a number',
    choice2: 'It pushes a new element at the end of an array ',
    choice3: 'It is used to store values in a variable',
    choice4: 'It splits an array into two',
    answer: 0
},{
    question: 'What does the pop() method do in Javascript?' ,
    choice1: 'Removes first element of an array',
    choice2: 'Removes last element of an array',
    choice3: 'It copies an array',
    choice4: 'It splits an array into two',
    answer: 1
},{
    question: 'What operator is this called i++?' ,
    choice1: 'Postwick Operator',
    choice2: 'Increment Operator',
    choice3: 'Postfix Operator',
    choice4: 'Double Incomplete',
    answer: 2
},{
    question: 'What do if/else statement do?' ,
    choice1: 'Executes code if condition is undefined',
    choice2: 'A questioning of reality',
    choice3: 'Manipulates the DOM', 
    choice4: 'Executes code if condition is true or false',
    answer: 3
}];

// Start Ssection 
let start = document.querySelector('#start');

// Guide Section
let guide = document.querySelector('#guide');
let continueBtn = document.querySelector('#continue');


// Quiz Section 
let quiz = document.querySelector('#quiz');
let time = document.querySelector('#time');


// Question Section
let questionNo = document.querySelector('#questionNo');
let questionText = document.querySelector('#questionText');


// Choices for the Questions
let option1 = document.querySelector('#option1');
let option2 = document.querySelector('#option2');
let option3 = document.querySelector('#option3');
let option4 = document.querySelector('#option4');


// Next button for the multiple choices *side-note: Might not use this for final product just to debug*
let total_correct = document.querySelector('#total_correct');
let next_question = document.querySelector('#next_question');



// Result Section
let result = document.querySelector('#result');
let points = document.querySelector('#points');
// let tryAgainBtn = document.querySelector('#tryAgain');
let scoreSubmit = document.querySelector('#scoreSubmit');
let scoreBtn = document.querySelector('.highscore');

//All h4s (MCQS)
let choiceQue = document.querySelectorAll('.choice_que');


let index = 0;
let timer = 16;
let interval = 0;


// total points
let correct = 0;




// store answer value
let userAns = undefined;



// what happens when 'start' is clicked
start.addEventListener('click', ()=>{
    start.style.display = 'none';
    guide.style.display = 'block';
});



// Timer for quiz section 

let countDown = ()=>{
    if(timer === 0) {
        clearInterval(interval);
        quizOver();
        console.log('done')
    }
    else {
        timer--;
        time.innerText = timer;
    };
    timeLoss();
}

// setInterval(countDown, 1000);


let loadData = ()=>{
    questionNo.innerText = index + 1 + '. ';
    questionText.innerText = MCQS[index].question;
    option1.innerText = MCQS[index].choice1;
    option2.innerText = MCQS[index].choice2;
    option3.innerText = MCQS[index].choice3;
    option4.innerText = MCQS[index].choice4;

    // Timer start
    // timer = 10;
    
}

loadData();

// What will happpen when Continue button in the guide is clicked
continueBtn.addEventListener('click', ()=>{
    quiz.style.display = 'block';
    guide.style.display = 'none';


    interval = setInterval(countDown, 1000);
    loadData();
    //Removes all active classes when the continue button is clicked
    choiceQue.forEach(removeActive =>{
        removeActive.classList.remove('active');

    })

    // total_correct.innerHTML = '${correct} out of $ {MCQS.length} right';
});

choiceQue.forEach( (choices,choiceNo) =>{
    choices.addEventListener('click', ()=>{
        choices.classList.add('active');
        // Check answer
        if(choiceNo === MCQS[index].answer)
        {
            correct++;
        }
         else {
            correct+= 0;
            
         }
         // counter stop
        //  clearInterval(interval);

         //disable selecting more than one option
         for(i = 0; i <= 3; i++) {
            choiceQue[i].classList.add('disabled');
         }
    })
    
});


// This should add functionality to the next button so the player can proceed
next_question.addEventListener('click', ()=>{
    console.log(correct, 'correct next_question eventlistener')
    // For if index is less than the length of MCQS
    if(index !== MCQS.length - 1) {
        index++;
        choiceQue.forEach(removeActive => {
            removeActive.classList.remove('active');
    })

    //added this for trying to fix my problem regarding the last answer not being recognized
    // if(index < MCQS.length) {
    //     index++;
    //     choiceQue.forEach(removeActive => {
    //         removeActive.classList.remove('active');
    //     });
    
    loadData();

    //timer

}
   else{
    index = 0;

    //will display results when game is over
    // clearInterval(interval);
    quiz.style.display = 'none';
    result.style.display = 'block';
    points.innerHTML = `${correct} out of ${MCQS.length} right`;
    clearInterval(interval);
    interval = setInterval(countDown, 1000);
   }
   for(i = 0; i <= 3; i++) {
    choiceQue[i].classList.remove('disabled');
 }
    
});

function quizOver(){
        quiz.style.display = 'none';
        result.style.display = 'block';
    
};

// function for decrementing timer if wrong answer is picked
function timeLoss(){
    if(choiceNo !== MCQS[index].answer){
        // timer--;
      interval =  setInterval(countDown, - 2000);
    }
};


// result form for submit initials and score
var form = document.getElementById('form')

form.addEventListener('submit', function(event){
    event.preventDefault() // prevents the form from auto submitting

    var initials = document.getElementById('initials').value

    console.log(initials)

    var finalScore = document.getElementById('finalScore').value

    console.log(finalScore);

    form.append('Score: ')
    form.append(initials);
    form.append('\n');
    form.append(finalScore);


});
    


























