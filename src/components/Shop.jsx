import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideNav from "./SideNav";

const Shop = ({
  addToCart,
  data,
  error,
  isLoading,
  handleClick,
  setFetchApi,
  BASE_URL,
}) => {
  const navigate = useNavigate();

  // const deleteItem = (id) => {
  //   const selectedItem = data.find((item) => item.id === id);
  //   if (selectedItem.id === undefined) return prompt("Item not found");
  // };

  // const isItemSelected = cartState.find((cart.id = item.id));
  // const disabledBtn = isItemSelected ? true : false;

  return (
    <>
      <SideNav
        BASE_URL={BASE_URL}
        handleClick={handleClick}
        setFetchApi={setFetchApi}
      />
      <div className="cartContainer">
        <h2>Our Shop</h2>
        <div className="gallery">
          {error && <div>Error fetching Data</div>}
          {isLoading ? (
            <div>Loading....</div>
          ) : (
            data.length > 0 &&
            data.map((item) => (
              <div key={item.id} className="item">
                <img src={item?.image} alt="" />
                <p>{item.category}</p>
                <small>${item.price}</small>
                <div>
                  <button
                    // disabled={disabledBtn}
                    onClick={() => addToCart(item.id)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;
