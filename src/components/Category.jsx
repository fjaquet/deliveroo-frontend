import Meal from "./Meal";

const Category = ({ category, currency }) => {
  //   console.log("category => ", category);
  return (
    <section className="category">
      <h2>{category.name}</h2>
      <div className="category__meals">
        {category.meals.map((meal) => (
          // <Meal key={meal.id} title={meal.title} description={meal.description} />
          <Meal key={meal.id} meal={meal} currency={currency} />
        ))}
      </div>
    </section>
  );
};

export default Category;
