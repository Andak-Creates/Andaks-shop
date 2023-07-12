import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";

const Cart = ({ cartState, setCartState }) => {
  // console.log(cartState);
  const [totalPrice, setTotalPrice] = useState(0);

  const increaseQuantity = (id) => {
    const updatedCart = cartState.map((item) => {
      if (item.id === id) {
        const newQuantity = (item.quantity || 1) + 1;
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartState(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartState.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity - 1;
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartState(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cartState.filter((item) => item.id !== id);
    setCartState(updatedCart);
  };

  useEffect(() => {
    const calculatePrice = () => {
      const total = cartState.reduce(
        (acc, item) => acc + item.price * (item.quantity || 1),
        0
      );
      setTotalPrice(total);
    };

    calculatePrice();
  }, [cartState]);

  return (
    <div className="cartContent">
      <h1>My Shopping Cart</h1>

      <div className="products">
        <p>Item</p>
        <p>Name</p>
        <p>Quantity</p>
        <p>Remove</p>
        <p>Price</p>
      </div>
      <div className="productList">
        {cartState.length > 0 ? (
          <div className="productItem">
            {cartState.map((item) => (
              <div className="innerItem" key={item.id}>
                <div className="imageHolder">
                  <img src={item.image} alt={item.name} />
                </div>
                <div> {item.title} </div>
                <div>
                  {" "}
                  <div className="amountSect">
                    <button onClick={() => decreaseQuantity(item.id)}>
                      {" "}
                      <i className="bi bi-dash-lg"></i>{" "}
                    </button>
                    <p>{item.quantity || 1}</p>
                    <button onClick={() => increaseQuantity(item.id)}>
                      {" "}
                      <i className="bi bi-plus-lg"></i>
                    </button>
                  </div>
                </div>

                <div>
                  <button onClick={() => removeItem(item.id)}>
                    {" "}
                    <i className="bi bi-x-lg"></i>
                    {""}
                  </button>
                </div>

                <div>
                  <p>{item.price}</p>
                </div>
              </div>
            ))}
            <h3>total ${totalPrice.toFixed(2)}</h3>
          </div>
        ) : (
          <h1>Your cart is empty</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
