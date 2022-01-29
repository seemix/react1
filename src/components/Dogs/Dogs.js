import React from 'react';
import Dog from "../Dog/Dog";

const Dogs = ({dogs, deletePet}) => {

    return (
        <div>
            <h2>DOGS</h2>
            {
                dogs && dogs.map(dog => <Dog key={dog.id} dog={dog} deletePet={deletePet}/>)
            }
        </div>
    );
};

export default Dogs;