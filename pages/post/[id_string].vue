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
  <div class="space-y-8 py-12 leading-8">
    <div class="mx-auto max-w-5xl px-6 lg:px-8 space-y-4 flex gap-6">
      <div class="flex-1 py-6 space-y-4">
        <div class="flex flex-wrap">
          <div class="p-1">
            <div class="p-4 py-1 border rounded-xl">Category</div>
          </div>
        </div>
        <h1 class="text-6xl font-bold">Lorem Ipsum</h1>
        <p>Quae quo sunt excelsiores, eo dant clariora indicia naturae. Sed haec quidem liberius ab eo dicuntur et
          saepius. Et ille ridens video, inquit, quid agas tum ille timide vel potius verecunde.</p>
        <div class="flex gap-4">
          <div class="w-12 h-12">
            <img
              class="rounded-full w-full h-full object-cover"
              src="https://genki.fueko.net/content/images/size/w400/2021/06/andre-miranda-YcSozv26XjQ-unsplash.jpg"
              alt="">
          </div>
          <div class="">
            <div class="font-semibold">Lauren Langford</div>
            <time datetime="2022-09-05" class="flex items-center text-base text-zinc-400 dark:text-zinc-500">
              <span>September 5, 2023</span>
            </time>
          </div>
        </div>
      </div>
      <div class="w-1/3">
        <img
          class="w-full"
          src="https://genki.fueko.net/content/images/size/w400/2021/06/andre-miranda-YcSozv26XjQ-unsplash.jpg"
          alt="">
      </div>
    </div>
  </div>
  <div class="min-h-screen space-y-8 leading-8">
    <div class="mx-auto max-w-3xl px-6 lg:px-8 space-y-4">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.</p>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
        qui
        ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
        aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
        nihil
        molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8 space-y-4">
      <img
        src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=3315&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="">
    </div>
    <div class="mx-auto max-w-3xl px-6 lg:px-8 space-y-4">
      <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
        will give you a complete account of the system, and expound the actual teachings of the great explorer of the
        truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is
        pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are
        extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because
        it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great
        pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain
        some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has
        no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
    </div>
    <div class="my-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-6">
      <div class="uppercase font-poppin">
        <div class="inline-flex font-semibold text-3xl border-b-2">Related
        </div>
      </div>
      <div class="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <card-post v-for="(item, i) in news" :key="i" :value="item"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
