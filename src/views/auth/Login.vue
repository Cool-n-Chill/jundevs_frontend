<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const form = reactive (
    {
        email: '',
        password: ''
    }
)

const sendData = async function () {
    try {
        await axios.post('/api/login', JSON.parse(JSON.stringify(form)))
        router.push('/')
    } catch (e) {
        console.error(e)
    }
}

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
                    label="Email"
                    variant="outlined"
                    v-model="form.email"
                ></v-text-field>
                <v-text-field
                    clearable
                    label="Пароль"
                    type="password"
                    variant="outlined"
                    v-model="form.password"
                ></v-text-field>
                <v-checkbox
                    label="Запомнить меня"
                ></v-checkbox>
                <v-btn type="submit" class="mt-2" variant="outlined" @click.prevent="sendData">Войти</v-btn>
            </v-form>
        </v-col>
    </v-row>
</template>

<style>

</style>