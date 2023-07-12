import { useState, useEffect } from "react";
import "./css/App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Shop from "./components/Shop";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  const BASE_URL = `https://fakestoreapi.com/products`;

  // const fetchFromApi = (url) => {
  //   return fetch(`${BASE_URL}/${url}`);
  // };

  const getStorageData = () => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      return JSON.parse(storedData);
    } else {
      return [];
    }
  };
  const [fetchApi, setFetchApi] = useState(BASE_URL);
  const [cartState, setCartState] = useState(getStorageData());
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (url) => {
    console.log(`Clicked on ${url}`);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState));
  }, [cartState]);

  useEffect(() => {
    let api = fetchApi;
    setTimeout(() => {
      fetch(api)
        .then((res) => res.json())
        .then((result) => {
          setData([...result.slice(0, 20)]);
        })
        .catch((err) => {
          setError(true);
          setIsLoading(false);
        });
    }, 2000);
  }, []);

  const addToCart = (id) => {
    const selectedItem = data.find((item) => item.id === id);
    if (selectedItem === undefined) return;

    setCartState((prev) => [...prev, selectedItem]);
  };

  return (
    <Router>
      <div className="body">
        <Navbar cartState={cartState} />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route
            path="/shop"
            element={
              <Shop
                loading={isLoading}
                error={error}
                addToCart={addToCart}
                data={data}
                handleClick={handleClick}
                setFetchApi={setFetchApi}
                BASE_URL={BASE_URL}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart cartState={cartState} setCartState={setCartState} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
