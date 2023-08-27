let currentQuestion = 0;
let correctanwers = 0
showQuestion();

function showQuestion() {

   let pct = Math.floor((currentQuestion/questions.length)*100)
   document.querySelector('.progress--bar').style.width = `${pct}%`

  if (questions[currentQuestion]) {
    let thequestion = questions[currentQuestion].question;
    let questionarea = document.querySelector('.questionArea');
    questionarea.style.display = 'block';
    questionarea.querySelector('.question').innerHTML = thequestion;

    let optionsHTML = '';
    for (i in questions[currentQuestion].options) {
      optionsHTML += `<div data-op='${i}' class='option'><span>${parseInt(i) + 1}</span> ${questions[currentQuestion].options[i]}</div>`;
    }
    document.querySelector('.options').innerHTML = optionsHTML;

    document.querySelectorAll('.options .option').forEach(item => item.addEventListener('click', clickedOption));
  }else { finished()}
}

function clickedOption(e) {

  let clickedoption = parseInt(e.target.getAttribute('data-op'));

      if(questions[currentQuestion].answer === clickedoption){
         correctanwers++;
         }
      currentQuestion++
      showQuestion()
}

function finished()
   {  let text = " ";
    if (correctanwers > 5) {
      text = "Parabéns!!";
    }
    else 
    {text = "Precisa estudar mais...";}
      

      document.querySelector('.scoreArea').style.display = 'block';
      document.querySelector('.questionArea').style.display = 'none';
      document.querySelector('.scoreText1').innerHTML = text;
      document.querySelector('.scorePct').innerHTML = `Acertou ${(correctanwers /questions.length) *100}%`
      document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} e acertou ${correctanwers}`
      document.querySelector('.scoreArea button').addEventListener('click', ()=>
         { currentQuestion = 0
           showQuestion()
           document.querySelector('.scoreArea').style.display = 'none';
           document.querySelector('.progress--bar').style.width = `100%`
           correctanwers = 0;
         });
   }

   
   