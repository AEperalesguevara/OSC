import PropTypes from 'prop-types';
import './CardTitle.css';

const CardTitle = ({ title }) => {
  return <h1 className="card-title">{title}</h1>;
};

CardTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default CardTitle;
