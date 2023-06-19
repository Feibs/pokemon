import React, { useState } from "react";
import ReactDom from 'react-dom'
import { Link } from "react-router-dom";
import PrimaryButton from "./primary-button";
import SecondaryButton from "./secondary-button";

const ModalNavigate = ({ shouldShow, text, primaryLabel, secondaryLabel, link, close }) => {
  
  /* Modal whose primary button is used to navigate user to other page */

  const [showModal, setShowModal] = useState(shouldShow);

  function handleClose() {
    setShowModal(false);
    close(); // trigger the callback provided by the parent component
  }

  return ReactDom.createPortal(
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50">
            <div className="w-auto my-6 mx-auto w-fit rounded-lg shadow-lg bg-white p-2 md:p-6">
                <h5 className="my-6 text-center">{text}</h5>
                <div className="flex flex-col items-center justify-between md:flex-row md:justify-center md:h-fit h-28 my-8">
                    <div className="mx-4" onClick={handleClose}>
                        <SecondaryButton label={secondaryLabel} />
                    </div>
                    <Link to={link}>
                      <div className="mx-4">
                          <PrimaryButton label={primaryLabel} />
                      </div>
                    </Link>
                </div>
            </div>
          </div>
          <div className="opacity-20 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>, document.getElementById('portal')
  );
};

export default ModalNavigate;
