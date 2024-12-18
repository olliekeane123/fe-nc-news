import { ArticleCard } from "./ArticleCard"
import { useEffect, useState } from 'react'
import { getArticles } from '../api'
import { Link } from "react-router-dom";

function ArticlesList ({articles, setArticles}) {

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getArticles().then((response) => {
            setArticles(response)
            setIsLoading(false)
        })
    }, [])

    return (
        isLoading 
        ? 
        <div className="loading-container">
            <p>taking a moment to load...</p>
        </div>
        :


        <ul id="articles-list">
            {articles.map((article)=> {
                return (
                    <li key={article.article_id} id="list-article">
                        <Link to={`/explore/${article.article_id}`}>
                        <ArticleCard article={article}/>
                        </Link>
                    </li>
                )
            })}
        </ul>    
    )
}

export default ArticlesList
