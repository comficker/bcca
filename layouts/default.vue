<script lang="ts" setup>
const route = useRoute()
useHead({
  link: [
    {
      href: "/favicon.png",
      rel: "icon"
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;1,200;1,300;1,400;1,500;1,600&family=Mulish:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap",
      rel: "stylesheet"
    },
    {
      href: "https://cdn.jsdelivr.net/npm/jsvectormap/dist/css/jsvectormap.min.css",
      rel: "stylesheet"
    }
  ]
})
</script>

<template>
  <main id="main" class="flex flex-col overflow-hidden">
    <partial-header/>
    <div class="flex-1">
      <slot class="w-full"/>
    </div>
    <partial-footer v-if="!['welcome','dash', 'dash-editor'].includes(route.name)"/>
  </main>
</template>

<style>
@supports (-webkit-touch-callout: none) {
  #main {
    margin-bottom: 20px;
  }
}
</style>
