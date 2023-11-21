<script setup lang="ts">
useHead({
  link: [
    {href: "//cdn.quilljs.com/1.3.6/quill.snow.css", rel: "stylesheet"},
    {href: "//cdn.quilljs.com/1.3.6/quill.bubble.css", rel: "stylesheet"},
  ],

})
</script>

<template>
  <div class="min-h-screen max-w-3xl mx-auto py-20 space-y-4">
    <div>
      <input class="border border-gray-300 p-3 w-full" type="text" placeholder="Title">
    </div>
    <div>
      <textarea class="border border-gray-300 p-3 w-full" type="text" placeholder="Short description"/>
    </div>
    <client-only>
      <helper-editor/>
    </client-only>
    <div class="fixed bottom-0 right-0 left-0 bg-white border-t">
      <div class="max-w-3xl mx-auto flex justify-between py-3">
        <div></div>
        <div class="cursor-pointer font-semibold">Save</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
