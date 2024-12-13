import { useState, useEffect } from 'react';
import './App.css'
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

const App = () => {
  //reviews state
  const [reviews, setReviews] = useState(() => {
    const savedReviews = window.localStorage.getItem('feedback');
    
    if (savedReviews !== null) return JSON.parse(savedReviews);
    
    return {
     good: 0,
     neutral: 0,
     bad: 0
  }
  });
  

  //saving data effect
  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(reviews))
  }, [reviews])

  //total feedback number
  const totalFeedback = (Object.values(reviews)).reduce((item, acc) => item + acc, 0)
  const positiveFeedback = Math.round((reviews.good/totalFeedback)*100)
 

  function updateFeedback(feedbackType) {
    setReviews(prev => {
      return {
        ...prev,
        [feedbackType]:prev[feedbackType]+1,
    }
  })

  }

  function resetFeedback() {
    setReviews({
      good: 0,
      neutral: 0,
      bad: 0
      })
  }

  //structure
  return (
    <>
      <Description /> 
      <Options {...{reviews,totalFeedback}} updateOnClick={updateFeedback} resetOnClick={resetFeedback}/>
      {totalFeedback ? <Feedback {...{ positiveFeedback, reviews, totalFeedback }}/> : <Notification/>}
    </>
)
};





export default App

 