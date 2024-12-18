import loveheart from '../assets/loveheart.svg';
import { formatDate } from '../utils/formatDate';

export function CommentCard ({comment}) {

    const date = formatDate(comment.created_at)

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
        <div className='like-icon-container'>
            <img src={loveheart} alt="loveheart icon" />
        </div>
    </div>
    <div id='comment-body-container'>
        <p id="comment-body">{comment.body}</p>
    </div>
</div>
    )
}
