<template>
  <li>
    <li v-for="item in paginatedArray" >
      <span f-for>{{item.id}}. {{item.title}}></span>
    </li>
    <div class="pagination-row">
      <button class="pagination-button" @click="backPage">Previous</button>
      <button v-for="item in totalPages"
        :key="item.id"
        @click = "() => goToPage(item)"
        >{{item}}
      </button>
    <button class="pagination-button" @click="nextPage">Next</button>
  </div> 
</li>
</template>
<script>
import { ref, computed, onMounted, watch, onUpdated, watchEffect } from 'vue';
import { useTitlesStore } from '@/stores/titles';
import { storeToRefs }  from 'pinia';
export default {
    setup () {
    const useTitlesApi = (useTitlesStore());
    const {paginatedArray} = storeToRefs(useTitlesApi);
    const {totalPages} = storeToRefs(useTitlesApi);
    onMounted (() => {
        useTitlesApi.getTitles(page.value)
      })
    let page = ref(1)  
    const nextPage = () => {
      if (page.value < totalPages.value) {
        page.value += 1;
      }
    };
    const backPage = () => {
      if (page.value > 1) {
        page.value -= 1;
      }
    };
    const goToPage = (numPage) => {
      page.value = numPage
    }; 
    watch(page,(newValue) => {
      return useTitlesApi.getTitles(newValue) 
    })
    return {
      paginatedArray,
      totalPages,
      page,
      nextPage,
      backPage,
      goToPage
    };
  },
}
</script>
<style>
</style>
