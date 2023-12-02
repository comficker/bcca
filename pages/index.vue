<script setup lang="ts">
const safes = [
  "thailand-motorcycle",
  "asia",
  "combodia-motorcycle",
  "indonesia-car",
  "saferiders",
  "singapore-motocycle"
]

const news = computed(() => {
  return safes.map(x => ({
    image: `/post/${x}.JPG`,
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    c: "#9FD0CC"
  }))
})
</script>

<template>
  <div id="2" class="w-screen">
    <div class="relative isolate">
      <svg
        class="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true">
        <defs>
          <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="50%" y="-1"
                   patternUnits="userSpaceOnUse">
            <path d="M100 200V.5M.5 .5H200" fill="none"/>
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
          <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                stroke-width="0"/>
        </svg>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"/>
      </svg>
      <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <div class="uppercase font-poppin">
            <div class="text-red-500 text-sm">Welcome to</div>
          </div>
          <h1 class="max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">BMW CLUBS ASIA.</h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">BMW throughout the world are united by their love of unique
            vehicles and incomparable driving pleasureMore than 200,000 people worldwide already share this enthusiasm
            as members of around 700 officially recognised BMW clubs.
            BMW Clubs Asia was formed in 2006 and it is the umbrella organization for all the BMW Clubs in Asia,
            excluding Japan.</p>
          <div class="mt-10 flex items-center gap-x-6">
            <nuxt-link
              to="/welcome"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >Get started
            </nuxt-link>
            <nuxt-link
              to="/about" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span
              aria-hidden="true">→</span></nuxt-link>
          </div>
        </div>
        <div class="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          <img class="w-96" src="https://bmwca.org/wp-content/uploads/2019/12/Map-and-Logo-02-2048x2048.jpg" alt=""/>
        </div>
      </div>
    </div>
    <div class="my-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-6">
      <div class="uppercase font-poppin">
        <div class="text-red-500 text-sm">BMW CLUBS ASIA.</div>
        <div class="inline-flex font-semibold text-3xl border-b-2">OUR MEMBERS
        </div>
      </div>
      <helper-slider/>
    </div>
    <div class="my-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-6">
      <div class="uppercase font-poppin">
        <div class="text-red-500 text-sm">BMW CLUBS ASIA.</div>
        <div class="inline-flex font-semibold text-3xl border-b-2">NEWS
        </div>
      </div>
      <div class="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <card-post v-for="(item, i) in news" :key="i" :value="item"/>
      </div>
    </div>
    <div v-if="false" class="py-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:flex gap-6 items-center h-full">
      <div class="md:w-1/2 space-y-6 mb-6">
        <div class="space-y-3 font-poppin uppercase">
          <div class="text-red-500 text-sm">Welcome to</div>
          <h1 class="text-6xl font-semibold">BMW clubs Asia.</h1>
        </div>
        <div class="space-y-4 text-gray-500">
          <p>BMW throughout the world are united by their love of unique vehicles and incomparable driving pleasureMore
            than 200,000 people worldwide already share this enthusiasm as members of around 700 officially recognised
            BMW clubs.</p>
        </div>
      </div>
      <div class="md:w-1/2">
        <div class="pt-full relative">
          <div class="absolute inset-0 overflow-hidden">
            <img class="w-full h-full object-cover" src="/s1/s1.jpg" alt="">
          </div>
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
