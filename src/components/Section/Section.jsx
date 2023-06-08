import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={css['wrapper-section']}>
      <p className={css.title}>{title}</p>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
