<template>
  <div
    class="fixed inset-0 z-50 backdrop-blur-sm flex justify-center items-center"
    @click.self="$emit('close')"
  >
    <div class="bg-gray-200 rounded-3xl w-90 h-170 px-10 pt-14.5 shadow-xl text-center">
      <!-- 이미지 영역 -->
      <div class="bg-gray-400 rounded-md w-full h-65 flex items-center justify-center border border-gray-600">
        <h3 class="h3 text-cocoa-500">제품 이미지</h3>
      </div>

      <!-- 정보 목록 -->
      <div class="pt-5">
        <div class="flex justify-between h-9">
          <span class="h4 text-cocoa-500">상품명</span>
          <span class="h4 text-cocoa-500">{{ rewardData.reward.cost }}P</span>
        </div>
        <div class="flex justify-between h-9">
          <span class="h4 text-cocoa-500">구매일자</span>
          <span class="h4 text-cocoa-500">{{ formatDate(rewardData.redeemed_at) }}</span>
        </div>
        <div class="flex justify-between h-9">
          <span class="h4 text-cocoa-500">유효기간</span>
          <span class="h4 text-cocoa-500">{{ daysLeft(rewardData.expire_at) }}</span>
        </div>
        <div class="h-22 bg-gray-300 p-2 text-left">
          <span class="h4 text-cocoa-500 block">상품설명</span>
          <div class="h4 text-cocoa-500 text-right">
            {{ rewardData.reward.description || '상품설명을 적어주세요' }}
          </div>
        </div>
      </div>

      <!-- 닫기 버튼 -->
      <div class="flex justify-center p-5">
        <button
          class="bg-gray-600 text-cocoa-500 rounded-lg w-22 h-17"
          @click="$emit('close')"
        >
          <h3 class="h3 text-cocoa-500">닫기</h3>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RewardTransaction } from '@/types/purchases'

const props = defineProps<{
  rewardData: RewardTransaction
}>()

const formatDate = (isoString: string) => {
  const date = new Date(isoString)
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`
}

const daysLeft = (expireStr: string) => {
  const today = new Date()
  const expire = new Date(expireStr)
  const diff = Math.ceil((expire.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  return diff > 0 ? `${diff}일 남음` : '만료됨'
}
</script>

<style scoped>
/* 필요 시 스타일 추가 */
</style>
