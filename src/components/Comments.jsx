import { useState, useEffect } from "react"
import { getPostedComments } from "../api"
import { CommentCard } from './CommentCard'

export function Comments ({articleId}) {

    const [postedComments, setPostedComments] = useState([])

    useEffect(()=>{
        getPostedComments(articleId).then((response)=>{
            setPostedComments(response)
        })
    }, [])


    return (
        <div className='comments-container'>
            <h1 className='comments-title'>Comments</h1>

            <div id='your-thoughts-container'>
                <img id='comments-main-user-avatar-img' src="https://cdn.dribbble.com/users/312581/screenshots/1676038/female-placeholder.png" alt="your profile avatar" />
                <div id='your-thoughts-input-container'>
                    <form id='comment-form' action="">
                    <input id='comment-input' type="text" placeholder='What are your thoughts?'/>
                    <button id='comment-send'>send</button>
                    </form>
                </div>
            </div>
        
                <ul id="posted-comments-list">
                    {postedComments.map((comment)=>{
                        return (
                            <li key={comment.comment_id}>
                                <CommentCard comment={comment}/>
                            </li>
                        )
                    })}
                </ul>
          
                
        </div>
    )
}
