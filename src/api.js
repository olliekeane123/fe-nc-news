import axios from "axios"

const ncNewsApi = axios.create({
    baseURL: "https://ollie-be-nc-news.onrender.com/api"
})

export const getArticles = (params) => {
    return ncNewsApi.get("/articles",{params}).then((response) => {
        return response.data.articles
    })
}

export const getArticlebyId = (articleId) => {
    return ncNewsApi.get(`/articles/${articleId}`).then((response) => {
        return response.data.article
    })
}

export const getPostedComments = (articleId) => {
    return ncNewsApi.get(`/articles/${articleId}/comments`).then((response) => {
        return response.data.comments
    })
}

export const getVoteCount = (id, postType) => {
    if(postType === "article"){
        return ncNewsApi.get(`/articles/${id}`).then((response) => {
            return response.data.article.votes
        })
    }
}

export const changeVoteCount = (voteDifference, id, postType) => {
    const reqObj = {voteDifference}
    if(postType === "article"){
        return ncNewsApi.patch(`/articles/${id}`, reqObj).then((response)=> {
            return response.data.article
        })
    }
}

export const postComment = (newComment, articleId) => {
    return ncNewsApi.post(`/articles/${articleId}/comments`, newComment).then((response) => {
        console.log(response.data)
        return response.data.comment
    })
}

export const deleteComment = (commentId) => {
    return ncNewsApi.delete(`/comments/${commentId}`).then((response) => {
        return response.data
    })
}

export const getUser = (username) => {
    return ncNewsApi.get(`/users/${username}`).then((response) => {
        return response.data.user
    })
}

export const postArticle = (newArticle) => {
    console.log(newArticle)
    return ncNewsApi.post('/articles', newArticle).then((response) => {
        return response.data
    })
}





/* export const getItems = (category, sort_by, order) =>{
    return ncNewsApi.get("/articles", {params: {category_name: category}}).then((response) => {
        return response.data.articles
    })
}
 */
export const getCategories = () =>{
    return ncNewsApi.get("/categories").then((response)=>{
        return response.data.categories
    })
}