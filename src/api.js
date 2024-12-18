import axios from "axios"

const ncNewsApi = axios.create({
    baseURL: "https://ollie-be-nc-news.onrender.com/api"
})

export const getArticles = () => {
    return ncNewsApi.get("/articles").then((response) => {
        return response.data.articles
    })
}

export const getArticlebyId = (articleId) => {
    return ncNewsApi.get(`/articles/${articleId}`).then((response) => {
        return response.data.article
    })
}

export const getUserByUsername = (username) => {
    return ncNewsApi.get(`/users/${username}`).then((response) => {
        return response.data.user
    })
}

export const getPostedComments = (articleId) => {
    return ncNewsApi.get(`/articles/${articleId}/comments`).then((response) => {
        return response.data.comments
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