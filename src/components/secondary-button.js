import React from "react";

const SecondaryButton = ({label}) => {
  return (
    <button className="bg-white outline outline-2 outline-primary-red rounded-full text-primary-red w-fit px-8 py-3 mx-auto
      hover:text-gray-600 hover:outline-gray-600 active:text-gray-900 active:outline-gray-900">
        <h3>{label}</h3>
    </button>
  );
};

export default SecondaryButton;