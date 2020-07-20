//Suppose this code would be a plugin for other programmers to use in their code.
//So make sure that all your code is private and doesn't interfere with the other programmsrs code
    // (function(){
    //     //building a function constructor to describe the question.
    //     function Question(question, answers, correct){
    //         this.question = question;
    //         this.answers = answers;
    //         this.correct = correct;
    //     }
        
    //     //display a question (randomly (coded below with Math.rondom) and possible answers)
    //     Question.prototype.displayQuestion = function(){
    //         console.log(this.question);
    //     //disply all the possible answers
    //         for (var i=0; i < this.answers.length; i++) {
    //             //because of 'i + ':'', each answer has numbering from 0
    //             console.log(i + ':' + this.answers[i]);
    //         } 
    //     }
    
    //     //cheking if the answer is correct(ans = the input from the user)
    //     Question.prototype.checkAnswer = function(ans) {
    //         if (ans === this.correct) {
    //             console.log('Correct Answer!');
    //         } else {
    //             console.log('Wrong answer. Try again!')
    //         }
    //     }
        
    //     //creating questions q1 to q3 using the constructor
    //     var q1 = new Question('In which country is Nagoya located?', 
    //     ['Japan', 'Germany', 'US'], 0);
    
    //     var q2 = new Question('Is pikachu appeared in pokemon or one piece?',
    //     ['pokemon', 'one piece'], 0);
    
    //     var q3 = new Question('Is Japan English speaking country?',
    //     ['yes', 'no'], 1);
        
    //     //storing the questions in an array
    //     var questions = [q1, q2, q3];
    
    //     //Displaying a quesrtion and its possible answers rondomly
    //     var n = Math.floor(Math.random() * questions.length);
    
    //     //Calling the displaying question rondomly
    //     questions[n].displayQuestion();
    
    //     //After displaying the question, there will be the prompt.
    //     var answer = parseInt(prompt('Please select the correct answer.'));
        
    //     //calling the checking answer 
    //     questions[n].checkAnswer(answer);
    // })();
    
    //Expert Level Question///////////////////////////////
    (function(){
        //building a function constructor to describe the question.
        function Question(question, answers, correct){
            this.question = question;
            this.answers = answers;
            this.correct = correct;
        }
        
        //display a question (randomly (coded below with Math.rondom) and possible answers)
        Question.prototype.displayQuestion = function(){
            console.log(this.question);
        //disply all the possible answers
            for (var i=0; i < this.answers.length; i++) {
                //because of 'i + ':'', each answer has numbering from 0
                console.log(i + ':' + this.answers[i]);
            } 
        }
    
        //cheking if the answer is correct(ans = the input from the user)
        Question.prototype.checkAnswer = function(ans, callback) {
            var sc;

            if (ans === this.correct) {
                console.log('Correct Answer!');
                sc = callback(true);
            } else {
                console.log('Wrong answer. Try again!');

                sc = callback(false);
            }

            this.displayScore(sc);
        }
        

        Question.prototype.displayScore = function(score){
            console.log('your current score is: ' + score);
            console.log('-----------------------------------------')
        }

        //creating questions q1 to q3 using the constructor
        var q1 = new Question('What type of animal is a seahorse?', 
        ['Crustacean', 'Arachnid', 'Fish', 'Shell'], 2);
    
        var q2 = new Question('Which of the following dog breeds is the smallest?',
        ['Dachshund', 'Poodle', 'Pomeranian', 'Chihuahua'], 3);
    
        var q3 = new Question('Fill in the blank: Out of these pets, there are the most pet _____ in the U.S.', 
        ['Birds', 'Cats', 'Dogs', 'Horeses'], 1);


         //storing the questions in an array
        var questions = [q1, q2, q3];

        function score() {
            var sc = 0;
            return function (correct){
                if (correct) {
                    sc++;
                }
                return sc;
            }
        }

        var keepScore = score();
        
        function nextQuestion(){
        
            //Displaying a quesrtion and its possible answers rondomly
            var n = Math.floor(Math.random() * questions.length);
        
            //Calling the displaying question rondomly
            questions[n].displayQuestion();
        
            //After displaying the question, there will be the prompt.
            var answer = prompt('Please select the correct answer.');


            if(answer !== 'exit') {
                
                //calling the checking answer
                //We want to check the answer only when the user wants to continue.
                questions[n].checkAnswer(parseInt(answer), keepScore);

                nextQuestion();
            }

        }
        //Maing the display question randomly function as next question,
        //so that the next random question will be displayed
        //by calling nextQuestion right after the function.
        nextQuestion();

    })();
    