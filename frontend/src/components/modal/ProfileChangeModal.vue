<template>
  <div class="fixed inset-0 z-0 bg-gray-600/60" @click.self="$emit('close')"></div>
  <div class="fixed bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-gray-200 z-10 rounded-t-2xl">
    <div class="flex justify-between items-center ms-5 me-10 py-3">
      <h3 class="h3"> 프로필 변경</h3>
      <CloseIcon @click='closeModal' class='cursor-pointer' />
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
    <div class="w-fit ms-11 mt-4 mb-10">
      <!-- 닉네임 변경 form -->
      <form class="p text-cocoa-600">
        <label for="name" class="block mb-2 p text-cococa-600">닉네임</label>
        <input type="text" id="name"
          class="bg-gray-200 border border-gray-600 text-cocoa-600 p rounded-lg block w-89 h-12 p-2 "
          placeholder="홍길동" />
      </form>
      <!-- 완료 버튼 -->
      <button @click="$emit('close')"
        class="cursor-pointer w-89 h-12 rounded-lg block mt-8 bg-gold-200 text-cocoa-600 h3">확인</button>
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

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}


</script>

<style scoped></style>
