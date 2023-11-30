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
  },
  {
    image: "https://supapjpiqdfzuaordcdx.supabase.co/storage/v1/render/image/public/images/thelever.jpeg?width=600&height=426&resize=cover",
    title: "BLAG (Better Letters Magazine)",
    desc: "Award-winning journalist and Oscar-nominated writer David Sirota conducts investigative journalism about holding people and corporations manipulating the levers of power accountable.",
    c: "#9FD0CC"
  },
  {
    image: "https://supapjpiqdfzuaordcdx.supabase.co/storage/v1/render/image/public/images/thelever.jpeg?width=600&height=426&resize=cover",
    title: "BLAG (Better Letters Magazine)",
    desc: "Award-winning journalist and Oscar-nominated writer David Sirota conducts investigative journalism about holding people and corporations manipulating the levers of power accountable.",
    c: "#9FD0CC"
  },
  {
    image: "https://supapjpiqdfzuaordcdx.supabase.co/storage/v1/render/image/public/images/thelever.jpeg?width=600&height=426&resize=cover",
    title: "BLAG (Better Letters Magazine)",
    desc: "Award-winning journalist and Oscar-nominated writer David Sirota conducts investigative journalism about holding people and corporations manipulating the levers of power accountable.",
    c: "#9FD0CC"
  },
  {
    image: "https://supapjpiqdfzuaordcdx.supabase.co/storage/v1/render/image/public/images/thelever.jpeg?width=600&height=426&resize=cover",
    title: "BLAG (Better Letters Magazine)",
    desc: "Award-winning journalist and Oscar-nominated writer David Sirota conducts investigative journalism about holding people and corporations manipulating the levers of power accountable.",
    c: "#9FD0CC"
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
  <div class="mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-6">
    <section aria-labelledby="cause-heading">
      <div class="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16 rounded-lg overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg" alt="" class="h-full w-full object-cover object-center" />
        </div>
        <div aria-hidden="true" class="absolute inset-0 bg-gray-900 bg-opacity-50" />
        <div class="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <div class="flex space-x-3">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </div>
          </div>
          <h2 id="cause-heading" class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Long-term thinking</h2>
          <p class="mt-3 text-xl text-white">We're committed to responsible, sustainable, and ethical manufacturing. Our small-scale approach allows us to focus on quality and reduce our impact. We're doing our best to delay the inevitable heat-death of the universe.</p>
          <a href="#" class="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">Read full story</a>
        </div>
      </div>
    </section>
  </div>
  <div class="my-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-6">
    <div class="uppercase font-poppin">
      <div class="text-red-500 text-sm">BMW CLUBS ASIA.</div>
      <div class="inline-flex font-semibold text-3xl border-b-2">NEWS
      </div>
    </div>
    <div class="flex gap-8">
      <div class="md:w-2/3">
        <div class="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
          <card-post v-for="(item, i) in news" :key="i" :value="item"/>
        </div>
      </div>
      <div class="md:w-1/3 space-y-6">
        <div class="p-8 bg-gray-50">
          <h4 class="text-xl font-semibold">Join Us and Let’s Explore Together</h4>
          <p>Subscribe to our newsletter and be the first to access exclusive content and expert insights.</p>
          <a href="#" class="inline-flex mt-4 block w-full rounded-md border border-transparent text-white bg-gray-900 px-8 py-3 text-base font-medium hover:bg-gray-100 sm:w-auto">
            <span>Subscribe</span>
          </a>
        </div>
        <div class="flex flex-wrap -mx-2">
          <div class="p-2">
            <div class="p-2 rounded-full px-6 bg-gray-100 flex gap-2 items-center">
              <span>Category</span>
              <div class="w-6 h-6 rounded-full text-xs flex items-center justify-center bg-white p-2">
                <span>32</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
