// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig(
  {
    modules: [
        ['@pinia/nuxt'],
   
        ['@nuxtjs/axios', 
            {proxyHeaders:false}],

        ["@nuxtjs/proxy"]
        ]
    ,     
    publicRuntimeConfig: {
      axios: {
        baseURL: 'http://localhost:3001/'
      },
    },
    proxy: {
      '/api': {
        target: 'http://www.example.org',
        pathRewrite: {
          '^/api' : '/'
          }
        }
    }
  })
