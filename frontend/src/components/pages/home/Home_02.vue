<template>
  <!-- Top bar -->
  <section class="w-full">
    <div class="flex gap-5 mt-15 items-center justify-end">
      <SettingsIcon />
      <CloseIcon class="me-11" @click = 'goHome1'/>
    </div>
  </section>


  <section class="w-full ps-6">
    <!-- 프로필 부분 -->
    <div class="flex justify-between items-center mt-10">
      <div class="flex gap-3 items-center">
        <ProfileIcon />
        <div>
          <h3 class="h3 fw-black">금쪼기님은</h3>
          <h4 class="h4"><span class="h4 fw-black text-gray-600">Silver</span> 등급입니다.</h4>
        </div>
      </div>

      <h4 class="w-30 h-7 border-gray-600 border-solid border-2 rounded-2xl h4 text-center me-9"> 프로필 변경 </h4>
    </div>


    <!-- 경험치 progress bar -->
    <div class="w-100 h-max-110 mx-auto mt-2">
      <!-- 막대기 -->
      <div class=" w-100 bg-gray-300 rounded-full h-4 mb-1 ">
        <div class="absolute bg-gray-600 h-4 rounded-full" style="width: 30%;"></div>
        <!-- 말풍선 -->
        <div class="relative flex justify-center mb-2 top-0 right-[30%]">
          <div class="bg-gray-600 text-gray-100 h4 px-3 py-1 rounded-md relative top-0 right-0">
            40,000
            <div class="absolute w-3 h-3 bg-gray-600 rotate-45 left-1/2 -translate-x-1/2 -bottom-1.5"></div>
          </div>
        </div>
      </div>
      <!-- 하단 텍스트 -->
      <div class="flex justify-between text-caption fw-bold mt-1">
        <span class="caption fw-bold">0</span>
        <span class="caption fw-bold">100,000</span>
      </div>
    </div>


    <!-- 경험치 안내창 -->
    <div class="w-100 h-11 bg-gray-300 rounded-xl mb-8 flex items-center justify-center">
      <h4 class="h4 fw-black text-center text-brown-600">골드 등급 <span class=" h4 text-cocoa-600">달성까지</span> 60,000 경험치
        남음
      </h4>
    </div>
  </section>


  <section class='w-full ps-7'>
    <!-- 전체 메뉴 -->
    <h4 class="h4 fw-black mb-6 text-gray-600"> 전체 메뉴</h4>
    <div>
      <div class="flex gap-4 items-center mb-7">
        <ExpenseIcon color = 'cocoa-600' />
        <p class="p1"> 소비 내역 조회</p>
      </div>
      <div class="flex gap-4 items-center mb-7">
        <RewardIcon/>
        <p class="p1"> 리워드 교환</p>
      </div>
      <div class="flex gap-4 items-center mb-7">
        <ChallengeIcon color = 'cocoa-600' />
        <p class="p1"> 챌린지 도전</p>
      </div>
      <div class="flex gap-4 items-center mb-7">
        <ArticleIcon color = 'cocoa-600' />
        <p class="p1"> 게시글 작성</p>
      </div>
    </div>

    <!-- 마이페이지 -->
    <h4 class="h4 fw-black mb-6 text-gray-600 mt-10"> 마이페이지</h4>
    <div>
      <div class="flex gap-4 items-center mb-7" @click = 'goHome3'>
        <UserInfoUpdateIcon />
        <p class="p1"> 회원정보 수정</p>
      </div>
      <div class="flex gap-4 items-center mb-7" @click = 'goHome4'>
        <PasswordChangeIcon />
        <p class="p1"> 비밀번호 변경</p>
      </div>
    </div>
  </section>





</template>

<script setup>
import ChallengeIcon from '@/components/common/icons/ChallengeIcon.vue';
import ExpenseIcon from '@/components/common/icons/ExpenseIcon.vue';
import ProfileIcon from '@/components/common/icons/ProfileIcon.vue';
import SettingsIcon from '@/components/common/icons/SettingsIcon.vue';
import ArticleIcon from '@/components/common/icons/ArticleIcon.vue';
import RewardIcon from '@/components/common/icons/RewardIcon.vue';
import UserInfoUpdateIcon from '@/components/common/icons/UserInfoUpdateIcon.vue';
import PasswordChangeIcon from '@/components/common/icons/PasswordChangeIcon.vue';
import CloseIcon from '@/components/common/icons/CloseIcon.vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome1 = () => {
  router.push({name:'home'})
}
const goHome3 = () => {
  router.push({name:'home3'})
}
const goHome4 = () => {
  router.push({name:'home4'})
}


</script>

<style scoped></style>
