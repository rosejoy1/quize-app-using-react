import React, { useEffect, useState } from 'react'

function Entertainment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [questions, setQuestions] = useState([]);
  const [showScoreAndReset, setShowScoreAndReset] = useState(false);
  

  
  
  
  const entertainment=[
    {
      id:"1",
      qs:"In the Star Trek universe, what color is Vulcan blood?",
      ans1:{
        status:true,
        value:"Green"
      },
      ans2:{
        status:false,
        value:"Blue"
      },
      ans3:{
        status:false,
        value:"Red"
      },
      ans4:{
        status:false,
        value:"Purple"
      }
     },
  
     {
        id:"2",
        qs:"  Which pop artist is known as the Queen of Pop?",
        ans1:{
          status:true,
          value:"Beyoncé"
        },
        ans2:{
          status:false,
          value:"Lady Gaga"
        },
        ans3:{
          status:false,
          value: " Madonna "
        },
        ans4:{
          status:false,
          value: " Rihanna"
        }
       },
  
       {
        id:"3",
        qs: "Which animated movie was first to feature a celebrity as a voice actor?",
        ans1:{
          status:true,
          value:"Aladdin"
        },
        ans2:{
          status:false,
          value:"Toy Story"
        },
        ans3:{
          status:false,
          value: "James and the Giant Peach"
        },
        ans4:{
          status:false,
          value:"The Hunchback of Notre Dame"
        }
       },
  
       {
        id:"4",
        qs:"Who wrote the famous play Romeo and Juliet",
        ans1:{
          status:true,
          value:" William Shakespeare "
        },
        ans2:{
          status:false,
          value:"Jane Austen"
        },
        ans3:{
          status:false,
          value:  " Charles Dickens"
        },
        ans4:{
          status:false,
          value: "Mark Twain"
        }
       },
  
       {
        id:"5",
        qs: "In Game of Thrones what is the name of Jon Snow&#039;s sword?",
        ans1:{
          status:true,
          value: "Longclaw"
        },
        ans2:{
          status:false,
          value:"Oathkeeper"
        },
        ans3:{
          status:false,
          value:"Widow&#039;s Wail"
        },
        ans4:{
          status:false,
          value: "Needle"
        }
       },
  
  
       {
        id:"6",
        qs: " Who is the director of the film Inception",
        ans1:{
          status:true,
          value: "Christopher Nolan"
        },
        ans2:{
          status:false,
          value:" Quentin Tarantino"
        },
        ans3:{
          status:false,
          value: "Steven Spielberg"
        },
        ans4:{
          status:false,
          value:" Martin Scorsese"
        }
       },
  
       {
        id:"7",
        qs:  "Which of these artists do NOT originate from France?",
        ans1:{
          status:true,
          value: "The Chemical Brothers"
        },
        ans2:{
          status:false,
          value:"Air"
        },
        ans3:{
          status:false,
          value: "Justice"
        },
        ans4:{
          status:false,
          value: "Daft Punk"
        }
       },
  
       {
        id:"8",
        qs: "Which TV series features dragons, direwolves, and the Iron Throne?",
        ans1:{
          status:true,
          value:"Game of Thrones "
        },
        ans2:{
          status:false,
          value:"Vikings"
        },
        ans3:{
          status:false,
          value: "The Witcher"
        },
        ans4:{
          status:false,
          value:" Stranger Things"
        }
       },
  
       {
        id:"9",
        qs:"Who wrote the novel 1984",
        ans1:{
          status:true,
          value:" George Orwell"
        },
        ans2:{
          status:false,
          value:" Aldous Huxley"
        },
        ans3:{
          status:false,
          value:"Ernest Hemingway"
        },
        ans4:{
          status:false,
          value: " F. Scott Fitzgerald"
        }
       },
  
       {
        id:"10",
        qs:" What is the highest-grossing film of all time (as of my knowledge cutoff in January 2022)?",
        ans1:{
          status:true,
          value:" Avengers: Endgame"

        },
        ans2:{
          status:false,
          value: "Avatar",

        },
        ans3:{
          status:false,
          value:" Titanic"
        },
        ans4:{
          status:false,
          value:" Star Wars: The Force Awakens"
        }
       }
  
  
  ]
  
  
  useEffect(() => {
    shuffleOptions();
  }, [currentQuestion]);
  
  const shuffleOptions = () => {
    const shuffledOptions = [
        entertainment[currentQuestion].ans1.value,
        entertainment[currentQuestion].ans2.value,
      entertainment[currentQuestion].ans3.value,
      entertainment[currentQuestion].ans4.value,
    ].sort(() => Math.random() - 0.5);
    setQuestions(shuffledOptions);
  };
  
  
  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    const correctAnswer = entertainment[currentQuestion].ans1.value;
    const correct = answer === correctAnswer;
    setIsCorrectAnswer(correct);
    if (!correct) {
      setCorrectAnswer(correctAnswer);
      setShowScoreAndReset(true);
    }
  };
  
  
const handleNextButtonClick = () => {
  if (selectedAnswer === entertainment[currentQuestion].ans1.value) {
    setScore(score + 1);
    shuffleOptions();
  }

  if (currentQuestion < entertainment.length - 1) {
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
            <h6 style={{ fontSize: '15px', fontWeight: 'bold' }}>{entertainment[currentQuestion].qs}</h6>
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
             {score === entertainment.length ? (
             <p style={{color:'red'}} className='final'>You Won!</p>
           ) : (
             <p className='final'>Your Score: {score}/{entertainment.length}</p>
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

export default Entertainment