import React from "react";

const SideNav = ({ handleClick, setFetchApi, BASE_URL }) => {
  console.log(BASE_URL);
  return (
    <div className="sideNav">
      <button onClick={() => handleClick(`${BASE_URL}/cartegory/jewelry`)}>
        {/* {setFetchApi(`${BASE_URL}/jewelry`)} */}
        jewelry
      </button>
    </div>
  );
};

export default SideNav;
