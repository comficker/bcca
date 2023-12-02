<script setup lang="ts">
const clubs: string[] = [
  "asia",
  "indonesia-car",
  "malaysia",
  "malaysia-motorrad",
  "philippines-car",
  "saferiders",
  "thailand-motorcycle",
  "thailand-motorrad-south",
  "singapore-motocycle",
  "singapore-car",
  "hongkong-car",
  "taiwan",
  "combodia-motorcycle",
  "ceylon-car",
  "vietnam-car",
  "iran",
  "india-car",
]

const chunk = computed(() => {
  return clubs.reduce((resultArray: string[][], item, index) => {
    const chunkIndex = Math.floor(index / chunkSize.value)
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []
    }
    resultArray[chunkIndex].push(item)
    return resultArray
  }, [])
})
const slider = ref()
const index = ref(0)
const width = ref(0)
const chunkSize = ref(5)
const translatedX = computed(() => {
  return - index.value * width.value
})

onMounted(() => {
  width.value = slider.value.clientWidth
  if (width.value < 768) {
    chunkSize.value = 2
  }
})
</script>

<template>
  <div class="-mx-4">
    <div class="overflow-hidden" ref="slider">
      <div
        class="flex flex-nowrap duration-300"
        :style="{'transform': `translateX(${translatedX}px)`}"
      >
        <div v-for="item in clubs" :key="item" class="w-1/2 md:w-1/5 flex-none">
          <div class="pb-6 p-3">
            <nuxt-link :to="`/club/${item}`" class="block uppercase text-center space-y-2 shadow hover:shadow-xl bg-white duration-200">
              <img :src="`/logo/${item}.jpeg`" alt="">
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center gap-2">
      <div
        v-for="i in chunk.length"
        :key="i"
        @click="index = i - 1"
        class="cursor-pointer w-4 h-4 rounded-full"
        :class="[index === i - 1 ? 'bg-gray-700': 'bg-gray-200']"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
