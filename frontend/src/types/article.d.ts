export interface ArticleListRequest {
    page?: number
    size?: number
    sort?: string
    order?: string
    search_keywrod?: string
}

export interface createArticleRequest {
    title: string
    content: string
}


export interface ArticleDetail {
    article_id?: number
    title?: String
    content?: String
    author?: String
    author_profile_image?: String
    time_ago?: String
    likes_count?: String
    is_liked?: boolean
    views?: number
}

export interface Comment {
    comment_id: number
    content: String
    author: String
    author_profile_image: String
    time_ago: String
    comment_count: String
    code: String
}

export interface ParentComment extends Comment {
    replies: Comment[]
}

export interface createCommentRequest {
    content: String
    parent_comment_id?: Number
}
