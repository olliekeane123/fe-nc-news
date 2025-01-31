import { useState, useEffect, useContext } from "react"
import { getPostedComments, postComment } from "../../api"
import { CommentCard } from './CommentCard'
import { UserContext } from "../../context/UserProvider"


export function Comments ({articleId}) {

    const { user } = useContext(UserContext)
    const [postedComments, setPostedComments] = useState([])
    const [displayedComments, setDisplayedComments] = useState([])
    const [commentInput, setCommentInput] = useState('')

    useEffect(()=>{
        getPostedComments(articleId).then((response)=>{
            setPostedComments(response)
            setDisplayedComments(response)
        })
    }, [])

    const handleSubmitComment = (e) => {
        e.preventDefault()
        const newComment = {comment_id: Date.now(), article_id: articleId, author: user.userInfo.username, avatar_url: user.userInfo.avatar_url, body: commentInput, created_at: Date.now()}
        const newCommentReq = {username: user.userInfo.username, body: commentInput}

        setDisplayedComments([newComment, ...displayedComments])

        postComment(newCommentReq, articleId).then(()=>{
            getPostedComments(articleId).then((response)=>{
                setPostedComments(response)
            })
        })
        setCommentInput('')
    }

    return (
        <div className='comments-container'>
            <h1 className='comments-title'>Comments</h1>

        {user.isLoggedIn ? (
            <div id='your-thoughts-container'>
                <img id='comments-main-user-avatar-img' src={user.userInfo.avatar_url || "https://cdn.dribbble.com/users/312581/screenshots/1676038/female-placeholder.png"} alt="your profile avatar" />
                <div id='your-thoughts-input-container'>
                    <form id='comment-form' onSubmit={handleSubmitComment}>
                    <input id='comment-input' type="text" placeholder='What are your thoughts?' onChange={(e)=>setCommentInput(e.target.value)} value={commentInput}/>
                    <button id='comment-send' type="submit" >send</button>
                    </form>
                </div>
            </div>
            ):null}
        
                <ul id="posted-comments-list">
                    {displayedComments.map((comment)=>{
                        return (
                            <li key={comment.comment_id}>
                                <CommentCard setDisplayedComments={setDisplayedComments} setPostedComments={setPostedComments} comment={comment} articleId={articleId}/>
                            </li>
                        )
                    })}
                </ul>
          
                
        </div>
    )
}
