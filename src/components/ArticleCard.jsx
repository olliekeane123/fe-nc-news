import { useEffect, useState } from "react"
import { getUserByUsername } from "../api"

export function ArticleCard ({article}) {

    const [avatarURL, setAvatarURL] = useState("https://www.refugee-action.org.uk/wp-content/uploads/2016/10/anonymous-user.png")

    useEffect(()=>{
        getUserByUsername(article.author).then(({avatar_url})=>{
            setAvatarURL(avatar_url)
        })
    })

    return (
    <div id="article-card-container">
        <h3 id="article-card-title">{article.title}</h3>
        <div id="article-card-author-img-container">
        <p id="article-card-author">by {article.author}</p>
        <img src={avatarURL} alt="author profile picture" id="article-card-author-img"/>
        </div>
        <p id="read-more">read more</p>
    </div>
    )
}
