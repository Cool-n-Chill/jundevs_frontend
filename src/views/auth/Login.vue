<script setup>
import { reactive } from 'vue';

const formData = reactive (
    {
        login: '',
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
            <v-form @submit.prevent>
                <v-text-field
                    clearable
                    label="Логин"
                    variant="outlined"
                    v-model="formData.login"
                ></v-text-field>
                <v-text-field
                    clearable
                    label="Пароль"
                    type="password"
                    variant="outlined"
                    v-model="formData.password"
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