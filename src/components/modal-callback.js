import React, { useState } from "react";
import ReactDom from 'react-dom'
import PrimaryButton from "../components/primary-button";
import SecondaryButton from "../components/secondary-button";

const ModalCallback = ({ shouldShow, text, primaryLabel, secondaryLabel, close, callback, paramCallback }) => {
  
  /* Modal whose primary button is used to call a function */

  const [showModal, setShowModal] = useState(shouldShow);

  function handleClose() {
    setShowModal(false);
    close(); // trigger the callback provided by the parent component
  }

  function handleAction(e) {
    callback(e, paramCallback);
    handleClose()
  }
  
  return ReactDom.createPortal(
    <>
      {showModal ? (
        <>
          <div className="flex justify-center items-center fixed inset-0 z-50">
            <div className="w-auto my-6 mx-auto max-w-md rounded-lg shadow-lg bg-white p-6">
                <h5 className="my-6 text-center">{text}</h5>
                <div className="flex flex-col items-center justify-between md:flex-row md:justify-center md:h-fit h-28 my-8">
                    <div className="mx-4" onClick={handleClose}>
                        <SecondaryButton label={secondaryLabel} />
                    </div>
                    <div className="mx-4" onClick={handleAction}>
                        <PrimaryButton label={primaryLabel} />
                    </div>
                </div>
            </div>
          </div>
          <div className="opacity-20 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>, document.getElementById('portal')
  );
};

export default ModalCallback;
