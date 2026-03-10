import {
  addToBasket,
  removeFromBasket,
  calculSubTotal,
} from "../utils/manageBasket";

const Panier = ({ basket, setBasket, currency }) => {
  const deliveryFees = 2.5;

  return (
    <div className="basket">
      {Object.keys(basket).length === 0 ? (
        <>
          <button className="basket__validation">Valider mon panier</button>
          <p className="basket__empty">Votre panier est vide</p>{" "}
        </>
      ) : (
        <>
          <button className="basket__validation validation-allowed">
            Valider mon panier
          </button>
          <div className="basket__items">
            {Object.entries(basket).map(([id, elt]) => {
              return (
                <div key={`${id}-${elt.name}`} className="basket__item">
                  <div className="basket__item-controls">
                    <button
                      className="basket__item-btn"
                      onClick={() => {
                        removeFromBasket(id, basket, setBasket);
                      }}
                    >
                      -
                    </button>
                    <span className="basket__item-count">{elt.count}</span>

                    <button
                      className="basket__item-btn"
                      onClick={() => {
                        addToBasket(id, elt.name, null, basket, setBasket);
                      }}
                    >
                      +
                    </button>
                  </div>

                  <span className="basket__item-name">{elt.name}</span>

                  <p className="basket__item-price">
                    {elt.subTotalPrice} {currency}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="basket__subtotal">
            <div className="basket__subtotal-line">
              <p>Sous-total</p>
              <p>
                {calculSubTotal(basket).toFixed(2)} {currency}
              </p>
            </div>
            <div className="basket__subtotal-line">
              <span>Frais de livraison</span>
              <p>
                {deliveryFees.toFixed(2)} {currency}
              </p>
            </div>
          </div>
          <div className="basket__total">
            <p>Total</p>
            <p>
              {(calculSubTotal(basket) + deliveryFees).toFixed(2)} {currency}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Panier;
