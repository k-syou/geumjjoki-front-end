import apiClient from "@/plugins/axios"
import type { ArticleListRequest, createArticleRequest, createCommentRequest } from "@/types/article"



const articleService = {
    getArticleList: async (request: ArticleListRequest) => {
        const response = await apiClient.get('/articles/', { params:request })
        return response.data
    },
    createArticle: async (request: createArticleRequest) =>{
        const response = await apiClient.post('/articles/', request)
        console.log(response.data)
        return response.data
    },
    getArticleDetail: async (articleId : number) =>{
        const response = await apiClient.get(`/articles/${articleId}/`);
        console.log(response.data)
        return response.data
    },
    
    updateArticle: async (articleId : number) =>{
        const response = await apiClient.put(`/articles/${articleId}/`);
        console.log(response.data)
        return response.data
    },
    
    getCommentList: async (articleId : number) =>{
        const response = await apiClient.get(`/articles/${articleId}/comments/`);
        console.log('댓글목록 호출',response.data)
        return response.data
    },
    
    createComment: async (articleId : number, request : createCommentRequest) =>{
        const response = await apiClient.post(`/articles/${articleId}/comments/`, request);
        console.log('추가한 댓글 호출',response.data)
        return response.data
    },
    deleteComment: async (articleId : number, commentId : number) =>{
        await apiClient.delete(`/articles/${articleId}/comments/${commentId}/`);
    }


}

export default articleService