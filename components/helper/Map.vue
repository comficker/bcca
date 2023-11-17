<script setup>
import jsVectorMap from 'jsvectormap'
import '~/data/map.js'

const maps = {
  "VN": ['vietnam-car'],
  'TH': ['thailand-motorcycle', 'thailand-motorrad-south'],
  'HK': ['hongkong-car'],
  'TW': ['taiwan'],
  'SG': ['singapore-car', 'singapore-motocycle'],
  'MY': ['malaysia-motorrad', 'malaysia'],
  'PH': ['philippines-car'],
  'IQ': [],
  'IN': ['india-car'],
  'KH': ['combodia-motorcycle'],
  'ID': ['indonesia-car'],
  'LK': ['ceylon-car'],
  'IR': ['iran']
}

onMounted(() => {
  const selected = ['VN', 'TH', 'HK', 'TW', 'SG', 'MY', 'PH', 'IQ', 'IN', 'KH', 'ID', 'LK', 'IR']
  new jsVectorMap({
    selector: '#map',
    showTooltip: true,
    map: 'asia_merc',
    selectedRegions: selected,
    regionStyle: {
      selected: { fill: '#76cded' },
      selectedHover: { fill: '#1c4283' }
    },
    zoomOnScroll: false,
    onRegionTooltipShow(event, tooltip, code) {
      if (selected.includes(code)) {
        const imgs = maps[code].map(x => `<img class="w-32" src="/logo/${x}.jpeg" alt=""/>`).join()
        tooltip.text(
          `<div class="flex">${imgs}</div>`,
          true
        )
      } else {
        tooltip.hide()
      }
    }
  })
})
</script>

<template>
  <div id="map" class="w-full h-full relative"/>
</template>

<style>
.jvm-tooltip {
  background: #FFF!important;
  border-radius: 0!important;
}
</style>
