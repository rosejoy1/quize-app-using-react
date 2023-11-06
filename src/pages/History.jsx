import React, { useEffect, useState } from 'react'

function History() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [questions, setQuestions] = useState([]);
  const [showScoreAndReset, setShowScoreAndReset] = useState(false);
  





const history=[
  {
    id:"1",
    qs: "To what political party did Abraham Lincoln belong when elected POTUS?",
    ans1:{
      status:true,
      value:"Republican",
    },
    ans2:{
      status:false,
      value:"Democrat"
    },
    ans3:{
      status:false,
      value:"Independent"
    },
    ans4:{
      status:false,
      value:"Whig"
    }
   },

   {
      id:"2",
      qs: "In 1453, which important city fell?",
      ans1:{
        status:true,
        value:"Constantinople"
      },
      ans2:{
        status:false,
        value:"Rome"
      },
      ans3:{
        status:false,
        value:  "Hamburg"
      },
      ans4:{
        status:false,
        value:  "Athens"
      }
     },

     {
      id:"3",
      qs:"What was William Frederick Cody better known as?",
      ans1:{
        status:true,
        value: "Buffalo Bill"
      },
      ans2:{
        status:false,
        value:"Billy the Kid"
      },
      ans3:{
        status:false,
        value:"Wild Bill Hickok"
      },
      ans4:{
        status:false,
        value:"Pawnee Bill"
      }
     },

     {
      id:"4",
      qs: "What is the historical name of Sri Lanka?",
      ans1:{
        status:true,
        value: "Ceylon"
      },
      ans2:{
        status:false,
        value: "Myanmar"
      },
      ans3:{
        status:false,
        value: "Colombo"
      },
      ans4:{
        status:false,
        value: "Badulla"
      }
     },

     {
      id:"5",
      qs:"What is the bloodiest event in United States history, in terms of casualties?",
      ans1:{
        status:true,
        value: "Battle of Antietam"
      },
      ans2:{
        status:false,
        value:"Pearl Harbor"
      },
      ans3:{
        status:false,
        value:"September 11th"
      },
      ans4:{
        status:false,
        value:"D-Day"
      }
     },


     {
      id:"6",
      qs: "In which year did Christopher Columbus first reach the Americas?",
      ans1:{
        status:true,
        value:"1492"
      },
      ans2:{
        status:false,
        value:"1453"
      },
      ans3:{
        status:false,
        value:"1510"
      },
      ans4:{
        status:false,
        value: "1520"
      }
     },

     {
      id:"7",
      qs: "Which of these countries was NOT a part of the Soviet Union?",
      ans1:{
        status:true,
        value:  "Afghanistan"
      },
      ans2:{
        status:false,
        value:"Turkmenistan"
      },
      ans3:{
        status:false,
        value:"Kazakhstan"
      },
      ans4:{
        status:false,
        value:"Uzbekistan"
      }
     },

     {
      id:"8",
      qs: "What is the oldest US state?",
      ans1:{
        status:true,
        value: "Delaware"
      },
      ans2:{
        status:false,
        value:"Rhode Island"
      },
      ans3:{
        status:false,
        value: "Maine"
      },
      ans4:{
        status:false,
        value:"Virginia"
      }
     },

     {
      id:"9",
      qs: "What was the last colony the UK ceded marking the end of the British Empire?",
      ans1:{
        status:true,
        value:"Hong Kong"
      },
      ans2:{
        status:false,
        value:"India"
      },
      ans3:{
        status:false,
        value:"Australia"
      },
      ans4:{
        status:false,
        value: "Ireland"
      }
     },

     {
      id:"10",
      qs: "Who was the first man to travel into outer space twice?",
      ans1:{
        status:true,
        value: "Gus Grissom"
      },
      ans2:{
        status:false,
        value:"Vladimir Komarov"
      },
      ans3:{
        status:false,
        value:"Charles Conrad"
      },
      ans4:{
        status:false,
        value:"Yuri Gagarin"
      }
     }


]


useEffect(() => {
  shuffleOptions();
}, [currentQuestion]);

const shuffleOptions = () => {
  const shuffledOptions = [
    history[currentQuestion].ans1.value,
    history[currentQuestion].ans2.value,
    history[currentQuestion].ans3.value,
    history[currentQuestion].ans4.value,
  ].sort(() => Math.random() - 0.5);
  setQuestions(shuffledOptions);
};


const handleAnswerClick = (answer) => {
  setSelectedAnswer(answer);
  const correctAnswer = history[currentQuestion].ans1.value;
  const correct = answer === correctAnswer;
  setIsCorrectAnswer(correct);
  if (!correct) {
    setCorrectAnswer(correctAnswer);
    setShowScoreAndReset(true);
  }
};


const handleNextButtonClick = () => {
  if (selectedAnswer === history[currentQuestion].ans1.value) {
    setScore(score + 1);
    shuffleOptions();
  }

  if (currentQuestion < history.length - 1) {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
    setIsCorrectAnswer(null);
    setCorrectAnswer('');
    setShowScoreAndReset(false);
  } else {
    setShowScoreAndReset(true);
  }
};





const handleResetClick = () => {
  setCurrentQuestion(0);
  setSelectedAnswer(null);
  setScore(0);
  setIsCorrectAnswer(null);
  setCorrectAnswer('');
  shuffleOptions();
  setShowScoreAndReset(false);
};




  return (
    <div>
    <h3 style={{ color: 'white', textAlign: 'center', marginTop: '1rem' }}>Question {currentQuestion + 1}</h3>
    <div style={{ height: '100vh', color: 'white' }} className='d-flex justify-content-center align-items-center'>
      <div className="content">
        <div className='ques'>
          <h6 style={{ fontSize: '15px', fontWeight: 'bold' }}>{history[currentQuestion].qs}</h6>
        </div>
        <div className="ans-content">
          {questions.map((option, index) => (
            <button
              key={index}
              style={{
                color: 'white',
                backgroundColor: selectedAnswer === option ? (isCorrectAnswer ? 'green' : 'red') : '',
              }}
              className={`ans ${selectedAnswer === option ? 'selected' : ''}`}
              onClick={() => handleAnswerClick(option)}
            >
              {String.fromCharCode(97 + index)}. {option}
            </button>
          ))}
        </div>
        {isCorrectAnswer === false && <p style={{ color: 'red',fontWeight:'bold',marginTop:'1rem' }}>Correct Answer: {correctAnswer}</p>}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          {showScoreAndReset ? (
           <div>
           {score === history.length ? (
           <p style={{color:'red'}} className='final'>You Won!</p>
         ) : (
           <p className='final'>Your Score: {score}/{history.length}</p>
         )}
            <div className='d-flex justify-content-center align-items-center'>
                <button className='btn' onClick={handleResetClick}>
                  Reset
                </button>
            </div>
            </div>
          ) : (
            <button className='btn1' onClick={handleNextButtonClick} >
              Next
            </button>
          )}
          
        </div>
       
      </div>
    </div>
  </div>

  )
}

export default History