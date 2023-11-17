<script setup lang="ts">
const news = [
  {
    image: "https://supapjpiqdfzuaordcdx.supabase.co/storage/v1/render/image/public/images/thelever.jpeg?width=600&height=426&resize=cover",
    title: "BLAG (Better Letters Magazine)",
    desc: "Award-winning journalist and Oscar-nominated writer David Sirota conducts investigative journalism about holding people and corporations manipulating the levers of power accountable.",
    c: "#323A57"
  },
  {
    image: "https://supapjpiqdfzuaordcdx.supabase.co/storage/v1/render/image/public/images/thelever.jpeg?width=600&height=426&resize=cover",
    title: "BLAG (Better Letters Magazine)",
    desc: "Award-winning journalist and Oscar-nominated writer David Sirota conducts investigative journalism about holding people and corporations manipulating the levers of power accountable.",
    c: "#EBB29A"
  },
  {
    image: "https://supapjpiqdfzuaordcdx.supabase.co/storage/v1/render/image/public/images/thelever.jpeg?width=600&height=426&resize=cover",
    title: "BLAG (Better Letters Magazine)",
    desc: "Award-winning journalist and Oscar-nominated writer David Sirota conducts investigative journalism about holding people and corporations manipulating the levers of power accountable.",
    c: "#9FD0CC"
  }
]
</script>

<template>
  <div id="s1" class="w-screen">
    <client-only>
      <helper-map/>
    </client-only>
  </div>
  <div id="2" class="w-screen">
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
