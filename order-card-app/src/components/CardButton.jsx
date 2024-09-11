import PropTypes from 'prop-types';
import './CardButton.css';

const CardButton = ({ onClick, text, primary }) => {
  return (
    <button
      className={`card-button ${primary ? 'pay-button' : 'cancel-button'}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

CardButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  primary: PropTypes.bool
};

CardButton.defaultProps = {
  primary: false
};

export default CardButton;

