import React from 'react';
import Cat from "../Cat/Cat";

const Cats = ({cats, deletePet}) => {

    return (
        <div>
            <h2>CATS</h2>
            {
                cats && cats.map(cat => <Cat key={cat.id} cat={cat} deletePet={deletePet}/>)
            }
        </div>
    );
};

export default Cats;