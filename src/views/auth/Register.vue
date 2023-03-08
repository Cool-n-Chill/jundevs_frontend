<script setup>
import { reactive } from 'vue';
import axios from 'axios';

const formData = reactive (
    {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    }
)

function sendData () {
    axios.post('/api/register', JSON.parse(JSON.stringify(formData)))
    .then((res) => {console.log(res)})
    .catch((e) => {console.log('not registered' + e)})
}

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
                    v-model="formData.name"
                ></v-text-field>
                <v-text-field
                    clearable
                    label="Email"
                    type="email"
                    variant="outlined"
                    v-model="formData.email"
                ></v-text-field>
                <v-text-field
                    clearable
                    label="Пароль"
                    type="password"
                    variant="outlined"
                    v-model="formData.password"
                ></v-text-field>
                <v-text-field
                    clearable
                    label="Подтверждение пароля"
                    type="password"
                    variant="outlined"
                    v-model="formData.password_confirmation"
                ></v-text-field>
                <v-btn type="submit" class="mt-2" variant="outlined" @click.prevent="sendData">Регистрация</v-btn>
            </v-form>
        </v-col>
    </v-row>
</template>

<style>

</style>