import React from "react";

const PrimaryButton = ({label}) => {
  return (
    <button className="bg-primary-red outline outline-2 outline-primary-red rounded-full drop-shadow-xl text-white w-fit px-8 py-3 mx-auto 
      hover:bg-gray-600 hover:outline-gray-600 active:bg-gray-900 active:outline-gray-900">
        <h3>{label}</h3>
    </button>
  );
};

export default PrimaryButton;