import { Link } from "react-router-dom"
import { ArticleCard } from "./explore-page/ArticleCard"
import codingimg from "../assets/coding.webp"
import footballimg from "../assets/football.jpg"
import cookingimg from "../assets/cooking.jpeg"
import filmimg from "../assets/film.jpg"

export function Home({ articles, isLoading }) {
    const suggestedArticles = articles.slice(0, 2)

    return (
        <div>
            {isLoading ? (
                <div className="loading-container">
                    <p>taking a moment to load...</p>
                </div>
            ) : (
                <section id="suggested-articles-section">
                    <h1 id="suggested-articles-header">
                        Suggested reading for today
                    </h1>
                    <ul id="suggested-articles-list">
                        {suggestedArticles.map((article) => {
                            return (
                                <li key={article.article_id} id="list-article">
                                    <Link
                                        to={`/explore/article/${article.article_id}`}
                                    >
                                        <ArticleCard article={article} />
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </section>
            )}

            <section id="topic-section">
                <h1 id="topic-header">Explore by topic</h1>
                <div className="topics-list">
                    <Link to="/explore?topic=football" key={"football"}>
                        <div className="topic-container">
                            <img
                                className="topic-img"
                                src={footballimg}
                                alt="football topic image"
                            />
                            <p className="topic-text">football</p>
                        </div>
                    </Link>
                    <Link to="/explore?topic=coding" key={"coding"}>
                        <div className="topic-container">
                            <img
                                className="topic-img"
                                src={codingimg}
                                alt="coding topic image"
                            />
                            <p className="topic-text">coding</p>
                        </div>
                    </Link>
                    <Link to="/explore?topic=cooking" key={"cooking"}>
                        <div className="topic-container">
                            <img
                                className="topic-img"
                                src={cookingimg}
                                alt="cooking topic image"
                            />
                            <p className="topic-text">cooking</p>
                        </div>
                    </Link>
                    <div className="topic-container">
                        <img
                            className="topic-img"
                            src={filmimg}
                            alt="film topic image"
                        />
                        <p className="topic-text">film</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
