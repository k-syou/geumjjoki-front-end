import articleService from "@/services/api/articleService"
import type { ArticleListRequest } from "@/types/article"
import { useRouter } from "vue-router"


const useArticleComposable = () => {
    const getArticleList = async (request: ArticleListRequest) => {
        const data = await articleService.getArticleList(request)
        return data
    }
    const createArticle = async (request : {title : string, content : string }) => {
        const data = await articleService.createArticle(request)
        return data
    }
    return { getArticleList, createArticle}
}

export default useArticleComposable