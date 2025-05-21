<template>
    <!-- 상단 바 -->
    <div class="relative flex items-center justify-center w-full mt-16">
        <LeftArrow @click="goArticle1" class="absolute top-1/2 -translate-y-1/2 left-10 cursor-pointer" />
        <h3 class="h3 font-bold">게시글</h3>

        <ThreeDotsIcon @click="goOptionModal" class="absolute top-1/2 -translate-1/2 right-3 cursor-pointer" />
    </div>
    <section class="w-full px-10">
        <div class="flex gap-3 mt-6">
            <img :src="article.author_profile_image" alt="프로필이미지" class="w-13 h-13">
            <div class="flex flex-col">
                <h4 class="h4 fw-black">{{ article.author }}</h4>
                <p class="caption">{{ article.time_ago }} | 조회수 {{ article.views }}</p>
            </div>
        </div>
        <div class="mt-5">
            <h3 class="h3">{{ article.title }}</h3>
            <div class="w-full mt-1 h-[100px] overflow-y-auto pb-6 scrollbar-hide flex flex-col gap-3">
                <h4 class="h4 h-fit mt-2">
                    {{ article.content }}
                </h4>
            </div>
        </div>
    </section>
    <div class="mt-3 flex gap-4 justify-center">
        <div class="flex gap-2 items-center">
            <LikeIcon :fillcolor="article.isLiked ? 'red' : 'none'"
                :color="article.isLiked ? 'transparent' : 'gray-600'" />
            <h5 class="h5">좋아요 {{ article.likes_count }}</h5>
        </div>
        <div class="flex gap-2 items-center">
            <CommentIcon />
            <h5 class="h5">댓글 {{ comments.length }}</h5>
        </div>

    </div>

    <div class="w-full mt-8 px-10 h-[450px] overflow-y-auto pb-6 scrollbar-hide flex flex-col gap-3">
        <!-- 댓글 -->
        <section v-for="comment in comments" :key="comment.comment_id">
            <div class="flex justify-between">
                <div class="flex items-center gap-1 mb-3">
                    <img :src="comment.author_profile_image" alt="프로필이미지" class="w-5 h-5">
                    <p class="caption fw-bold"> {{ comment.author }} </p>
                </div>
                <div class="px-4 w-22 h-5 bg-gray-400 rounded-md flex items-center gap-1">
                    <LikeIcon />
                    <CommentIcon />
                    <ThreeDotsIcon width='11' height='20' class="cursor-pointer"
                        @click="() => goOptionModal(comment.comment_id)" />
                </div>
            </div>
            <div>
                <h5 class=" h5 mb-1">{{ comment.content }}</h5>
                <div class="flex items-center gap-4">
                    <h6 class="h6">{{ comment.time_ago }}</h6>
                    <div class="flex items-center gap-1">
                        <CommentIcon color='minty-500' />
                        <h5 class="h5">{{ comment.replies.length }}</h5>
                    </div>
                    <div class="flex items-center gap-1">
                        <LikeIcon color='red-600' />
                        <h5 class="h5">30000</h5>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <!-- 하단 댓글 입력창 -->
    <form @submit.prevent="handleCreateComment"
        class='absolute bottom-30 left-10 w-90 h-8 bg-gray-400 rounded-3xl px-4 flex justify-between items-center'>
        <input placeholder="댓글을 남겨보세요" class="caption fw-bold text-gray-600 w-90" v-model="commentinput"
            @keyup.enter="handleCreateComment"></input>
        <SendingIcon class="cursor-pointer" @click="handleCreateComment" />
    </form>



    <UpdateDeleteOptionModal 
    v-if="showModal" 
    :articleId="selectedArticleId" 
    :commentId="selectedCommentId"
    @close="showModal = false" 
    @delete="handleDeleteComment"/>
</template>

<script setup lang="ts">
import SendingIcon from '@/components/common/icons/SendingIcon.vue';
import ProfileIcon from '@/components/common/icons/ProfileIcon.vue';
import DownRightIcon from '@/components/common/icons/DownRightIcon.vue';
import LikeIcon from '@/components/common/icons/LikeIcon.vue';
import CommentIcon from '@/components/common/icons/CommentIcon.vue';
import LeftArrow from '@/components/common/icons/LeftArrow.vue';
import SearchIcon from '@/components/common/icons/SearchIcon.vue';
import ThreeDotsIcon from '@/components/common/icons/ThreeDotsIcon.vue';
import UpdateDeleteOptionModal from '@/components/modal/UpdateDeleteOptionModal.vue'
import { ref, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import useArticleComposable from '@/composables/useArticle';
import type { ArticleDetail, Comment, ParentComment } from '@/types/article';

const useArticle = useArticleComposable()
const route = useRoute()
const article = ref<ArticleDetail>({})
const comments = ref<ParentComment[]>([])
// const replies = ref<Comment[]>([])
const commentinput = ref('')
const articleId = Number(route.params.id)
onMounted(async () => {
    console.log(articleId)
    article.value = await useArticle.getArticleDetail(articleId)
    console.log(article.value)
    comments.value = await useArticle.getCommentList(articleId)
    console.log(comments.value)
})

// for comment in comments:
//     for reply in comment.replies:
    

const handleDeleteComment = async () => {

}

const handleCreateComment = async () => {
    // 포스트 요청
    const request = {
        content: commentinput.value
    }
    const newComment:ParentComment = await useArticle.createComment(articleId, request)
    comments.value.push(newComment)
    commentinput.value = ''
    comments.value = await useArticle.getCommentList(articleId)
    
}

const selectedArticleId = ref<number>(-1)
const selectedCommentId = ref<number>(-1)
const showModal = ref(false)
const goOptionModal = (commentId: number) => {
    const articleId = Number(route.params.id)
    selectedArticleId.value = articleId
    selectedCommentId.value = commentId
    showModal.value = true
}

const router = useRouter()
const goArticle1 = () => {
    router.back()
    // router.push({ name: 'article' })
}
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    scrollbar-width: none;
    -ms-overflow-style: none;
}
</style>
