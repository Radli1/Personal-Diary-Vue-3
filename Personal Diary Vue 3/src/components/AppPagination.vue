<template>
  <div>
    <div v-for="index in paginatedArray" :key="paginatedArray.id">{{paginatedArray.title}}
    </div>
    <div class="pagination-row">
    <button class="pagination-button"> Previous</button>
    <span v-for="index in paginatedArray" :key="index">
      <button class="pagination-button">{{index+1}}</button>
    </span>
    <button class="pagination-button">Next</button>
   </div> 
  </div>
</template>
<script>
import { ref, computed, onMounted } from 'vue';
////import { useTitlesApi } from "@/store/useTitlesApi";
import { storeToRefs }  from 'pinia';
///default
///defineStore
export default {
  setup () {
    const useTitlesApi = (useTitlesApi());
    const {paginatedArray} = storeToRefs(useTitlesApi);
      onMounted (() => {
        useTitlesApi.getTitles()
      })
    const {
      currentPage,
      lastPage,
      next,
      prev,
  
    } = usePagination({
      currentPage: 1,
      pageSize: 10,
      total: computed(() => paginatedArray.value.length),
    });
    console.log(paginatedArray)
    return {
      paginatedArray,
      currentPage,
      lastPage,
      next,
      prev
    };
  }
}
</script>
<style>
  .pagination-button {
    padding: 8px;
    margin: 2px;
    border-radius: 3px;
    font-size: 1em;
    cursor: pointer;
  }
</style>
