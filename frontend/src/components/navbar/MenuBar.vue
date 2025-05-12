<template>
  <div class="absolute bottom-0 left-0 right-0 flex flex-row items-center  rounded-t-4xl bg-gray-200 py-0.5 px-5 gap-2 justify-center shadow-menu-bar">
    <MenuIcon :variant="actives[0]" @click="handleClick(0)">
      <template #icon>
        <MyPageIcon />
      </template>
      <template #text>마이</template>
    </MenuIcon>
    <MenuIcon :variant="actives[1]" @click="handleClick(1)">
      <template #icon>
        <ExpenseIcon />
      </template>
      <template #text>소비</template>
    </MenuIcon>
    <MenuIcon :variant="actives[2]" @click="handleClick(2)">
      <template #icon>
        <HomeIcon />
      </template>
      <template #text>홈</template>
    </MenuIcon>
    <MenuIcon :variant="actives[3]" @click="handleClick(3)">
      <template #icon>
        <RewardIcon />
      </template>
      <template #text>리워드</template>
    </MenuIcon>
    <MenuIcon :variant="actives[4]" @click="handleClick(4)">
      <template #icon>
        <ChallengeIcon />
      </template>
      <template #text>챌린지</template>
    </MenuIcon>
    <MenuIcon :variant="actives[5]" @click="handleClick(5)">
      <template #icon>
        <ArticleIcon />
      </template>
      <template #text>게시판</template>
    </MenuIcon>
  </div>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue';
import MenuIcon from './MenuIcon.vue';
import { useRouter, useRoute } from 'vue-router';
import MyPageIcon from '@/assets/icon/MenuMyIcon.svg';
import ArticleIcon from '@/assets/icon/MenuArticleIcon.svg';
import ChallengeIcon from '@/assets/icon/MenuChallengeIcon.svg';
import HomeIcon from '@/assets/icon/MenuHomeIcon.svg';
import RewardIcon from '@/assets/icon/MenuRewardIcon.svg';
import ExpenseIcon from '@/assets/icon/MenuExpenseIcon.svg';
import { useAuthStore } from '@/stores/auth';

const actives = ref([false, false, true, false, false, false]);
const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();  // auth 스토어 사용

// const link: Record<number, string> = {
//   0: authStore.isAuthenticated ? '/my' : '/auth/login',
//   1: authStore.isAuthenticated ? '/expense' : '/auth/login',
//   2: '/',
//   3: authStore.isAuthenticated ? '/reward' : '/auth/login',
//   4: authStore.isAuthenticated ? '/challenge' : '/auth/login',
//   5: authStore.isAuthenticated ? '/article' : '/auth/login',
// }

const pathToIndex: Record<string, number> = {
  '/my': 0,
  '/auth/login': 0,
  '/expense': 1,
  '/': 2,
  '/reward': 3,
  '/challenge': 4,
  '/article': 5
};

const link: Record<number, string> = {
  0: '/my',
  1: '/expense',
  2: '/',
  3: '/reward',
  4: '/challenge',
  5: '/article',
}

// 현재 경로가 변경될 때마다 active 상태 업데이트
watch(() => route.path, (newPath) => {
  const activeIndex = pathToIndex[newPath];
  if (activeIndex !== undefined) {
    actives.value = actives.value.map((_, index) => index === activeIndex);
  }
}, { immediate: true });

const handleClick = (index: number) => {
  actives.value = actives.value.map((_, i) => i === index);
  router.push(link[index]);
};
</script>

<style></style>