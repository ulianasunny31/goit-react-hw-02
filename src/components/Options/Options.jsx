import css from './Options.module.css';
import PropTypes from 'prop-types';


const Options = ({ reviews, updateOnClick, totalFeedback, resetOnClick } ) => {
    
    const optionName = Object.keys(reviews);
    
  return (
    <div className={css.optDiv}>
          {
              optionName.map((name) => <button
                  key={name}
                  onClick={() => updateOnClick(name)}>
                {name}
              </button>)
      }
      {!!totalFeedback && <button onClick={resetOnClick}>Reset</button>}
    </div>
  )
}

Options.propTypes = {
  reviews: PropTypes.object.isRequired,  
  updateOnClick: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  resetOnClick:PropTypes.func.isRequired,
};

 

export default Options;