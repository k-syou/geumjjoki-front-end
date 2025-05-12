<template>
    <div class="flex flex-col items-center justify-center gap-2 w-[3.75rem] h-[3.75rem]" @click="emit('click')">
      <div :class="iconClass">
        <slot name="icon" />
      </div>
      <div :class="textClass">
        <slot name="text" />
      </div>
    </div>
</template>

<script setup lang='ts'>
  import { computed } from 'vue';
  const props = defineProps<{
    variant:boolean
  }>();

  const isActive = computed(() => props.variant);
  const iconClass = computed(() => isActive.value ? 'stroke-gold-600 mt-2.5 transition-all duration-200' : 'stroke-cocoa-600 mt-2.5 transition-all duration-200');
  const textClass = computed(() => isActive.value ? 'text-gold-600 caption fw-bold transition-all duration-200' : 'text-cocoa-600 caption fw-bold transition-all duration-200');

  const emit = defineEmits(['click']);
</script>

<style>
</style>