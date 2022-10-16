import axios from "axios"
import { ref, computed, onMounted } from "vue"
import { defineStore } from "pinia"
export const useTitlesStore =  defineStore ("titles", {
  state:() => ({
    paginatedArray: [],
    totalPages: []
  }),
  actions: {
    async getTitles (page) {
      try {                 
        const perPage = 15
        let totalPages = 0 
        const response = await axios({
          method: 'get',
          url: `https://jsonplaceholder.typicode.com/posts`,
            params: {
              _start: (page - 1) * perPage,
              _end: page * perPage,
            },
          })
            this.totalPages = Math.ceil(response.headers['x-total-count'] / perPage)
            this.paginatedArray = response.data
        } catch (err) {
          console.log(err);
          }
      },
  },
})

          
