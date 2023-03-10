import { defineStore } from "pinia"
import axios from "axios"
import router from '@/router'
import { useAlertStore } from '@/stores/alert.store'


export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        authUser: null
    }),
    actions: {
        async register(form) {
            try {
                await axios.post('/api/register', JSON.parse(JSON.stringify(form)))
                await router.push({name: 'main'})
                await this.setAuthUser()
            } catch (error) {
                const alertStore = useAlertStore()
                alertStore.error(error.message)
            }
        },
        async login (form) {
            try {
                await this.sendForm(form)
                router.push({name: 'main'})
                await this.setAuthUser()
            } catch (error) {
                const alertStore = useAlertStore()
                alertStore.error(error.message)
            }
        },
        async logout() {
            await axios.post('/api/logout')
            this.setAuthUserNull()
            console.log('logout')
        },
        async sendForm (form) {
            await this.getSanctumToken()
            await axios.post('/api/login', JSON.parse(JSON.stringify(form)))
        },
        async setAuthUser () {
            try {
                this.authUser = (await this.getCurrentUser()).data
            } catch (error) {
                this.authUser = null
            }
        },
        setAuthUserNull () {
            this.authUser = null
        },
        async getCurrentUser () {
            return await axios.get('/api/user')
        },
        async getSanctumToken () {
            await axios.get('/sanctum/csrf-cookie')
        }
    },
    persist: true
});