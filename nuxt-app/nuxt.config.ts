// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
   
        // Simple usage
        '@nuxtjs/axios'
     ],
})
