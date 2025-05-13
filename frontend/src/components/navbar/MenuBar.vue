<template>
  <div class="absolute bottom-0 left-0 right-0 flex flex-row items-center  rounded-t-4xl bg-gray-200 py-0.5 px-5 gap-2 justify-center shadow-menu-bar">
    <MenuIcon v-for="(menu, index) in menus" :key="index" :variant="actives[index]" @click="handleClick(index)">
      <template #icon>
        <component :is="menu.icon" />
      </template>
      <template #text>
        {{ menu.name }}
      </template>
    </MenuIcon>
  </div>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue';
import MenuIcon from './MenuIcon.vue';
import { useRouter, useRoute } from 'vue-router';
import { MenuIcons } from '@/components/common/icons';
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

const menus = ref([
  {
    name: '마이',
    icon: MenuIcons.MenuMyIcon,
    path: 'user'
  },
  {
    name: '소비',
    icon: MenuIcons.MenuExpenseIcon,
    path: 'expense'
  },
  {
    name: '홈',
    icon: MenuIcons.MenuHomeIcon,
    path: 'home'
  },
  {
    name: '리워드',
    icon: MenuIcons.MenuRewardIcon,
    path: 'reward'
  },
  {
    name: '챌린지',
    icon: MenuIcons.MenuChallengeIcon,
    path: 'challenge'
  },
  {
    name: '게시판',
    icon: MenuIcons.MenuArticleIcon,
    path: 'article'
  }
])

// 현재 경로가 변경될 때마다 active 상태 업데이트
watch(() => route.path, (newPath) => {
  const activeIndex = pathToIndex[newPath];
  if (activeIndex !== undefined) {
    actives.value = actives.value.map((_, index) => index === activeIndex);
  }
}, { immediate: true });

const handleClick = (index: number) => {
  actives.value = actives.value.map((_, i) => i === index);
  router.push({name: menus.value[index].path});
};

</script>

<style></style>