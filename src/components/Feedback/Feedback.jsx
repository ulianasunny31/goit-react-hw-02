import css from './Feedback.module.css';
import PropTypes from 'prop-types';
import React from 'react';


const Feedback = ({ reviews, totalFeedback, positiveFeedback }) => {
    
const reviewTypes = Object.entries(reviews);
     
  return (
    <div className={css.feedbackDiv}>
          {
              reviewTypes.map(([name, count]) => {
                  return (
                    <React.Fragment key={name}>
                     <p className={css.feedbackP}>{name}: <span>{count}</span></p>
                    </React.Fragment>
                  )
              })
      }
      {!!totalFeedback && (
        <>
          <p className={css.fbAll}>Total: <span>{totalFeedback}</span></p>
          <p className={css.fbAll}>Positive: <span>{positiveFeedback}%</span></p>
        </>
      )}
    </div>
  )
}



Feedback.propTypes = {
  reviews: PropTypes.object.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
 

export default Feedback;