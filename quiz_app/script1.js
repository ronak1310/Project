const quizData=[
    {
        question:'How old I am?',
        a:'14',
        b:'18',
        c:'17',
        d:'5',
        correct:'b'
    },
    {
        question:'What is the best programming language?',
        a:'Python',
        b:'C',
        c:'Java',
        d:'Javascript',
        correct:'b'
    },
    {
        question:'Who is the prime minister of India?',
        a:'Ronak Sharma',
        b:'Nanu Sharma',
        c:'Mahatma Gandhi',
        d:'Narendra Modi',
        correct:'d'
    },
    {
        question:'What is my favourite color?',
        a:'Red',
        b:'Black',
        c:'Yellow',
        d:'Green',
        correct:'a'
    },
    {
        question:'what i like most?',
        a:'eating',
        b:'sleeping',
        c:'traveling',
        d:'al of the above',
        correct:'d'
    },
]

const questionEl = document.getElementById("question");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submitBtn=document.getElementById("submit");
 const answerEls=document.querySelectorAll('.answer');
  const quiz=document.getElementById('quiz');
let currentQuiz=0;
let score=0;
loadQuiz();

function loadQuiz(){
deselectAnswer();

    const currentQuizData=quizData[currentQuiz];
    questionEl.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
    
}

function getSelected() {
 
    let answer=undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer=answerEl.id;
        }
    });
    return answer;

}

function deselectAnswer(){
    answerEls.forEach((answerEl) => {
        answerEl.checked=false;
    });
}

submitBtn.addEventListener("click",()=>{
 const answer= getSelected();
    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++;
        }

     currentQuiz++;
    if (currentQuiz<quizData.length){
        loadQuiz();
     }else{
        quiz.innerHTML= `<h2>Congratulations!You answered correctly  ${score}/${quizData.length} questions! </h2>`;
     }
       
    }
 
   
});
