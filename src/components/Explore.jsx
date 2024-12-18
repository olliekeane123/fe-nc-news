import ArticlesList from './ArticlesList'
import { Link } from "react-router-dom";

export function Explore ({articles, setArticles}) {

    

    return (
        <>
            <div className='browseby-bar'>
                <p>browse by</p>
                <div className='browse-params-container'>
                    <div id='browse-by-year'>
                        <button>year</button>
                        <Link><p>2018</p></Link>
                        <Link><p>2018</p></Link>
                        <Link><p>2018</p></Link>
                    </div>
                    <div id='browse-by-popular'>
                        <button>popular</button>
                        <Link><p>most popular</p></Link>
                        <Link><p>least popular</p></Link>
                    </div>
                    <div id='browse-by-topic'>
                        <button>topic</button>
                        <Link><p>football</p></Link>
                        <Link><p>cooking</p></Link>
                        <Link><p>coding</p></Link>
                        <Link><p>films</p></Link>
                    </div>
                </div>
            </div>
            <ArticlesList articles={articles} setArticles={setArticles}/>
        </>
    )
}
