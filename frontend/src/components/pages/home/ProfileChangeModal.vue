<template>
  <div class="w-full h-90 bg-gray-200 shadow-menu-bar rounded-3xl">
    <div class="flex justify-between items-center ms-5 me-10 py-3">
      <h3 class="h3"> 프로필 변경</h3>
      <CloseIcon @click='goHome2' class='cursor-pointer' />
    </div>
    <!-- 프로필 이미지 선택 아이콘 -->
    <div class="flex justify-center items-center">
      <label for="file-upload" class="cursor-pointer">
        <span>
          <SelectProfileIcon />
        </span>
        <input id="file-upload" name="file-upload" type="file" class="sr-only">
      </label>
    </div>
    <div class="w-fit ms-11 mt-4">
      <!-- 닉네임 변경 form -->
      <form class="p text-cocoa-600">
        <label for="name" class="block mb-2 p text-cococa-600">닉네임</label>
        <input type="text" id="name"
          class="bg-gray-200 border border-gray-600 text-cocoa-600 p rounded-lg block w-89 h-12 p-2 "
          placeholder="홍길동" />
      </form>
      <!-- 완료 버튼 -->
      <button @click='goHome2'
        class="cursor-pointer w-89 h-12 rounded-lg block mt-8 bg-gold-200 text-cocoa-600 h3">완료</button>
    </div>
  </div>
</template>

<script setup>
import CloseIcon from '@/components/common/icons/CloseIcon.vue';
import SelectProfileIcon from '@/components/common/icons/SelectProfileIcon.vue';

import { useRouter } from 'vue-router'
const router = useRouter()
const goHome2 = () => {
  router.push({ name: 'home2' })
}


</script>

<style scoped></style>
