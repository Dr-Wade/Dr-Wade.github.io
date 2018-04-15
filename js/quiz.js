var myQuestions = [
    {
        question: "Qui a composé l'extrait n°1 ?",
        answers: {
            a: 'Un humain',
            b: 'Un ordinateur',
        },
        correctAnswer: 'b'
    },
    {
        question: "Qui a composé l'extrait n°2 ?",
        answers: {
            a: 'Un humain',
            b: 'Un ordinateur',
        },
        correctAnswer: 'b'
    },
    {
        question: "Qui a composé l'extrait n°3 ?",
        answers: {
            a: 'Un humain',
            b: 'Un ordinateur',
        },
        correctAnswer: 'a'
    },
    {
        question: "Qui a composé l'extrait n°4 ?",
        answers: {
            a: 'Un humain',
            b: 'Un ordinateur',
        },
        correctAnswer: 'b'
    },
    {
        question: "Qui a composé l'extrait n°5 ?",
        answers: {
            a: 'Un humain',
            b: 'Un ordinateur',
        },
        correctAnswer: 'a'
    },
    {
        question: "Qui a composé l'extrait n°6 ?",
        answers: {
            a: 'Un humain',
            b: 'Un ordinateur',
        },
        correctAnswer: 'a'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var commentaire = [ "La puissance de l'IA est alors telle qu'elle réussit à imiter parfaitement la composition humaine.",
                   "La puissance de l'IA est alors telle qu'elle réussit à imiter parfaitement la composition humaine.",
                   "L'IA semble en bonne voie dans son but de devenir indiscernable des compositeurs humains.",
                   "L'IA semble en bonne voie dans son but de devenir indiscernable des compositeurs humains.",
                   "Bravo ! Nous voyons là que l'IA n'est pas encore assez performante pour vous dupez plus d'une fois.",
                   "Bravo ! Nous voyons là que l'IA n'est pas encore assez performante pour vous dupez plus d'une fois.",
                   "Bravo ! Vous avez l'oreille fine : l'IA n'a pas su vous tromper. "];

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'"> '
                        
                        + questions[i].answers[letter]
                    + '<span style="display:inline-block; width: 20px;"></span></label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="col-md-4 col-sm-6">'+
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div> </div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML ='<p>Vous avez identifié correctement ' + numCorrect +' extrait(s) sur ' + questions.length+ '<br>'+commentaire[numCorrect]+'</p>';
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}
