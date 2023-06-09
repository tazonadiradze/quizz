import { useState } from "react";
import './Data.css'
export default function Data() {

 const [currentQuestion, setCurrentQuestion] = useState(0)

 const [result, setResult] = useState(false)
 const [correctAnswer, setCorrectAnswer] = useState(0)

 const questions = [
  {
   questionText: 'What is the capital of France?',
   answerOptions: [
    { answerText: 'New York', isCorrect: false },
    { answerText: 'London', isCorrect: false },
    { answerText: 'Paris', isCorrect: true },
    { answerText: 'Dublin', isCorrect: false },
   ],
  },
  {
   questionText: 'Who is CEO of Tesla?',
   answerOptions: [
    { answerText: 'Jeff Bezos', isCorrect: false },
    { answerText: 'Elon Musk', isCorrect: true },
    { answerText: 'Bill Gates', isCorrect: false },
    { answerText: 'Tony Stark', isCorrect: false },
   ],
  },
  {
   questionText: 'The iPhone was created by which company?',
   answerOptions: [
    { answerText: 'Apple', isCorrect: true },
    { answerText: 'Intel', isCorrect: false },
    { answerText: 'Amazon', isCorrect: false },
    { answerText: 'Microsoft', isCorrect: false },
   ],
  },
  {
   questionText: 'How many Harry Potter books are there?',
   answerOptions: [
    { answerText: '1', isCorrect: false },
    { answerText: '4', isCorrect: false },
    { answerText: '6', isCorrect: false },
    { answerText: '7', isCorrect: true },
   ],
  },
 ];


 const handleClick = (isCorrect) => {

  if (isCorrect === true) {
   setCorrectAnswer(prev => prev + 1)
  }
  const nextQuestion = currentQuestion + 1
  if (nextQuestion < questions.length) {
   setCurrentQuestion(nextQuestion)
  } else {
   setResult(true)

  }





 }
 return (
  <div className='app'>

   {result ? (
    <div className='score-section'>You scored {correctAnswer} out of {questions.length}</div>
   ) : (
    <>
     <div className='question-section'>

      <div className='question-count'>
       <span>Question{currentQuestion}</span>/{questions.length}
      </div>
      <div className='question-text'>{questions[currentQuestion].questionText}</div>
     </div>
     <div className='answer-section'>
      {questions[currentQuestion].answerOptions.map((each) => { return <div onClick={() => handleClick(each.isCorrect)}>{each.answerText}</div> })}
     </div>
    </>
   )}
  </div>
 );
}