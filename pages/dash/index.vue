<script setup lang="ts">

import PostManage from "~/components/card/PostManage.vue";
</script>

<template>
  <div class="min-h-screen max-w-3xl mx-auto py-20 space-y-8">
    <div class="flex justify-between">
      <div class="flex gap-4">
        <div class="cursor-pointer font-bold text-3xl">Posts</div>
      </div>
      <div class="flex gap-4">
        <div class="p-2 px-8 rounded text-white font-semibold cursor-pointer bg-gray-800">New</div>
      </div>
    </div>
    <div class="flex justify-between">
      <div class="flex gap-4">
        <div class="cursor-pointer font-bold">Published</div>
        <div class="cursor-pointer font-bold">Draft</div>
      </div>
      <div class="flex gap-4">
        <div class="relative mt-2 rounded-md shadow-sm">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <div class="h-5 w-5 i-con-magnify text-gray-400"/>
          </div>
          <input
            type="text"
            class="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
    <div v-for="j in 5" :key="j" class="space-y-4">
      <div class="text-gray-600 uppercase font-semibold text-xs">NOVEMBER 2023</div>
      <post-manage class="w-full" v-for="i in 2" :key="i"/>
    </div>
  </div>
</template>

<style scoped>

</style>
