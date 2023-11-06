import React, {useEffect, useState } from 'react'
import './Art.css'



function Art() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [questions, setQuestions] = useState([]);
  const [showScoreAndReset, setShowScoreAndReset] = useState(false);
  




const art=[
  {
    id:"1",
    qs:"Who painted the Mona Lisa?",
    ans1:{
      status:true,
      value:"Leonardo da Vinci"
    },
    ans2:{
      status:false,
      value:"Pablo Picasso"
    },
    ans3:{
      status:false,
      value:"Claude Monet"
    },
    ans4:{
      status:false,
      value:"Vincent van Gogh"
    }
   },

   {
      id:"2",
      qs:"Who painted the Sistine Chapel?",
      ans1:{
        status:true,
        value:"Michelangelo"
      },
      ans2:{
        status:false,
        value:"Leonardo da Vinci"
      },
      ans3:{
        status:false,
        value: "Pablo Picasso"
      },
      ans4:{
        status:false,
        value: "Raphael"
      }
     },

     {
      id:"3",
      qs:"Which painting was not made by Vincent Van Gogh?",
      ans1:{
        status:true,
        value:"The Ninth Wave"
      },
      ans2:{
        status:false,
        value:"Caf&eacute; Terrace at Night"
      },
      ans3:{
        status:false,
        value:"Bedroom In Arles"
      },
      ans4:{
        status:false,
        value:"Starry Night"
      }
     },

     {
      id:"4",
      qs:"Which Van Gogh painting depicts the view from his asylum in Saint-R&eacute;my-de-Provence in southern France?",
      ans1:{
        status:true,
        value:"The Starry Night"
      },
      ans2:{
        status:false,
        value:   "Wheatfields with Crows"
      },
      ans3:{
        status:false,
        value:    "The Sower with Setting Sun"
      },
      ans4:{
        status:false,
        value:   "The Church at Auvers"
      }
     },

     {
      id:"5",
      qs:"Which artist is known for his series of paintings depicting water lilies?",
      ans1:{
        status:true,
        value: " Claude Monet"
      },
      ans2:{
        status:false,
        value:" Vincent van Gogh"
      },
      ans3:{
        status:false,
        value:"Salvador Dali"
      },
      ans4:{
        status:false,
        value: "Jackson Pollock"
      }
     },


     {
      id:"6",
      qs: "What is the bloodiest event in United States history, in terms of casualties?",
      ans1:{
        status:true,
        value:"Battle of Antietam"
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
        value: "D-Day"
      }
     },

     {
      id:"7",
      qs: "What nationality was the surrealist painter Salvador Dali?",
      ans1:{
        status:true,
        value: "Spanish"
      },
      ans2:{
        status:false,
        value:"Italian"
      },
      ans3:{
        status:false,
        value:"French"
      },
      ans4:{
        status:false,
        value:"Portuguese"
      }
     },

     {
      id:"8",
      qs: " Which art movement includes works characterized by bold colors, geometric shapes, and abstract forms?",
      ans1:{
        status:true,
        value:"Cubism"

      },
      ans2:{
        status:false,
        value:"Impressionism"

      },
      ans3:{
        status:false,
        value: "Surrealism"
      },
      ans4:{
        status:false,
        value:"Baroque"
      }
     },

     {
      id:"9",
      qs:" Which famous Dutch painter cut off a portion of his own ear?",
      ans1:{
        status:true,
        value:"Vincent van Gogh"
      },
      ans2:{
        status:false,
        value:"Johannes Vermeer"
      },
      ans3:{
        status:false,
        value:"Rembrandt"
      },
      ans4:{
        status:false,
        value: "Piet Mondrian"
      }
     },

     {
      id:"10",
      qs:"What French sculptor designed the Statue of Liberty?",
      ans1:{
        status:true,
        value: "Fr&eacute;d&eacute;ric Auguste Bartholdi",
      },
      ans2:{
        status:false,
        value:"Jean-L&eacute;on G&eacute;r&ocirc;me"
      },
      ans3:{
        status:false,
        value:"Auguste Rodin"
      },
      ans4:{
        status:false,
        value:"Henri Matisse"
      }
     }


]


useEffect(() => {
  shuffleOptions();
}, [currentQuestion]);

const shuffleOptions = () => {
  const shuffledOptions = [
    art[currentQuestion].ans1.value,
    art[currentQuestion].ans2.value,
    art[currentQuestion].ans3.value,
    art[currentQuestion].ans4.value,
  ].sort(() => Math.random() - 0.5);
  setQuestions(shuffledOptions);
};


const handleAnswerClick = (answer) => {
  setSelectedAnswer(answer);
  const correctAnswer = art[currentQuestion].ans1.value;
  const correct = answer === correctAnswer;
  setIsCorrectAnswer(correct);
  if (!correct) {
    setCorrectAnswer(correctAnswer);
    setShowScoreAndReset(true);
  }
};

const handleNextButtonClick = () => {
  if (selectedAnswer === art[currentQuestion].ans1.value) {
    setScore(score + 1);
    shuffleOptions();
  }

  if (currentQuestion < art.length - 1) {
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
    <div style={{ height: '100vh', color: 'white' }} className='main d-flex justify-content-center align-items-center'>
      <div className="content">
        <div className='ques'>
          <h6 style={{ fontSize: '15px', fontWeight: 'bold' }}>{art[currentQuestion].qs}</h6>
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
              {score === art.length ? (
              <p style={{color:'red'}} className='final'>You Won!</p>
            ) : (
              <p className='final'>Your Score: {score}/{art.length}</p>
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

export default Art