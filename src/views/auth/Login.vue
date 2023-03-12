<script setup>
import { reactive } from 'vue'
import { useAuthStore } from '@/stores/auth.store'
import { useValidationFormStore } from '@/stores/validationForm.store'

const validationFormStore = useValidationFormStore()
const authStore = useAuthStore()
const form = reactive (
    {
        email: '',
        password: ''
    }
)
</script>

<template>
    <v-row justify="center">
        <v-col cols="4">
            <div class="text-h3 mb-3">
                <span>Войти</span>
            </div>
            <v-form @submit.prevent="authStore.login(form)">
                <v-text-field
                    clearable
                    label="Email"
                    variant="outlined"
                    :rules="validationFormStore.emailValidationRules"
                    v-model="form.email"
                ></v-text-field>
                <v-text-field
                    clearable
                    label="Пароль"
                    type="password"
                    variant="outlined"
                    :rules="validationFormStore.passwordValidationRules"
                    v-model="form.password"
                ></v-text-field>
                <v-checkbox
                    label="Запомнить меня"
                ></v-checkbox>
                <v-btn type="submit" class="mt-2" variant="outlined">Войти</v-btn>
            </v-form>
        </v-col>
    </v-row>
</template>

<style>

</style>