import React from 'react'
import { useParams } from 'react-router-dom';

function QuizWindow() {
  const {id} = useParams();
  return (
    <div>QuizWindow {id}</div>
  )
}

export default QuizWindow;