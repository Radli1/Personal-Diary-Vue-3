<template>
  <div>
    <div>
      <PaginationComponent />
      <SortComponent />
      <!-- <div v-for="index in paginatedArray" :key="index">
      <h2>{{paginatedArray.id}}</h2>
      <p>{{paginatedArray.title}}</p>
    </div> -->
    </div>
  </div>
</template>
<script>
import AppPagination from '../components/PaginationComponent.vue';
import AppSort from '../components/SortComponent.vue';

export default {
  components: {
    AppPagination,
    AppSort,
  },
};
</script>

<!-- <script setup>
  //import { ref, computed, reactive } from "@nuxtjs/composition-api";
  import  PaginationComponent from './src/components';
  import  SortComponent from '@/src/components'

  const { paginatedArray } = storeToRefs(useTitleStore())
  
  defineProps(['paginatedArray']) -->
