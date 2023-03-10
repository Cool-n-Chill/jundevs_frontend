<script setup>
import axios from 'axios'

import { useAuthStore } from '@/stores/auth.store';

const authStore = useAuthStore()

</script>

<template>
  <v-app-bar
      title="Jundevs"
      prominent>
      <v-btn v-if="!authStore.authUser" :to="{name: 'login'}" variant="outlined">
        Login
      </v-btn>
      <v-btn v-if="!authStore.authUser" :to="{name: 'register'}" variant="outlined">
        Register
      </v-btn>
      <v-btn v-if="authStore.authUser" variant="outlined" @click.prevent="authStore.logout">
        Logout
      </v-btn>
    </v-app-bar>
</template>

<style>

</style>