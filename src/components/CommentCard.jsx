import { useContext } from 'react';
import loveheart from '../assets/loveheart.svg';
import deleteicon from '../assets/deleteicon.svg';
import { formatDate } from '../utils/formatDate';
import { UserContext } from '../context/UserProvider';
import { deleteComment, getPostedComments } from '../api';

export function CommentCard ({comment, setDisplayedComments, setPostedComments, articleId}) {

    const { user } = useContext(UserContext)
    const date = formatDate(comment.created_at)

    const handleDeleteClick = () => {
        setDisplayedComments((displayedComments) => {
            return displayedComments.filter((x) => x !== comment)
        })
        deleteComment(comment.comment_id).then(() => {
            return getPostedComments(articleId)
        }).then((response) => {
            setPostedComments(response)
            setDisplayedComments(response)
        })
        
    }

    return (
<div id='comment-card-container'>
    <div id='comment-metadata'>
        <div id='comment-metadata-left'>

            <img id='comment-card-avatar-img' src={comment.avatar_url} alt="comment profile avatar" />
            <div id='comment-author-date-container'>
                <p>{comment.author}</p>
                <p>{date}</p>
            </div>

        </div>
        <div className='comment-buttons-container'>
            {user.userInfo.username === comment.author?
            (
            <div onClick={handleDeleteClick} className='comment-delete-icon-container'>
                <img src={deleteicon} alt="delete comment icon" />
            </div>
            )
            : null
            }
            <div className='comment-like-icon-container'>
                <img src={loveheart} alt="like comment icon" />
            </div>

        </div>
    </div>
    <div id='comment-body-container'>
        <p id="comment-body">{comment.body}</p>
    </div>
</div>
    )
}
