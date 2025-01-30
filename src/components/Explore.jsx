import { useEffect } from 'react'
import ArticlesList from './ArticlesList'
import { BrowseByBar } from './BrowseByBar'
import { useSearchParams } from "react-router-dom"
import { getArticles } from '../api'

export function Explore ({articles, setArticles, isLoading}) {

    const [searchParams, setSearchParams] = useSearchParams()
  
    useEffect(() => {
      getArticles(searchParams).then((response) => {
        setArticles(response)
      })
    }, [searchParams])
  
    

    return (
        <>
            <BrowseByBar setSearchParams={setSearchParams}/>
            <ArticlesList articles={articles} setArticles={setArticles} isLoading={isLoading}/>
        </>
    )
}
