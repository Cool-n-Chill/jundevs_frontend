<script setup>
import { reactive } from 'vue';
import { useAuthStore } from '@/stores/auth.store'
import { useValidationFormStore } from '@/stores/validationForm.store'

const validationFormStore = useValidationFormStore()
const authStore = useAuthStore()
const form = reactive (
    {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    }
)
</script>

<template>
  <v-row justify="center">
        <v-col cols="4">
            <div class="text-h3 mb-3">
                <span>Регистрация</span>
            </div>
            <v-form @submit.prevent>
                <v-text-field
                    clearable
                    label="Имя"
                    variant="outlined"
                    :rules="validationFormStore.nameValidationRules"
                    v-model="form.name"
                ></v-text-field>
                <v-text-field
                    clearable
                    label="Email"
                    type="email"
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
                <v-text-field
                    clearable
                    label="Подтверждение пароля"
                    type="password"
                    variant="outlined"
                    :rules="validationFormStore.passwordValidationRules"
                    v-model="form.password_confirmation"
                ></v-text-field>
                <v-btn type="submit" class="mt-2" variant="outlined" @click.prevent="authStore.register(form)">Регистрация</v-btn>
            </v-form>
        </v-col>
    </v-row>
</template>

<style>

</style>