import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { changeVoteCount, getArticlebyId, getVoteCount } from '../../api';
import { Comments } from './Comments'
import loveheart from '../../assets/loveheart.svg';
import loveheartLiked from '../../assets/loveheart-liked.svg'
import bookmark from '../../assets/bookmarkicon.svg'
import bookmarked from '../../assets/bookmarkicon-bookmarked.svg'
import { formatDate } from '../../utils/formatDate';

export function IndividualArticle () {
    const { articleId } = useParams();

    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [hasLiked, setHasLiked] = useState(false)
    const [hasBookmarked, setHasBookmarked] = useState(false)
    const [votesCount, setVotesCount] = useState(0);

  useEffect(() => {
    getVoteCount(articleId, "article").then((votesCount) => {
    setVotesCount(votesCount);
   })
  }, []);


    useEffect(() => {
        setIsLoading(true)
        getArticlebyId(articleId)
        .then((response) => {
            const dateFormatted = formatDate(response.created_at)
            setArticle({...response, date: dateFormatted})
            setIsLoading(false)
            
        })
    }, [])

    const handleLikeClick = () =>{
        if(!hasLiked) {
            setHasLiked(true) 
            setVotesCount((currentVotesCount) => currentVotesCount + 1)
            changeVoteCount(1, articleId, "article")
        } 
        else{
            setHasLiked(false)
            setVotesCount((currentVotesCount) => currentVotesCount - 1)
            changeVoteCount(-1, articleId, "article")
        } 
    }

    const handleBookmarkClick = () => {
        !hasBookmarked ?
        setHasBookmarked(true)
        : setHasBookmarked(false)
    }

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
                <div className='vote-count-container'>
                    <p className='vote-count'>{votesCount}</p>
                </div>
                <div onClick={handleLikeClick} className='like-icon-container'>
                    <img src={hasLiked? loveheartLiked : loveheart} alt="loveheart icon" />
                </div>
                <div onClick={handleBookmarkClick} className='bookmark-icon-container'>
                    <img src={hasBookmarked? bookmarked : bookmark} alt="bookmark icon" />
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


