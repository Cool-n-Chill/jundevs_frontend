<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { storeToRefs } from 'pinia';

import { useAlertStore } from '@/stores/alert.store';

import TheNavbar from './components/TheNavbar.vue'

const alertStore = useAlertStore();
const { alert } = storeToRefs(alertStore)

</script>

<template>
  <v-app>
    <TheNavbar />
    <v-main>
      <v-container>
        <v-alert v-if="alert" @click="alertStore.clear" :text="alertStore.alert.message" :type="alertStore.alert.type" closable />
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>

</style>
