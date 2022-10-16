<template>
  <div>
    <button @click="setSort">Сортировка</button>    
  </div>
  <p>
    <input type="text" v-model="input" placeholder="Search"/>
    <button @click="searchTitle">Search</button>
  </p>
</template>
<script>
import {ref} from 'vue'
import { useTitlesStore } from "@/stores/titles";
import { storeToRefs }  from 'pinia';
export default {
  setup() {
    const useTitlesApi = (useTitlesStore());
    const {paginatedArray} = storeToRefs(useTitlesApi);
    let orderType = ''
    const setSort = () => {
      orderType = orderType === 'asc' ? 'desc' : 'asc'
      console.log(orderType)
      paginatedArray.value.sort((a, b) => {
          if (orderType === 'asc') {
              return b.id - a.id;
          }
              return a.id - b.id;
      })   
    }
    const input = ref('')
    const searchTitle = () => {
      console.log('input', input.value)
      return paginatedArray.value.filter(title => title.includes(input.value)
      )}
    return {
      setSort,
      searchTitle,
      input,
      paginatedArray
    }
  }
} 
</script>
