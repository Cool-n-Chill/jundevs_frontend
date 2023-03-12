<script setup>
import axios from 'axios'

import { useAuthStore } from '@/stores/auth.store';

const authStore = useAuthStore()

</script>

<template>
  <v-app-bar
      title="Jundevs"
      prominent>
      <v-btn :to="{name: 'projects'}" variant="outlined">
        Projects
      </v-btn>
      <v-btn :to="{name: 'users'}" variant="outlined">
        Users
      </v-btn>
      <v-spacer></v-spacer>
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