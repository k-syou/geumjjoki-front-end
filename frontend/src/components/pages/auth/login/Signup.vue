<template>
  <header class="relative w-full h-12 flex items-center px-6 mb-7">
    <!-- 뒤로가기 아이콘: 왼쪽 정렬 -->
    <BackIcon
      color="black"
      class="absolute left-6 top-1/2 -translate-y-1/2 cursor-pointer"
      @click="goBack"
    />

    <!-- 가운데 제목 -->
    <h3 class="h3 text-cocoa-600 mx-auto">회원가입</h3>
  </header>

  
  <!-- 아이디부터 완료까지 감싸는 부분 -->
  <div class='w-70.5 relative pb-46.5'>
    <div class="pb-2">
      <h4 class="h4 pb-2">아이디</h4>

      <!-- 입력창 + 중복확인 버튼 감싸는 부분-->
      <div class="relative w-70.5">
        <input
          type="text"
          placeholder="아이디 입력(6-20자)"
          class="w-full pe-24 ps-4 py-3 rounded-xl border border-gray-400 placeholder-gray-600 text-xs font-bold bg-white"
        />

        <!-- 중복확인 버튼 -->
        <button
          class="w-21.5 h-5 py-0.5 absolute top-1/2 right-2 -translate-y-1/2 px-3 bg-cocoa-100 text-xs rounded-xl"
        >
          중복확인
        </button>
      </div>

      <!-- 에러 메시지 -->
      <p class="pt-2 text-center text-red-600  text-xs font-bold">아이디 중복 확인해주세요</p>
    </div>

    <!-- 비밀번호 부분 -->
    <div class="pb-2">
      <h4 class="h4 pb-2">비밀번호</h4>
      <input
        type="text"
        placeholder="비밀번호 입력 (문자, 숫자, 특수문자 포함 8~20자)"
        class="w-full ps-4 py-3 rounded-xl border border-gray-400 placeholder-gray-600 text-xs font-bold bg-white"
      />
      <p class="pt-2 text-center text-red-600 text-xs font-bold">올바르지 않은 비밀번호입니다.</p>
    </div>

    <div class="pb-2">
      <h4 class="h4 pb-2">비밀번호 확인</h4>
      <input
        type="text"
        placeholder="비밀번호 재입력"
        class="w-full ps-4 py-3 rounded-xl border border-gray-400 placeholder-gray-600 text-xs font-bold bg-white"
      />
      <p class="pt-2 text-center text-red-600 text-xs font-bold">비밀번호가 일치하지 않습니다.</p>
    </div>

    <!-- 이름 부분 -->
    <div class="pb-2">
      <h4 class="h4 pb-2">이름</h4>
      <input
        type="text"
        placeholder="이름 입력"
        class="w-full ps-4 py-3 mb-2 rounded-xl border border-gray-400 placeholder-gray-600 text-xs font-bold bg-white"
      />
    </div>

    <!-- 생년월일 부분 -->
    <div class="pb-12">
      <h4 class="h4 pb-2">생년월일</h4>
      <input
        type="text"
        placeholder="YYYY.MM.DD 형식으로 적어주세요"
        class="w-full ps-4 py-3 rounded-xl border border-gray-400 placeholder-gray-600 text-xs font-bold bg-white"
      />
    </div>

    <!-- 완료 버튼 -->
    <div>
      <button
        class="bg-cocoa-100 text-cocoa-600 rounded-lg w-72 h-10.5"
      >
        <h3 class="h3 text-cocoa-500">완료</h3>
      </button>
    </div>
  </div>
</template>

<script setup>
import BackIcon from '@/components/common/icons/BackIcon.vue'
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.back()
};

</script>

<style scoped>

</style>