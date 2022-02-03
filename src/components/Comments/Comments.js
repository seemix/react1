import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllComments} from "../../store/comments.slice";
import Comment from "../Comment/Comment";

const Comments = () => {
    const {comments, status, error} = useSelector(state => state['commentsReducer']);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllComments())
    }, []);

    return (
        <div>
            {status === 'pending' && <h2>Loading..</h2>}
            {error && <h2>error</h2>}
            {comments && comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;