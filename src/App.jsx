import { useState, useEffect } from "react"
import "./App.css"
import { getArticles } from "./api"
import { Routes, Route } from "react-router-dom"
import { Home } from "./components/Home"
import { Explore } from "./components/explore-page/Explore"
import { Post } from "./components/post-article-page/Post"
import { LogIn } from "./components/LogIn"
import { Account } from "./components/Account"
import { Header } from "./components/Header"
import { IndividualArticle } from "./components/individual-article-page/IndividualArticle"

function App() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getArticles().then((response) => {
            setArticles(response)
            setIsLoading(false)
        })
    }, [])

    return (
        <>
            <Header className="header" />
            <main className="main">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home articles={articles} isLoading={isLoading} />
                        }
                    />
                    <Route
                        path="/explore"
                        element={
                            <Explore
                                articles={articles}
                                isLoading={isLoading}
                                setArticles={setArticles}
                            />
                        }
                    />
                    <Route
                        path="/explore/:topic"
                        element={
                            <Explore
                                articles={articles}
                                isLoading={isLoading}
                            />
                        }
                    />
                    <Route
                        path="/explore/:sort_by"
                        element={
                            <Explore
                                articles={articles}
                                isLoading={isLoading}
                            />
                        }
                    />
                    <Route
                        path="/explore/:order"
                        element={
                            <Explore
                                articles={articles}
                                isLoading={isLoading}
                            />
                        }
                    />
                    <Route path="/post" element={<Post />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/account/:username" element={<Account />} />
                    <Route
                        path="/explore/article/:articleId"
                        element={<IndividualArticle />}
                    />
                </Routes>
            </main>
        </>
    )
}

export default App
