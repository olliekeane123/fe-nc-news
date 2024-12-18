import { useEffect, useState } from "react"
import { getUserByUsername } from "../api"

export function ArticleCard ({article}) {

    return (
    <div id="article-card-container">
        <h3 id="article-card-title">{article.title}</h3>
        <div id="article-card-author-img-container">
        <p id="article-card-author">by {article.author}</p>
        <img src={article.avatar_url} alt="author profile picture" id="article-card-author-img"/>
        </div>
        <p id="read-more">read more</p>
    </div>
    )
}
