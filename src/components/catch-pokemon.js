import React, { useState } from "react";
import pokeball from "../assets/pokeball.svg";
import ModalNavigate from "./modal-navigate";

const CatchPokemon = ({pokemon}) => {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showFailModal, setShowFailModal] = useState(false);
    const [showFoulFailModal, setShowFoulFailModal] = useState(false);

    function catchPokemon(e, pokemon) {
        e.preventDefault();
        let savedPokemons = localStorage.getItem("caughtPokemons") ? JSON.parse(localStorage.getItem("caughtPokemons")) : [];
        
        /* Only add unique pokemon */
        if (isNewCatch(pokemon, savedPokemons)){
            /* Success probability to catch a pokemon is 50% */
            if (isFiftyFiftySuccess()){
                savedPokemons.push(pokemon);
                localStorage.setItem("caughtPokemons", JSON.stringify(savedPokemons));
                setShowSuccessModal(true);
            } else {
                setShowFailModal(true);
            }
        } else {
            setShowFoulFailModal(true);
        }
    }

    function isNewCatch(pokemon, savedPokemons) {
        let duplicatedPokemon = savedPokemons.filter(savedPokemon => {
            return savedPokemon.id === pokemon.id;
        })
        return duplicatedPokemon.length === 0;
    }

    function doGatcha(probability) {
        return Math.floor((Math.random() * 100/probability));
    }

    function isFiftyFiftySuccess() {
        return doGatcha(50) === 1;
    }

    function handleModalClose() {
        setShowSuccessModal(false);
        setShowFailModal(false);
        setShowFoulFailModal(false);
    }

    return (
        <>
        <div className="mx-auto w-fit">
            <button onClick={e => catchPokemon(e, pokemon)} className="animate-bounce">
                <img src={pokeball} alt="Catch?" className="mx-auto"></img>
                <h3 className="font-semibold">Catch</h3>
            </button>
        </div>
        {showSuccessModal && 
        <ModalNavigate shouldShow={showSuccessModal} 
        text="Great catch! Congratulation!" 
        primaryLabel="See my pokemon >" 
        secondaryLabel="Close"
        link="/my-pokemon"
        close={handleModalClose}/>}

        {showFailModal && 
        <ModalNavigate shouldShow={showFailModal} 
        text="It missed :( See other or retry..." 
        primaryLabel="< See Pokedex" 
        secondaryLabel="Close"
        link="/"
        close={handleModalClose}/>}

        {showFoulFailModal && 
        <ModalNavigate shouldShow={showFoulFailModal} 
        text="You already had this pokemon ;)" 
        primaryLabel="See my pokemon >" 
        secondaryLabel="Close"
        link="/my-pokemon"
        close={handleModalClose}/>}
        </>
    )
}

export default CatchPokemon;