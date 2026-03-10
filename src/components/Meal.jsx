import { FaStar } from "react-icons/fa";
import { addToBasket } from "../utils/manageBasket";

const Meal = ({ meal, currency, basket, setBasket }) => {
  return (
    <div
      className="meal"
      onClick={() => {
        addToBasket(meal.id, meal.title, meal.price, basket, setBasket);
      }}
    >
      <div className="meal__content">
        <h3 className="meal__title">{meal.title}</h3>
        {meal.description && (
          <p className="meal__description">{meal.description}</p>
        )}

        <div className="meal__meta">
          <p className="meal__price">
            {meal.price} {currency}
          </p>
          {meal.popular && (
            <div className="meal__badge">
              <FaStar className="meal__badge-icon" />
              <p className="meal__badge-text">Populaire</p>
            </div>
          )}
        </div>
      </div>
      {meal.picture && (
        <img className="meal__image" src={meal.picture} alt="" />
      )}
    </div>
  );
};

export default Meal;
