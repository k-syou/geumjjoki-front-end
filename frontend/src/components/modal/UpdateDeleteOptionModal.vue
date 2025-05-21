<template>
  <div class="fixed inset-0 z-0 bg-gray-600/60" @click.self="$emit('close')"></div>
  <div class="fixed bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-gray-200 z-10 rounded-t-2xl">

    <div class="w-full px-11 my-13 flex flex-col gap-5">
      <div class="w-full flex items-center justify-between">
        <div class="flex gap-4">
          <WriteIcon />
          <h3>수정</h3>
        </div>
        <RightArrow class ="cursor-pointer"width="16" height="16" @click="goToUpdate" />
      </div>
      <div class="w-full flex items-center justify-between">
        <div class="flex gap-4">
          <TrashIcon />
          <h3>삭제</h3>
        </div>
        <RightArrow width="16" height="16" @click="openDeletePopup"/>
      </div>
    </div>
  </div>
  <DeletePopupModal v-if="showDeletePopup"  @close="closeDeletePopup" />
</template>

<script setup>
import WriteIcon from '@/components/common/icons/WriteIcon.vue';
import TrashIcon from '@/components/common/icons/TrashIcon.vue';
import RightArrow from '../common/icons/RightArrow.vue';
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import DeletePopupModal from '@/components/modal/DeletePopupModal.vue'

const router = useRouter()

const emit = defineEmits(['close'])

const goToUpdate = () => {
  router.push({ name: 'create_article' });
};


const showDeletePopup = ref(false) // ✅ 상태 추가
const openDeletePopup = () => {
  showDeletePopup.value = true
}
const closeDeletePopup = () => {
  showDeletePopup.value = false
}



</script>

<style scoped></style>
