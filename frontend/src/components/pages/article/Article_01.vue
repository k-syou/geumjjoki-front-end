<template>
   <WriteArticleIcon @click="goArticle2" class="absolute bottom-20 right-2 cursor-pointer" />
   <!-- 상단 바 -->
   <div class="relative flex items-center justify-center w-full mt-16">
      <LeftArrow class="absolute top-1/2 -translate-y-1/2 left-10 cursor-pointer" />
      <h3 class="h3 font-bold">게시글</h3>
      <SearchIcon class="absolute top-1/2 -translate-1/2 right-10 cursor-pointer" />
   </div>
   <div class="w-full ps-6 pt-7 flex gap-4">
      <h3 class="h3 fw-black">최신글</h3>
      <h3 class="h3 fw-black">인기글</h3>
   </div>
   <!-- 게시글 -->
   <div class="mt-9 w-full max-h-full overflow-y-auto pb-6 scrollbar-hide">
      <div @click = "goDetail_article" v-for="article in articles" :key=article.title
       class="ps-6 pe-4 w-full border-t border-b border-gray-600 cursor-pointer">
         <div class="flex items-center justify-between my-5">
            <div>
               <h3 class="h3 fw-black">{{ article.title }}</h3>
               <h6 class="h6 w-50"> {{ article.content }}</h6>
            </div>
            <p class="caption font-bold">{{ article.created_at }} | {{ article.nickname }} </p>
         </div>
         <div class="w-full flex gap-5 items-center justify-center my-4">
            <div class="flex gap-2">
               <CommentIcon />
               <h5 class="h5">{{ article.comments }}</h5>
            </div>
            <div class="flex gap-2">
               <LikeIcon />
               <h5 class="h5">{{ article.likes }}</h5>
            </div>
            <div class="flex gap-2">
               <ScrapIcon />
               <h5 class="h5">{{ article.scraps }}</h5>
            </div>
         </div>
      </div>
   </div>




</template>

<script setup>

import WriteArticleIcon from '@/components/common/icons/WriteArticleIcon.vue'
import LeftArrow from '@/components/common/icons/LeftArrow.vue';
import SearchIcon from '@/components/common/icons/SearchIcon.vue';
import CommentIcon from '@/components/common/icons/CommentIcon.vue';
import LikeIcon from '@/components/common/icons/LikeIcon.vue';
import ScrapIcon from '@/components/common/icons/ScrapIcon.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const goArticle2 = () => {
   router.push({ name: 'create_article' })
}

const goDetail_article = () => {
   router.push({ name: 'detail_article'})
}

const menus = [
   { name: '최신글' },
   { name: '인기글' },
]


const articles = ref([
   {
      title: '게시글입니다1.',
      content: '게시글 내용은 60자만 출력하고 나머지는 생략하고 싶어여기에서 다음줄로 넘어가고',
      created_at: '12시간 전',
      nickname: '금쪼기',
      comments: 50000,
      likes: 1027000,
      scraps: 1027000
   },
   {
      title: '게시글입니다2.',
      content: '게시글 내용은 60자만 출력하고 나머지는 생략하고 싶어여기에서 다음줄로 넘어가고',
      created_at: '12시간 전',
      nickname: '금쪼기',
      comments: 50000,
      likes: 1027000,
      scraps: 1027000
   },
   {
      title: '게시글입니다3.',
      content: '게시글 내용은 60자만 출력하고 나머지는 생략하고 싶어여기에서 다음줄로 넘어가고',
      created_at: '12시간 전',
      nickname: '금쪼기',
      comments: 50000,
      likes: 1027000,
      scraps: 1027000
   },
   {
      title: '게시글입니다4.',
      content: '게시글 내용은 60자만 출력하고 나머지는 생략하고 싶어여기에서 다음줄로 넘어가고',
      created_at: '12시간 전',
      nickname: '금쪼기',
      comments: 50000,
      likes: 1027000,
      scraps: 1027000
   },
   {
      title: '게시글입니다5.',
      content: '게시글 내용은 60자만 출력하고 나머지는 생략하고 싶어여기에서 다음줄로 넘어가고',
      created_at: '12시간 전',
      nickname: '금쪼기',
      comments: 50000,
      likes: 1027000,
      scraps: 1027000
   },
   {
      title: '게시글입니다6.',
      content: '게시글 내용은 60자만 출력하고 나머지는 생략하고 싶어여기에서 다음줄로 넘어가고',
      created_at: '12시간 전',
      nickname: '금쪼기',
      comments: 50000,
      likes: 1027000,
      scraps: 1027000
   },
   {
      title: '게시글입니다7.',
      content: '게시글 내용은 60자만 출력하고 나머지는 생략하고 싶어여기에서 다음줄로 넘어가고',
      created_at: '12시간 전',
      nickname: '금쪼기',
      comments: 50000,
      likes: 1027000,
      scraps: 1027000
   },
   {
      title: '게시글입니다8.',
      content: '게시글 내용은 60자만 출력하고 나머지는 생략하고 싶어여기에서 다음줄로 넘어가고',
      created_at: '12시간 전',
      nickname: '금쪼기',
      comments: 50000,
      likes: 1027000,
      scraps: 1027000
   },
])
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