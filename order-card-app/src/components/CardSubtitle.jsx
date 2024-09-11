import PropTypes from 'prop-types';
import './CardSubtitle.css';

const CardSubtitle = ({ subtitle }) => {
  return <h2 className="card-subtitle">{subtitle}</h2>;
};

CardSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired
};

export default CardSubtitle;
