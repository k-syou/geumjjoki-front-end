import articleService from "@/services/api/articleService"
import type { ArticleDetail, ArticleListRequest, createArticleRequest, Comment, createCommentRequest, ParentComment } from "@/types/article"


const useArticleComposable = () => {
    const getArticleList = async (request: ArticleListRequest) => {
        const data = await articleService.getArticleList(request)
        return data
    }
    const createArticle = async (request: createArticleRequest) => {
        const data = await articleService.createArticle(request)
        return data
    }
    const getArticleDetail = async (articleId: number) => {
        const data = await articleService.getArticleDetail(articleId);
        return data.article as ArticleDetail
    }

    const updateArticle = async (articleId: number) => {
        const data = await articleService.updateArticle(articleId);
        return data
    }


    const getCommentList = async (articleId: number) => {
        const data = await articleService.getCommentList(articleId);
        return data.comments as ParentComment[]
    }

    const createComment = async (articleId: number, request: createCommentRequest) => {
        const data = await articleService.createComment(articleId, request)
        return data as ParentComment
    }

    const deleteComment = async (articleId: number, commentId: number) => {
        await articleService.deleteComment(articleId, commentId)
    }



    return { getArticleList, createArticle, getArticleDetail, getCommentList, createComment, deleteComment, updateArticle }
}



export default useArticleComposable


