const addToBasket = (id, name, price, basket, setBasket) => {
  const newBasket = structuredClone(basket);
  if (!Object.keys(basket).includes(id)) {
    newBasket[id] = {
      name: name,
      count: 1,
      subTotalPrice: Number(price).toFixed(2),
      uniquePrice: Number(price).toFixed(2),
    };
    newBasket[price];
  } else {
    newBasket[id].count += 1;
    newBasket[id].subTotalPrice = Number(
      newBasket[id].count * newBasket[id].uniquePrice,
    ).toFixed(2);
  }
  setBasket(newBasket);
};

const removeFromBasket = (id, basket, setBasket) => {
  const newBasket = structuredClone(basket);

  if (Object.keys(basket).includes(id)) {
    if (newBasket[id].count - 1 === 0) {
      delete newBasket[id];
    } else {
      newBasket[id].count -= 1;
      newBasket[id].subTotalPrice = Number(
        newBasket[id].count * newBasket[id].uniquePrice,
      ).toFixed(2);
    }
  }

  setBasket(newBasket);
};

const calculSubTotal = (basket) => {
  let result = 0;
  for (const elt of Object.values(basket)) {
    result += Number(elt.subTotalPrice);
  }
  return result;
};

export { addToBasket, removeFromBasket, calculSubTotal };
