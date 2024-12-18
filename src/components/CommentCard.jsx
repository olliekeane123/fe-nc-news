import loveheart from '../assets/loveheart.svg';

export function CommentCard ({comment}) {

    console.log(comment)
    return (
<div id='comment-card-container'>
    <div id='comment-metadata'>
        <div id='comment-metadata-left'>

            <img id='comment-card-avatar-img' src="https://cdn.dribbble.com/users/312581/screenshots/1676038/female-placeholder.png" alt="comment profile avatar" />
            <div id='comment-author-date-container'>
                <p>{comment.author}</p>
                <p>3 days ago</p>
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
