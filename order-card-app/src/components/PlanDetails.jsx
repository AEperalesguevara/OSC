import PropTypes from 'prop-types';
import './PlanDetails.css';

const PlanDetails = ({ title, price, onChange }) => {
  return (
    <div className="plan-container">
      <div className="plan-details">
        <h3 className="plan-title">{title}</h3>
        <p className="plan-price">{price}</p>
        <a href="#" className="plan-link" onClick={onChange}>Change</a>
      </div>
    </div>
  );
};

PlanDetails.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default PlanDetails;
