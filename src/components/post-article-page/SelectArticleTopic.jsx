export const SelectArticleTopic = ({ articleTopic, setArticleTopic }) => {
    const handleClickTopic = (topic) => {
        articleTopic === topic ? setArticleTopic(null) : setArticleTopic(topic)
    }
    return (
        <div id="choose-your-topic">
            <p>Choose a topic:</p>
            <div>
                <button
                    onClick={()=>handleClickTopic("football")}
                    className={
                        articleTopic === "football"
                            ? "topic-button-clicked"
                            : "topic-button-unclicked"
                    }
                >
                    football
                </button>
                <button
                    onClick={()=>handleClickTopic("coding")}
                    className={
                        articleTopic === "coding"
                            ? "topic-button-clicked"
                            : "topic-button-unclicked"
                    }
                >
                    coding
                </button>
                <button
                    onClick={()=>handleClickTopic("cooking")}
                    className={
                        articleTopic === "cooking"
                            ? "topic-button-clicked"
                            : "topic-button-unclicked"
                    }
                >
                    cooking
                </button>
            </div>
        </div>
    )
}
