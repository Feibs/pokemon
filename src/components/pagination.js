import React from "react";
import PrimaryButton from "../components/primary-button";
import SecondaryButton from "../components/secondary-button";

const Pagination = ({nextPage, prevPage}) => {
    return (
      <div className="flex flex-col items-center justify-between md:flex-row md:justify-center md:h-fit h-28 my-8">
            {prevPage && <div className="mx-4" onClick={prevPage}>
                <SecondaryButton label={'< Prev'} />
            </div>}
            {nextPage && <div className="mx-4" onClick={nextPage}>
                <PrimaryButton label={'Next >'} />
            </div>}
      </div>
    );
  };
  
  export default Pagination;