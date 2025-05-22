import apiClient from "@/plugins/axios"
import type { ArticleListRequest, ArticleDetail, createArticleRequest, createCommentRequest, ParentComment } from "@/types/article"



const articleService = {
    // 게시판 목록
    getArticleList: async (request: ArticleListRequest) => {
        const response = await apiClient.get('/articles/', { params: request })
        return response.data
    },
    // 게시판 글 생성
    createArticle: async (request: createArticleRequest) => {
        const response = await apiClient.post('/articles/', request)
        console.log(response.data.data)
        return response.data
    },
    // 게시판 글 상세
    getArticleDetail: async (articleId: Number) => {
        const response = await apiClient.get(`/articles/${articleId}/`);
        console.log("글상세", response.data.article)
        return response.data.article
    },

    // 게시판 글 수정
    updateArticle: async (articleId: Number) => {
        const response = await apiClient.put(`/articles/${articleId}/`);
        console.log(response.data)
        return response.data
    },

    // 게시판 글 삭제
    deleteArticle: async (articleId: Number) => {
        await apiClient.delete(`/articles/${articleId}/`);
        alert("게시글이 삭제되었습니다")
    },


    // 댓글 조회
    getCommentList: async (articleId: Number) => {
        const response = await apiClient.get(`/articles/${articleId}/comments/`);
        console.log('댓글목록 호출', response.data.comments)
        return response.data
    },

    // 댓글 생성
    createComment: async (articleId: Number, request: createCommentRequest) => {
        const response = await apiClient.post(`/articles/${articleId}/comments/`, request);
        console.log('추가한 댓글 호출', response.data)
        return response.data
    },

    // 대댓글 생성
    createReply: async (articleId: Number, request: createCommentRequest) => {
        const response = await apiClient.post(`/articles/${articleId}/comments/`, request);
        console.log('추가한 대댓글 호출', response.data)
        return response.data
    },

    // 댓글 수정

    // 댓글 삭제
    deleteComment: async (articleId: number, commentId: number) => {
        const response = await apiClient.delete(`/articles/${articleId}/comments/${commentId}/`);
        return response.data

    },

    // 게시글 좋아요
    articleLikes : async (articleId: number) =>{
        const response = await apiClient.post(`/articles/likes/${articleId}/`)
        return response.data
    },

    // 댓글 좋아요    
    commentLikes : async (commentId: number) =>{
        const response = await apiClient.post(`/articles/likes/comments/${commentId}/`)
        return response.data
    }
}

export default articleService