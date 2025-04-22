<template>
  <div>
    <h1>Main</h1>

    <RouterLink to="/">
      <Button text="HOME" bgColor="icy-blue" textColor="white" size="medium" @click="handleClick" />
    </RouterLink>
  </div>
</template>

<script setup lang='ts'>
import { RouterLink } from 'vue-router'
import Button from '../common/components/Button.vue'

const handleClick = () => {
  console.log('click')
}
</script>

<style></style>