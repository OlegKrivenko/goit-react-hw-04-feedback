import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button
      className={css.button}
      type="button"
      key={option}
      name={option}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
