import css from './Feedback.module.css';
import PropTypes from 'prop-types';
import React from 'react';


const Feedback = ({ reviews }) => {
    
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
    </div>
  )
}



Feedback.propTypes = {
    reviews: PropTypes.object.isRequired,  
};
 

export default Feedback;