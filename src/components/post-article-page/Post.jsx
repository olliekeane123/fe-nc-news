import { useState, useContext, useRef, useEffect } from "react"
import { Link } from "react-router-dom";
import { ArticleImageUpload } from "./ArticleImageUpload"
import { SelectArticleTopic } from "./SelectArticleTopic"
import { UserContext } from "../../context/UserProvider"
import { postArticle } from "../../api"
import addicon from "../../assets/add-icon.svg"

export function Post() {
    const { user } = useContext(UserContext)
    const [articleTitle, setArticleTitle] = useState("")
    const [articleBody, setArticleBody] = useState("")
    const [articleImage, setArticleImage] = useState(null) // actual file object that can be used to submit to database
    const [imagePreview, setImagePreview] = useState("") // blob -> temporary URL to show preview
    const [articleTopic, setArticleTopic] = useState(null)

    const textAreaRef = useRef(null)

    useEffect(() => {
        const textarea = textAreaRef.current
        if (textarea) {
            textarea.style.height = "auto"
            textarea.style.height = `${textarea.scrollHeight}px` // set height to fit content
        }
    }, [articleBody])

    const handleClickPostArticle = () => {
        const newArticle = {
            title: articleTitle,
            topic: "cooking",
            author: user.userInfo.username,
            body: articleBody,
            /* article_img_url: null, // using API's default image_url for security and storage reasons, could implement in future */
        }
        postArticle(newArticle)
            .then(() => {})
            .catch((err) => console.log(err))

        setArticleTitle("")
        setArticleBody("")
        setArticleImage(null)
        setImagePreview(null)
    }
    if (articleTitle && articleBody && articleTopic) {
        console.log("ready to submit!")
    }

    return (
        <>
            {!user.isLoggedIn ? (
                <div id="not-logged-in-container">
                    <p>Looks like you're not logged in...</p>

                    <Link to="/login" id="navigate-to-login-button">
                        Click here to Log in!
                    </Link>
                </div>
            ) : (
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
                        {!articleBody ? (
                            <img
                                id="plus-icon"
                                src={addicon}
                                alt="Add title plus icon"
                            />
                        ) : null}
                        <textarea
                            ref={textAreaRef}
                            id="article-body-input"
                            type="text"
                            placeholder="Start writing here!"
                            onChange={(e) => setArticleBody(e.target.value)}
                            value={articleBody}
                        />
                    </div>
                    <SelectArticleTopic
                        articleTopic={articleTopic}
                        setArticleTopic={setArticleTopic}
                    />
                    <button
                        id="submit-post-article"
                        className={
                            articleTitle && articleBody && articleTopic
                                ? "submit-post-article-enabled"
                                : "submit-post-article-disabled"
                        }
                        onClick={handleClickPostArticle}
                        disabled={
                            !articleTitle || !articleBody || !articleTopic
                        }
                    >
                        Post Article
                    </button>
                </div>
            )}
        </>
    )
}
