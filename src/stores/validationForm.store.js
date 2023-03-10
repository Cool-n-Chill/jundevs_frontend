import { defineStore } from 'pinia';

export const useValidationFormStore = defineStore({
    id: 'validation',
    state: () => ({
        nameValidationRules: [
            value => {
                if (value) return true
    
                return 'Name is requred.'
            }
        ],
        emailValidationRules: [
            value => {
                if (value) return true
      
                return 'E-mail is requred.'
              },
              value => {
                if (/.+@.+\..+/.test(value)) return true
      
                return 'E-mail must be valid.'
              },
        ],
        passwordValidationRules: [
            value => {
                if (value) return true
      
                return 'Password is requred.'
              },
              value => {
                  if (value?.length >= 8) return true
      
                  return 'Password must be more than 8 characters.'
              },
        ],
    })
})