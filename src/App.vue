<template>
  <div class="app">
    <!-- name属性 -->
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>

    <tab-bar v-show="!router.meta.hideTabBar" />
    <loading />
    <!-- <tab-bar /> -->
  </div>
</template>

<script setup>
import TabBar from '@/components/tab-bar/tab-bar.vue'
import Loading from '@/components/loading/loading.vue'
import { useRoute } from 'vue-router'

const router = useRoute()
</script>

<style scoped></style>