<template>
  <div>
    <div>
      <img class="h-32 w-full object-cover lg:h-64" :src="profile.backgroundImage" alt="" />
    </div>
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div class="-mt-12 sm:-mt-24 sm:flex sm:items-end sm:space-x-5">
        <div class="flex">
          <img class="w-24 ring-4 ring-white sm:w-32" :src="profile.avatar" alt="" />
        </div>
        <div class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
          <div class="mt-6 min-w-0 flex-1 sm:hidden md:block">
            <h1 class="truncate text-2xl font-bold text-gray-900">{{ profile.name }}</h1>
          </div>
          <div class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
            <button type="button" class="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              <EnvelopeIcon class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      </div>
      <div class="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
        <h1 class="truncate text-2xl font-bold text-gray-900">{{ profile.name }}</h1>
      </div>
    </div>
    <div class="my-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-6">
      <div class="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <card-post v-for="(item, i) in news" :key="i" :value="item"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/20/solid'

const profile = {
  name: 'BMW car club Vietnam',
  email: 'ricardo.cooper@example.com',
  avatar:
    '/logo/vietnam-car.jpeg',
  backgroundImage:
    'https://www.bmwclub.vn/content/images/2023/11/_DSC7918.jpg',
  fields: [
    ['Phone', '(555) 123-4567'],
    ['Email', 'ricardocooper@example.com'],
    ['Title', 'Senior Front-End Developer'],
    ['Team', 'Product Development'],
    ['Location', 'San Francisco'],
    ['Sits', 'Oasis, 4th floor'],
    ['Salary', '$145,000'],
    ['Birthday', 'June 8, 1990'],
  ],
}

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
