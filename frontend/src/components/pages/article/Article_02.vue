<template>
    <!-- 하단 댓글 입력창 -->
    <form class='fixed bottom-30 left-20 w-90 h-8 bg-gray-400 rounded-3xl px-4 flex justify-between items-center'>
        <input placeholder = "댓글을 남겨보세요" class = "caption fw-bold text-gray-600"></input>
        <SendingIcon class = "cursor-pointer" />
    </form>
    <!-- 상단 바 -->
    <div class="relative flex items-center justify-center w-full mt-16">
        <LeftArrow @click="goArticle1" class="absolute top-1/2 -translate-y-1/2 left-10 cursor-pointer" />
        <h3 class="h3 font-bold">게시글</h3>
        
        <ThreeDotsIcon @click="goOptionModal" class="absolute top-1/2 -translate-1/2 right-3 cursor-pointer" />
    </div>
    <section class="w-full px-10">
        <div class="flex gap-3 mt-6">
            <ProfileIcon />
            <div class="flex flex-col">
                <h4 class="h4 fw-black">닉네임</h4>
                <p class="caption">3분전 | 조회수 0</p>
            </div>
        </div>
        <div class="mt-5">
            <h3 class="h3">제목입니다아아아</h3>
            <div class="w-full mt-5 h-[120px] overflow-y-auto pb-6 scrollbar-hide flex flex-col gap-3">
                <h4 class="h4 h-fit mt-2">
                    게시글 내용을 입력하세요.
                    게시글 내용을 입력하세요.
                    게시글 내용을 입력하세요.
                    게시글 내용을 입력하세요.
                    게시글 내용을 입력하세요.
                    게시글 내용을 입력하세요.
                    게시글 내용을 입력하세요.
                    게시글 내용을 입력하세요.
                    게시글 내용을 입력하세요.
                    게시글 내용을 입력하세요.
                    게시글 내용을 입력하세요.
                    게시글 내용을 입력하세요.
                    게시글 내용을 입력하세요.
                    게시글 내용을 입력하세요.
                    게시글 내용을 입력하세요.
                    게시글 내용을 입력하세요.
                    게시글 내용을 입력하세요.
                    게시글 내용을 입력하세요.

                </h4>
            </div>
        </div>
    </section>
    <div class="mt-3 flex gap-4 justify-center">
        <div class="flex gap-2">
            <LikeIcon />
            <h5 class="h5">좋아요 30000</h5>
        </div>
        <div class="flex gap-2">
            <CommentIcon />
            <h5 class="h5">댓글 30000</h5>
        </div>
        <div class="flex gap-2">
            <ScrapIcon />
            <h5 class="h5">스크랩 30000</h5>
        </div>
    </div>
    <div class="w-full mt-8 px-10 h-[400px] overflow-y-auto pb-6 scrollbar-hide flex flex-col gap-3">
        <!-- 댓글 -->
        <section>
            <div class="flex justify-between">
                <div class="flex items-center gap-1 mb-3">
                    <ProfileIcon width=20 height=20 />
                    <p class="caption fw-bold"> 닉네임 </p>
                </div>
                <div class="px-4 w-22 h-5 bg-gray-400 rounded-md flex items-center gap-1">
                    <LikeIcon />
                    <CommentIcon />
                    <ThreeDotsIcon width='11' height='20' class="cursor-pointer" @click="goOptionModal" />
                </div>
            </div>
            <div>
                <h5 class="h5 mb-1">댓글내용입니다.댓글내용입니다</h5>
                <div class="flex items-center gap-4">
                    <h6 class="h6">05/16 15:38</h6>
                    <div class="flex items-center gap-1">
                        <CommentIcon color='minty-500' />
                        <h5 class="h5">1000</h5>
                    </div>
                    <div class="flex items-center gap-1">
                        <LikeIcon color='red-600' />
                        <h5 class="h5">30000</h5>
                    </div>
                </div>
            </div>
        </section>
        <!-- 대댓글 -->
        <section class="w-full flex">
            <DownRightIcon />
            <div class="w-full">
                <div class="bg-gray-300 rounded-xl py-1 ps-2 ">
                    <div class="flex justify-between me-2">
                        <div class="flex items-center gap-1 mb-3">
                            <ProfileIcon width=20 height=20 />
                            <p class="caption fw-bold"> 닉네임 </p>
                        </div>
                        <div class="px-4 w-22 h-5 bg-gray-400 rounded-md flex items-center gap-1">
                            <LikeIcon />
                            <CommentIcon />
                            <ThreeDotsIcon width='11' height='20' class="cursor-pointer" @click="goOptionModal" />
                        </div>
                    </div>
                    <div>
                        <h5 class="h5 mb-1">댓글내용입니다.댓글내용입니다</h5>
                        <div class="flex items-center gap-4">
                            <h6 class="h6">05/16 15:38</h6>
                            <div class="flex items-center gap-1">
                                <CommentIcon color='minty-500' />
                                <h5 class="h5">1000</h5>
                            </div>
                            <div class="flex items-center gap-1">
                                <LikeIcon color="red-600" />
                                <h5 class="h5">30000</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <!-- 댓글 -->
        <section class="">
            <div class="flex justify-between">
                <div class="flex items-center gap-1 mb-3">
                    <ProfileIcon width=20 height=20 />
                    <p class="caption fw-bold"> 닉네임 </p>
                </div>
                <div class="px-4 w-22 h-5 bg-gray-400 rounded-md flex items-center gap-1">
                    <LikeIcon />
                    <CommentIcon />
                    <ThreeDotsIcon width='11' height='20' class="cursor-pointer" @click="goOptionModal" />
                </div>
            </div>
            <div>
                <h5 class="h5 mb-1">댓글내용입니다.댓글내용입니다</h5>
                <div class="flex items-center gap-4">
                    <h6 class="h6">05/16 15:38</h6>
                    <div class="flex items-center gap-1">
                        <CommentIcon color='minty-500' />
                        <h5 class="h5">1000</h5>
                    </div>
                    <div class="flex items-center gap-1">
                        <LikeIcon color='red-600' />
                        <h5 class="h5">30000</h5>
                    </div>
                </div>
            </div>
        </section>
        <!-- 댓글 -->
        <section class="">
            <div class="flex justify-between">
                <div class="flex items-center gap-1 mb-3">
                    <ProfileIcon width=20 height=20 />
                    <p class="caption fw-bold"> 닉네임 </p>
                </div>
                <div class="px-4 w-22 h-5 bg-gray-400 rounded-md flex items-center gap-1">
                    <LikeIcon />
                    <CommentIcon />
                    <ThreeDotsIcon width='11' height='20' class="cursor-pointer" @click="goOptionModal" />
                </div>
            </div>
            <div>
                <h5 class="h5 mb-1">댓글내용입니다.댓글내용입니다</h5>
                <div class="flex items-center gap-4">
                    <h6 class="h6">05/16 15:38</h6>
                    <div class="flex items-center gap-1">
                        <CommentIcon color='minty-500' />
                        <h5 class="h5">1000</h5>
                    </div>
                    <div class="flex items-center gap-1">
                        <LikeIcon color='red-600' />
                        <h5 class="h5">30000</h5>
                    </div>
                </div>
            </div>
        </section>
        <!-- 댓글 -->
        <section class="">
            <div class="flex justify-between">
                <div class="flex items-center gap-1 mb-3">
                    <ProfileIcon width=20 height=20 />
                    <p class="caption fw-bold"> 닉네임 </p>
                </div>
                <div class="px-4 w-22 h-5 bg-gray-400 rounded-md flex items-center gap-1">
                    <LikeIcon />
                    <CommentIcon />
                    <ThreeDotsIcon width='11' height='20' class="cursor-pointer" @click="goOptionModal" />
                </div>
            </div>
            <div>
                <h5 class="h5 mb-1">댓글내용입니다.댓글내용입니다</h5>
                <div class="flex items-center gap-4">
                    <h6 class="h6">05/16 15:38</h6>
                    <div class="flex items-center gap-1">
                        <CommentIcon color='minty-500' />
                        <h5 class="h5">1000</h5>
                    </div>
                    <div class="flex items-center gap-1">
                        <LikeIcon color='red-600' />
                        <h5 class="h5">30000</h5>
                    </div>
                </div>
            </div>
        </section>
    </div>





    <UpdateDeleteOptionModal v-if="showModal" @close="showModal = false" />
</template>

<script setup>
import SendingIcon from '@/components/common/icons/SendingIcon.vue';
import ProfileIcon from '@/components/common/icons/ProfileIcon.vue';
import DownRightIcon from '@/components/common/icons/DownRightIcon.vue';
import LikeIcon from '@/components/common/icons/LikeIcon.vue';
import CommentIcon from '@/components/common/icons/CommentIcon.vue';
import ScrapIcon from '@/components/common/icons/ScrapIcon.vue';
import LeftArrow from '@/components/common/icons/LeftArrow.vue';
import SearchIcon from '@/components/common/icons/SearchIcon.vue';
import ThreeDotsIcon from '@/components/common/icons/ThreeDotsIcon.vue';
import UpdateDeleteOptionModal from '@/components/modal/UpdateDeleteOptionModal.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const showModal = ref(false)
const goOptionModal = () => {
    showModal.value = true
}

const router = useRouter()
const goArticle1 = () => {
    router.push({ name: 'article' })
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
