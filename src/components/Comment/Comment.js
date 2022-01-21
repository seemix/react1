import React from 'react';
import {useLocation} from "react-router-dom";

const Comment = ({comment}) => {

    const {id, name, email, body} = comment;

    return (
        <div>
            {id}. {name} ({email}) - {body}
        </div>
    );
};

export default Comment;