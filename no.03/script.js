const questions = [
    {
        questions:"বিশ্বের সবচেয়ে বড় মহাসাগর কোনটি?",
        answers:[
            {text:"প্রশান্ত মহাসাগর", correct:true},
            {text:"আটলান্টিক মহাসাগর", correct:false},
            {text:"ইন্ডিয়ান মহাসাগর", correct:false},
            {text:"আর্কটিক মহাসাগর", correct:false},
        ]  
    },
    {
        questions:"বিশ্বের সবচেয়ে উচ্চ পর্বত কোনটি?",
        answers:[
            {text:"কাংচেঞ্চাঙ্গা", correct:false},
            {text:"হিমালয়", correct:false},
            {text:"মাউন্ট এভারেস্ট", correct:true},
            {text:"অ্যান্ডস", correct:false},
        ]  
    },
    {
        questions:"বিজয় দিবস কবে পালন করা হয়?",
        answers:[
            {text:"২১শে ফেব্রুয়ারি", correct:false},
            {text:"২৬শে মার্চ", correct:false},
            {text:"১৪ই অগাস্ট", correct:false},
            {text:"১৬ই ডিসেম্বর", correct:true},
        ]  
    },
    {
        questions:"বাংলাদেশের জাতীয় কবিতা কোনটি?",
        answers:[
            {text:"আমার সোনার বাংলা", correct:true},
            {text:"জন গণ মন", correct:false},
            {text:"আমার বন্ধুরে", correct:false},
            {text:"আমি বাংলাদেশের", correct:false},
        ]  
    },
];

const questionelim = document.querySelector('.question')
const ansbtn = document.querySelector('#answer-button')
const nextbtn = document.querySelector('#next-button')


let currentquestionindex = 0;
let score = 0;

function startquiz(){
    currentquestionindex = 0;
    score = 0;
    nextbtn.innerHTML = 'next';
    showqustion()
}
function showqustion(){
    resetstate();
    let currentqustion = questions[currentquestionindex];
    let quistionno = currentquestionindex + 1;
    questionelim.innerHTML = quistionno + '. ' + currentqustion.questions;

    currentqustion.answers.forEach(answer =>{
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        ansbtn.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    })
}
function resetstate(){
    nextbtn.style.display = 'none'
    while(ansbtn.firstChild){
        ansbtn.removeChild(ansbtn.firstChild);
    }
}

function selectAnswer(e){
   const selactedbtn = e.target;
   const iscorret = selactedbtn.dataset.correct === 'true';
   if(iscorret){
    score++;
    selactedbtn.classList.add('correct')
   } else{
    selactedbtn.classList.add('incorrect')
   }
   Array.from(ansbtn.children).forEach(button =>{
     if(button.dataset.correct === 'true'){
        button.classList.add('correct')
     }
     button.disabled = true;
   });
   nextbtn.style.display = 'block';
}

function showscor(){
    resetstate();
    questionelim.innerHTML = `you scord ${score} out of ${questions.length} !`
    nextbtn.innerHTML = 'play again';
    nextbtn.style.display = 'block';
}

function handleNextButton(){
    currentquestionindex++;
    if(currentquestionindex < questions.length){
        showqustion()
    }else{
        showscor()
    }
}

nextbtn.addEventListener('click', ()=>{
    if(currentquestionindex < questions.length){
       handleNextButton(); 
    }else{
        startquiz()
    }
})
startquiz()










