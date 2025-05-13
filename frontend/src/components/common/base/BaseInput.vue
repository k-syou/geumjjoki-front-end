<template>
  <input :type="props.type" :class="inputClass" :placeholder="props.placeholder">
</template>

<script setup lang="ts">
import { computed } from 'vue'


const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  width: {
    type: String,
    default: 'full',
  },
  variant: {
    type: String,
    default: 'white',
  },
  placeholder: {
    type: String,
    default: '',
  },
})

let variantClass: string;

if (props.variant === 'white') {
  variantClass = 'bg-white text-black'
} else if (props.variant === 'gray') {
  variantClass = 'bg-gray-300 text-black'
} else if (props.variant === 'dark-gray') {
  variantClass = 'bg-gray-600 text-white'
}

const inputClass = computed(() => {
  return [
    `w-${props.width}`,
    `py-3 px-4`,
    `rounded-lg`,
    variantClass,
    `border border-gray-600`,
  ]
})

</script>

<style scoped>

</style>