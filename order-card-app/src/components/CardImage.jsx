import PropTypes from 'prop-types';
import './CardImage.css';

const CardImage = ({ src, alt }) => {
  return <img src={src} alt={alt} className="card-image" />;
};

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default CardImage;
