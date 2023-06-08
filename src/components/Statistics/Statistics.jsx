import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={css.statistic}> Good: {good}</p>
      <p className={css.statistic}> Neutral: {neutral}</p>
      <p className={css.statistic}> Bad: {bad}</p>
      <p className={css.statistic}> Total: {total}</p>
      <p className={css.statistic}> Positive Feedback: {positivePercentage}%</p>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
