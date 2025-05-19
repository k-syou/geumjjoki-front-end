<template>
    <!-- 상단 바 -->
    <div class="relative flex items-center justify-center w-full mt-16">
        <LeftArrow class="absolute top-1/2 -translate-y-1/2 left-10 cursor-pointer" />
        <h3 class="h3 font-bold">게시글</h3>
        <SearchIcon class="absolute top-1/2 -translate-1/2 right-10 cursor-pointer" />
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
        <div class="w-full mt-5">
            <h3 class="h3">제목입니다아아아</h3>
            <h4 class="h4 mt-2">게시글 내용을 입력하세요.게시글 내용을 입력하세요.게시글 내용을 입력하세요.게시글 내용을 입력하세요.게시글 내용을 입력하세요.게시글 내용을 입력하세요.
            </h4>
        </div>
    </section>
    <div class="mt-16 flex gap-4 justify-center">
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
    <section class="w-full mt-10 px-10">
        <div class="flex gap-1 mb-3">
            <ProfileIcon width=20 height=20 />
            <p class="catption text-bold"> 닉네임 </p>
        </div>
        <div>
            <h5 class="h5 mb-1">댓글내용입니다.댓글내용입니다</h5>
            <div class="flex gap-4">
                <h6 class="h6">05/16 15:38</h6>
                <div class="flex gap-1">
                    <CommentIcon />
                    <h5 class="h5">1000</h5>
                </div>
                <div class="flex gap-1">
                    <LikeIcon />
                    <h5 class="h5">30000</h5>
                </div>
            </div>
        </div>

    </section>





    <UpdateDeleteOptionModal v-if="showModal" @close="showModal = false" />
</template>

<script setup>
import ProfileIcon from '@/components/common/icons/ProfileIcon.vue';
import LikeIcon from '@/components/common/icons/LikeIcon.vue';
import CommentIcon from '@/components/common/icons/CommentIcon.vue';
import ScrapIcon from '@/components/common/icons/ScrapIcon.vue';
import LeftArrow from '@/components/common/icons/LeftArrow.vue';
import SearchIcon from '@/components/common/icons/SearchIcon.vue';
import ThreeDotsIcon from '@/components/common/icons/ThreeDotsIcon.vue';
import UpdateDeleteOptionModal from '@/components/modal/UpdateDeleteOptionModal.vue'

import { ref } from 'vue'


const showModal = ref(false)
const goOptionModal = () => {
    showModal.value = true
}
</script>

<style scoped></style>
