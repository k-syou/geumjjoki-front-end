import apiClient from "@/plugins/axios"
import type { ArticleListRequest } from "@/types/article"



const articleService = {
    getArticleList: async (request: ArticleListRequest) => {
        const response = await apiClient.get('/articles/', { params:request })
        return response.data
    },
    createArticle: async (request: {title : string, content : string }) =>{
        console.log(request)
        const response = await apiClient.post('/articles/', request)
        return response.data
    }

}

export default articleService