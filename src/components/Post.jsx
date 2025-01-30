import { useState, useContext, useRef, useEffect } from "react"
import { ArticleImageUpload } from "./ArticleImageUpload"
import { UserContext } from "../context/UserProvider"
import { postArticle } from "../api"
import addicon from "../assets/add-icon.svg"

export function Post() {
    const { user } = useContext(UserContext)
    const [articleTitle, setArticleTitle] = useState("")
    const [articleBody, setArticleBody] = useState("")
    const [articleImage, setArticleImage] = useState(null) // actual file object that can be used to submit to database
    const [imagePreview, setImagePreview] = useState("") // blob -> temporary URL to show preview

    const textAreaRef = useRef(null)

    useEffect(() => {
        const textarea = textAreaRef.current
        if (textarea) {
            textarea.style.height = "auto" // Reset the height before recalculating
            textarea.style.height = `${textarea.scrollHeight}px` // Set height to fit content
        }
    }, [articleBody])

    const handleClickPostArticle = () => {
        const newArticle = {
            title: articleTitle,
            topic: "cats",
            author: user.userInfo.username,
            body: articleBody,
            article_img_url: null, // using API's default image_url for security and storage reasons, could implement in future
        }
        // postArticle(newArticle).then((response) => {
        //     console.log(response)
        // })
        setArticleTitle("")
        setArticleBody("")
        setArticleImage(null)
        setImagePreview(null)
    }

    return (
        <>
            <h1>Post an Article</h1>
            <div id="post-article-container">
                <div id="add-title-container">
                    <img
                        id="plus-icon"
                        className={articleTitle ? "plus-icon-hidden" : null}
                        src={addicon}
                        alt="Add title plus icon"
                    />

                    <input
                        id="article-title-input"
                        placeholder="Title"
                        onChange={(e) => setArticleTitle(e.target.value)}
                        value={articleTitle}
                    />
                </div>
                <ArticleImageUpload
                    setArticleImage={setArticleImage}
                    setImagePreview={setImagePreview}
                    imagePreview={imagePreview}
                />
                <div id="add-body-container">
                    {!articleBody ? <img
                        id="plus-icon"
                
                        src={addicon}
                        alt="Add title plus icon"
                    />: null}
                    <textarea
                        ref={textAreaRef}
                        id="article-body-input"
                        type="text"
                        placeholder="Start writing here!"
                        onChange={(e) => setArticleBody(e.target.value)}
                        value={articleBody}
                    />
                </div>
                <button id="submit-post-article" onClick={handleClickPostArticle}>Post Article</button>
            </div>
        </>
    )
}
