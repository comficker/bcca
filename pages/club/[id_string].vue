<template>
  <div>
    <div>
      <img class="h-32 w-full object-cover lg:h-64" :src="profile.backgroundImage" alt=""/>
    </div>
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div class="-mt-12 sm:-mt-24 sm:flex sm:items-end sm:space-x-5">
        <div class="flex">
          <img class="w-24 ring-4 ring-white sm:w-32" :src="profile.avatar" alt=""/>
        </div>
        <div class="mt-20 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
          <div class="mt-6 min-w-0 flex-1 sm:hidden md:block">
            <h1 class="truncate text-2xl font-bold text-gray-900">{{ profile.name }}</h1>
            <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
              <div class="mt-2 flex items-center text-sm text-gray-500">
                <UsersIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true"/>
                1000
              </div>
              <div class="mt-2 flex items-center text-sm text-gray-500">
                <CalendarIcon class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true"/>
                Created on January 9, 2020
              </div>
            </div>
          </div>
          <div class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
            <button type="button"
                    class="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              <EnvelopeIcon class="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true"/>
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
      <div class="grid grid-cols-2 gap-6">
        <div class="space-y-2">
          <p>BMW Car Club Singapore is officially registered with the BMW Clubs Asia and is entitled to all rights and
            privileges granted as BMW Clubs under the guidelines and By-laws of the BMW Clubs Asia, an official umbrella
            club under BMW Clubs International Council .</p>
          <p>Membership entitles members benefits and event participation in Singapore to the Registered Member
            only.</p>
          <p>BCCS was established in Singapore with the sole aim of providing social activities which appeal to
            like-mined people, young and old, who have one common passion – our cars.</p>
          <p>The Club’s events calendar is designed to offer something for every member. Participation in these local
            events allows Registered Members to enjoy their vehicles with like-minded people.
            From benefitting from promotions exclusive to our Club and social activities, there truly is much to choose
            from.</p>
          <p> The Club’s committee work on a volunteer basis with no financial reward for their immense efforts. It is
            the passion and dedication of this group that has made the Club the success it is today.</p>
        </div>
        <div class="grid gap-4">
          <div>
            <img class="h-auto max-w-full rounded-lg" src="/club/0.jpeg" alt="">
          </div>
          <div class="grid grid-cols-5 gap-4">
            <div v-for="i in 5">
              <div class="pt-[75%] relative">
                <div class="absolute inset-0">
                  <img class="w-full h-full object-cover rounded-lg" :src="`/club/${i}.jpeg`" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="uppercase font-poppin">
        <div class="inline-flex font-semibold text-3xl border-b-2">News
        </div>
      </div>
      <div class="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <card-post v-for="(item, i) in news" :key="i" :value="item"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import {EnvelopeIcon, PhoneIcon} from '@heroicons/vue/20/solid'
import {
  BriefcaseIcon,
  CalendarIcon,
  UsersIcon
} from '@heroicons/vue/20/solid'

const profile = {
  name: 'BMW Car Club Singapore',
  email: 'ricardo.cooper@example.com',
  avatar:
    '/logo/singapore-car.jpeg',
  backgroundImage:
    '/club/Car-Club-Singapore.jpg',
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

const news = [1, 2, 3, 4, 5, 6].map(x => ({
  image: `/club/0${x}.jpeg`,
  title: "Lorem ipsum dolor sit amet",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  c: "#323A57"
}))
</script>
