import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import Comment from "../../components/Comment/Comment";
import {commentService} from "../../services/comment.service";

const PostsCommentsPage = () => {

    const {state} = useLocation();
    const [comments, setComments] = useState([]);
    useEffect(() => {
        commentService.getByPostId(state.id).then(value => setComments(value))
    }, [])


    return (
        <div>
            <h3>Comments</h3>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default PostsCommentsPage;