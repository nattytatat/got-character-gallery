import React from "react";
import Character from "./Character";

import peopleInfo from "../data/characterData.json";

const CharacterGallery = () => {
    const characterComponentArray = peopleInfo.map(
        c => <Character {...c} key={c._id} />
    )

    return (
        <div data-test="component-char-gallery">
            {characterComponentArray}

        </div>
    )
}

export default CharacterGallery;