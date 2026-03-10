import Meal from "./Meal";

const Category = ({ category, currency, basket, setBasket }) => {
  return (
    <section className="category">
      <h2>{category.name}</h2>
      <div className="category__meals">
        {category.meals.map((meal) => (
          <Meal
            key={meal.id}
            meal={meal}
            currency={currency}
            basket={basket}
            setBasket={setBasket}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
