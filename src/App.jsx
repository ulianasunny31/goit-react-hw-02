import { useState } from 'react';
import './App.css'
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

const App = () => {
  //reviews state
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const values = Object.values(reviews);
  const totalFeedback = values.reduce((item, acc) => item + acc, 0)
 

  function updateFeedback(feedbackType) {
    setReviews(prev => {
      return {
        ...prev,
        [feedbackType]:prev[feedbackType]+1,
    }
  })

  }


  //structure
  return (
    <>
      <Description /> 
      <Options reviews={reviews} updateOnClick={updateFeedback}/>
      {totalFeedback ? <Feedback reviews={reviews}/> : <Notification/>}
    </>
)
};





export default App
