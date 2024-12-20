import { useEffect } from 'react'
import ArticlesList from './ArticlesList'
import { Link, useSearchParams } from "react-router-dom"
import { getArticles } from '../api'

export function Explore ({articles, setArticles}) {

    const [searchParams, setSearchParams] = useSearchParams()
    const topic = searchParams.get("topic")
    const sort_by = searchParams.get("sort_by")
    const order = searchParams.get("order")
  
    useEffect(() => {
      const params = { topic, sort_by, order }
      getArticles(params).then((response) => {
        setArticles(response)
      })
    }, [topic, sort_by, order])
  
    const handleSort = (topicValue, sortByValue, orderValue) => {
      setSearchParams({ topic: topicValue, sort_by: sortByValue, order: orderValue })
    };

    return (
        <>
            <div className='browseby-bar'>
                <p>browse by</p>
                <div className='browse-params-container'>
                    <div id='browse-by-year'>
                        <button>date</button>
                        <button onClick={()=>handleSort(null, "created_at", "asc")}>oldest</button>
                        <Link><p>newest</p></Link>
                    </div>
                    <div id='browse-by-popular'>
                        <button>popular</button>
                        <Link to="/explore?sort_by=comment_count"><p>comments</p></Link>
                        <Link><p>votes</p></Link>
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
