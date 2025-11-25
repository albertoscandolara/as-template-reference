<template>
  <Swiper
      v-if="mounted"
      :modules="modules"
      :slides-per-view="1"
      :space-between="20"
      navigation
      class="my-swiper"
  >
    <SwiperSlide v-for="(img, i) in images" :key="i">
      <img :src="img" class="slide-img" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const modules = [Navigation, Pagination, Autoplay]

// Client-only rendering
const mounted = ref(false)
onMounted(() => {
  mounted.value = true
})
</script>

<style scoped>
.my-swiper {
  margin: 2rem 0;
  width: 100%;
  height: auto;
}
.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
</style>