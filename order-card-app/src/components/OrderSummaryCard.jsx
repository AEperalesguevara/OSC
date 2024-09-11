import CardImage from './CardImage';
import CardTitle from './CardTitle';
import CardSubtitle from './CardSubtitle';
import PlanDetails from './PlanDetails';
import CardButton from './CardButton';
import './OrderSummaryCard.css';


//importar imagenes
import myImage from '/img/illustration-hero.svg'






const OrderSummaryCard = () => {
  return (
    <div className="card-container">
      <div className="order-summary-card">
        <CardImage
          src={myImage}
          alt="Plan"
        />
        <CardTitle title="Order Summary" />
        <CardSubtitle subtitle="You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!" />
        <PlanDetails
          title="Annual Plan"
          price="$59.99/year"
          onChange={() => alert('Change plan')}
        />
        <div className="button-container">
          <CardButton
            text="Proceed to Payment"
            primary
            onClick={() => alert('Proceed to Payment')}
          />
          <CardButton
            text="Cancel Order"
            onClick={() => alert('Cancel Order')}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryCard;

