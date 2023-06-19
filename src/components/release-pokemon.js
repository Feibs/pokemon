import React, { useState } from "react";
import remove from "../assets/remove.svg";
import ModalCallback from "../components/modal-callback";

const ReleasePokemon = ({id}) => {
    const [showModal, setShowModal] = useState(false);

    function releasePokemon(e, id) {
        e.preventDefault();
        let savedPokemons = JSON.parse(localStorage.getItem("caughtPokemons"));
        let updatedPokemons = savedPokemons.filter(savedPokemon => {
            return savedPokemon.id !== id;
        })
        localStorage.setItem("caughtPokemons", JSON.stringify(updatedPokemons));
        window.location.reload();
    }

    function handleModalClose() {
        setShowModal(false);
    }

    return (
        <>
            <button onClick={() => setShowModal(true)} className="animate-bounce">
                <img src={remove} alt="Release"></img>
            </button>

            {showModal && 
            <ModalCallback shouldShow={showModal} 
            text="Release this pokemon?" 
            primaryLabel="Yes >" 
            secondaryLabel="< Cancel"
            close={handleModalClose}
            callback={releasePokemon}
            paramCallback={id}/>}
        </>
    )
}

export default ReleasePokemon;