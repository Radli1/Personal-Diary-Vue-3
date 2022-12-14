///import {ref, Ref} from "@vue/reactivity";   
import axios from "axios"
import { defineStore } from "pinia"


export const useTitlesApi =  defineStore ("useTitlesApi", {
    state:() => ({
      paginatedArray: []
    }),
    actions: {
          async getTitles () {
            try {
              const id = 0;
              ///const result = await fetch ()
              const result = await axios({
                method: 'get',
                url: `https://jsonplaceholder.typicode.com/posts/`,
                params: {
                  '_start': 0,
                  '_limit': 5,
                }
              })
              console.log('result=',result)
              this.paginatedArray = result.data;
            } catch (err) {
              console.log(err);
            }
          }
        }
            
})
