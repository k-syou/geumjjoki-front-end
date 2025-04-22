import './assets/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const KAKAO_JAVASCRIPT_KEY = import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY

// Kakao SDK 초기화
if (window.Kakao && !window.Kakao.isInitialized()) {
  window.Kakao.init(KAKAO_JAVASCRIPT_KEY); // 여기에 발급받은 JavaScript 키 입력
  console.log('Kakao SDK Initialized:', window.Kakao.isInitialized());
} else if (!window.Kakao) {
  console.error('Kakao SDK script not loaded');
}

app.use(createPinia())
app.use(router)

app.mount('#app')
