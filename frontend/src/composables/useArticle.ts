import articleService from "@/services/api/articleService"
import type { ArticleDetail, ArticleList, ArticleListRequest, createArticleRequest, Comment, createCommentRequest, ParentComment } from "@/types/article"


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
        return data as ArticleDetail
    }

    const updateArticle = async (articleId: number) => {
        const data = await articleService.updateArticle(articleId);
        return data
    }
    const deleteArticle = async (articleId: Number) => {
        await articleService.deleteArticle(articleId);
    }


    const getCommentList = async (articleId: number) => {
        const data = await articleService.getCommentList(articleId);
        return data.comments as ParentComment[]
    }

    const createComment = async (articleId: number, request: createCommentRequest) => {
        const data = await articleService.createComment(articleId, request)
        return data.comment as ParentComment
    }
    const createReply = async (articleId: number, request: createCommentRequest) => {
        const data = await articleService.createComment(articleId, request)
        return data as Comment
    }

    const deleteComment = async (articleId: number, commentId: number) => {
        await articleService.deleteComment(articleId, commentId)
        alert("댓글이 삭제되었습니다")
    }


    const articleLikes = async (articleId: number) => {
        const data = await articleService.articleLikes(articleId)
        console.log(data.message)
    }

    const commentLikes = async (commentId: number) => {
        const data = await articleService.commentLikes(commentId)
        console.log(data.message)
    }

    return { getArticleList, createArticle, getArticleDetail, deleteArticle, getCommentList, createComment, deleteComment, updateArticle, createReply, articleLikes, commentLikes}
}



export default useArticleComposable


