import { useState } from 'react'
import './App.css'
import { Routes, Route, Router } from 'react-router-dom'
import { Home } from './components/Home'
import { Explore } from './components/Explore'
import { Post } from './components/Post'
import { LogIn } from './components/LogIn'
import { Account } from './components/Account'
import { Header } from './components/Header'
import { IndividualArticle } from './components/IndividualArticle'

function App() {

  const [articles, setArticles] = useState([])

  return (
  <>
      <Header></Header>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/explore' element={<Explore articles={articles} setArticles={setArticles}/>}/>
      <Route path='/post' element={<Post />}/>
      <Route path='/login' element={<LogIn />}/>
      <Route path='/account/:username' element={<Account />}/>
      <Route path='/explore/:articleId' element={<IndividualArticle />}/>
    </Routes>
  </>

  )
}

export default App
