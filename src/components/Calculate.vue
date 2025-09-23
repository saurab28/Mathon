<script setup lang="ts">
import Navbar from './Navbar.vue'

import Mainbody from './Mainbody.vue'
import Airthmatic from '../assets/Airthmatic.png'

import Footer from './Footer.vue'
</script>

<template>
  <div
    class="m-0 min-h-screen bg-[#f5f0e6] bg-[linear-gradient(to_right,rgba(0,0,0,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.09)_1px,transparent_1px)] bg-[length:40px_40px] sm:bg-[length:60px_60px] md:bg-[length:80px_80px]"
  >
    <Navbar />
    <Mainbody />
    <Footer />
  </div>
</template>

<style scoped></style>
