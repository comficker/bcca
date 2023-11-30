<script setup lang="ts">
const committee = [
  {
    img: "https://bmwca.org/wp-content/uploads/2017/11/BMWCA-C.jpg",
    name: "WONG KK.",
    role: "PRESIDENT DELEGATE"
  },
  {
    img: "https://bmwca.org/wp-content/uploads/2017/11/sqdaffa.jpg",
    name: "GERRY NASUTION.",
    role: "VP. CARS REASURY & DELEGATE"
  },
  {
    img: "https://bmwca.org/wp-content/uploads/2017/11/adawdad.jpg",
    name: "MINESH B. DOSHI",
    role: "VP. MOTORCYCLE"
  },
  {
    img: "https://bmwca.org/wp-content/uploads/2017/11/Don.jpg",
    name: "DON WEERASYURIA",
    role: "OBSERVER"
  }
]

const timeline = [
  {
    name: 'Founded',
    description:
      'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
    date: 'Aug 2021',
    dateTime: '2021-08',
  },
  {
    name: 'Funding',
    description:
      'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.',
    date: 'Dec 2021',
    dateTime: '2021-12',
  },
  {
    name: 'Released',
    description:
      'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
    date: 'Feb 2022',
    dateTime: '2022-02',
  },
  {
    name: 'Global launch',
    description:
      'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
    date: 'Dec 2022',
    dateTime: '2022-12',
  },
]

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
  <div class="w-screen">
    <div class="overflow-hidden mt-20">
      <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <div class="uppercase font-poppin">
              <div class="text-red-500 text-sm">About</div>
              <h1 class="inline-flex text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl border-b-2">BMW
                CLUBS ASIA.</h1>
            </div>
            <p class="mt-6 text-xl leading-8 text-gray-600">BMW throughout the world are united by their love of unique
              vehicles and incomparable driving pleasureMore than 200,000 people worldwide already share this enthusiasm
              as members of around 700 officially recognised BMW clubs.
              BMW Clubs Asia was formed in 2006 and it is the umbrella organization for all the BMW Clubs in Asia,
              excluding Japan.</p>
            <p class="mt-6 text-base leading-7 text-gray-600">At present BMW Clubs Asia has members in China, Hong Kong,
              South Korea, Malaysia, Singapore, Indonesia, Thailand , Philippines, Taiwan, Cambodia, Sri lanka, India,
              Vietnam and Iran.</p>
          </div>
          <div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src="https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?q=80&w=3327&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="" class="shadow-xl aspect-[7/5] w-[37rem] max-w-none bg-gray-50 object-cover">
            </div>
            <div
              class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div class="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                  src="https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?q=80&w=3580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="" class="shadow-xl aspect-[4/3] w-[24rem] max-w-none flex-none bg-gray-50 object-cover">
              </div>
              <div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  src="https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="" class="shadow-xl aspect-[7/5] w-[37rem] max-w-none flex-none bg-gray-50 object-cover">
              </div>
              <div class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=3315&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="" class="shadow-xl aspect-[4/3] w-[24rem] max-w-none bg-gray-50 object-cover">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-6">
      <div class="uppercase font-poppin">
        <div class="text-red-500 text-sm">BMW CLUBS ASIA.</div>
        <div class="inline-flex font-semibold text-3xl border-b-2">COMMITTEE.</div>
      </div>
      <div class="grid gap-6 md:gap-8 grid-cols-2 md:grid-cols-4">
        <div v-for="item in committee" :key="item.name" class="uppercase text-center space-y-2">
          <img :src="item.img" alt="">
          <div class="space-y-1">
            <div>{{ item.name }}</div>
            <div class="text-xs">{{ item.role }}</div>
          </div>
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
    <div v-if="false" class="my-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-6">
      <div class="uppercase font-poppin">
        <div class="text-red-500 text-sm">BMW CLUBS ASIA.</div>
        <div class="inline-flex font-semibold text-3xl border-b-2">Timelines
        </div>
      </div>
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
        <div v-for="item in timeline" :key="item.name">
          <time :datetime="item.dateTime" class="flex items-center font-semibold leading-6 text-indigo-600">
            <svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
              <circle cx="2" cy="2" r="2" fill="currentColor" />
            </svg>
            {{ item.date }}
            <div class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true" />
          </time>
          <p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{{ item.name }}</p>
          <p class="mt-1 text-base leading-7 text-gray-600">{{ item.description }}</p>
        </div>
      </div>
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
  </div>
</template>

<style scoped>
#s1 {
  height: calc(100vh - 96px);
}
</style>
