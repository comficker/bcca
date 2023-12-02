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
    <div class="flex flex-wrap text-sm">
      <div class="p-1">
        <div class="p-3 py-1 border rounded-xl">News</div>
      </div>,
      <div class="p-1">
        <div class="p-3 py-1 border rounded-xl">Club Activities</div>
      </div>
    </div>
    <div class="space-y-2 leading-6">
      <div class="font-bold text-lg">{{ value.title }}</div>
      <div class="text-gray-500">{{ value.desc }}</div>
    </div>
    <div class="flex space-x-3">
      <div class="flex-shrink-0">
        <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
      </div>
      <div class="min-w-0 flex-1">
        <p class="text-sm font-semibold text-gray-900">
          <a href="#" class="hover:underline">Chelsea Hagon</a>
        </p>
        <p class="text-sm text-gray-500">
          <a href="#" class="hover:underline">December 9 at 11:43 AM</a>
        </p>
      </div>
    </div>
  </nuxt-link>
</template>

<style scoped>

</style>
