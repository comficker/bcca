<script setup lang="ts">
const clubs = [
  "vietnam-car",
  "ceylon-car",
  "combodia-motorcycle",
  "hongkong-car",
  "india-car",
  "indonesia-car",
  "iran",
  "malaysia-motorrad",
  "malaysia",
  "philippines-car",
  "saferiders",
  "singapore-car",
  "singapore-motocycle",
  "taiwan",
  "thailand-motorcycle",
  "thailand-motorrad-south"
]
</script>

<template>
  <div class="w-screen">
    <div class="my-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-6">
      <div class="uppercase font-poppin">
        <div class="text-red-500 text-sm">BMW CLUBS ASIA.</div>
        <div class="inline-flex font-semibold text-3xl border-b-2">BMW CLUBS IN ASIA.
        </div>
      </div>
      <div class="grid gap-6 md:gap-12 grid-cols-5">
        <div v-for="item in clubs" :key="item" class="uppercase text-center space-y-2 shadow hover:shadow-xl bg-white duration-200">
          <nuxt-link to="/club/sample">
            <img :src="`/logo/${item}.jpeg`" alt="">
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#s1 {
  height: calc(100vh - 96px);
}
</style>
