import React from 'react';

const Picture = ({img}) => {

    return (
        <div>
            <h5>{img.title}</h5>
            <img src={img.url} alt={img.title}/>
        </div>
    );
};

export default Picture;