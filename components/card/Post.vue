<script setup lang="ts">
import type {Post} from "~/interface";

const {value} = defineProps<{ value: Post }>()
</script>

<template>
  <nuxt-link
    class="block space-y-2 rounded-lg overflow-hidden"
    to="/post/sample-post"
  >
    <div class="pt-1/2 relative">
      <div class="absolute inset-0">
        <img :src="value.image" alt="" class="w-full h-full object-cover">
      </div>
    </div>
    <div class="py-4 space-y-2">
      <div class="font-bold text-lg">{{ value.title }}</div>
      <div class="text-gray-500">{{ value.desc }}</div>
    </div>
  </nuxt-link>
</template>

<style scoped>

</style>
