<template>
  <header class="bg-white">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4" aria-label="Global">
      <div class="flex lg:flex-1 relative z-10">
        <nuxt-link to="/">
          <img class="bg-white h-32 md:-mb-16 w-auto border border-black/50" src="https://bmwca.org/wp-content/uploads/2021/11/BMWCCI-JakChap-02.png" alt="" />
        </nuxt-link>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-6 font-poppin">
        <nuxt-link
          v-for="item in navigation" :key="item.name" :to="item.href"
          class="uppercase leading-6 text-gray-900"
        >{{ item.name }}</nuxt-link>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <nuxt-link to="/welcome" href="#" class="uppercase font-poppin leading-6 text-gray-900">Member log in <span aria-hidden="true">&rarr;</span></nuxt-link>
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10 font-poppin uppercase">
            <div class="space-y-2 py-6">
              <nuxt-link
                v-for="item in navigation" :key="item.name" :to="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 leading-7 text-gray-900 hover:bg-gray-50"
              >{{ item.name }}</nuxt-link>
            </div>
            <div class="py-6">
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Club', href: '/clubs' },
  { name: 'News', href: '/news' },
  { name: 'About', href: '/about' },
]

const mobileMenuOpen = ref(false)
</script>
