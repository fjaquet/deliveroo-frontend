import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import Category from "./components/Category";
import Panier from "./components/Panier";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [basket, setBasket] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: "get",
          url: "http://localhost:3000/",
        });
        const data = response.data;
        const newCategories = [];

        for (let i = 0; i < data.categories.length; i++) {
          if (data.categories[i].meals.length !== 0) {
            newCategories.push(data.categories[i]);
          }
        }
        data.categories = newCategories;

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>En Cours de chargement</p>
      ) : (
        <>
          <Header
            name={data.restaurant.name}
            description={data.restaurant.description}
            picture={data.restaurant.picture}
          />
          <main>
            <div className="container">
              <div className="menu">
                {data.categories.map((category) => {
                  return (
                    <Category
                      key={category.name}
                      category={category}
                      currency={data.restaurant.price[0]}
                      basket={basket}
                      setBasket={setBasket}
                    />
                  );
                })}
              </div>

              <div className="panier">
                <Panier
                  basket={basket}
                  setBasket={setBasket}
                  currency={data.restaurant.price[0]}
                />
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
}

export default App;
