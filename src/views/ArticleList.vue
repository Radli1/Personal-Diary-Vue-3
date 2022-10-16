<template>
  <div>
    <div>
      <AppPagination />
      <AppSort />
    </div>
  </div>
</template>
<script>
import AppPagination from '@/components/AppPagination.vue';
import AppSort from '@/components/AppSort.vue';

export default {
  components: {
    AppPagination,
    AppSort,
  },
};
</script>

