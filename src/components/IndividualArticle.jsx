import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { getArticlebyId, getUserByUsername } from '../api';
import { Comments } from './Comments'
import loveheart from '../assets/loveheart.svg';
import bookmark from '../assets/bookmarkicon.svg'

export function IndividualArticle () {
    const { articleId } = useParams();

    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getArticlebyId(articleId)
        .then((response) => {
            const responseDate = new Date(response.created_at);
            const dateFormatted = new Intl.DateTimeFormat('en-GB').format(responseDate);
            setArticle({...response, date: dateFormatted})
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
        <>
        <div className='individual-article-container'>
            <div className='ind-article-title-author-container'>
                <h1 className='individual-article-title'>{article.title}</h1>
                <div className='author-container'>
                    <p id='individual-article-author'>by {article.author}</p>
                    <img id='individual-article-author-img' src={article.avatar_url} alt="" />
                    <p id='individual-article-date'>{article.date}</p>
                </div>
            </div>
            <div className='like-bookmark-container'>
                <div className='like-icon-container'>
                    <img src={loveheart} alt="loveheart icon" />
                </div>
                <div className='bookmark-icon-container'>
                    <img src={bookmark} alt="bookmark icon" />
                </div>
            </div>
            <div className='individual-article-image-container'>
                <img id='individual-article-image' src={article.article_img_url} alt="article image" />
            </div>
            <div className='individual-article-body-container'>
                <p>{article.body}</p>
            </div>
        </div>
        <Comments articleId={articleId}/>
        </>
    )
};


