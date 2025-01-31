import { ArticleCard } from "./ArticleCard"
import { Link } from "react-router-dom"

function ArticlesList({ articles, isLoading }) {
    return isLoading ? (
        <div className="loading-container">
            <p>taking a moment to load...</p>
        </div>
    ) : (
        <ul id="articles-list">
            {articles.map((article) => {
                return (
                    <li key={article.article_id} id="list-article">
                        <Link to={`/explore/article/${article.article_id}`}>
                            <ArticleCard article={article} />
                        </Link>
                    </li>
                )
            })}
            <li className="psuedo-flex-start-dummy"></li>
            <li className="psuedo-flex-start-dummy"></li>
            <li className="psuedo-flex-start-dummy"></li>
            <li className="psuedo-flex-start-dummy"></li>
        </ul>
    )
}

export default ArticlesList
