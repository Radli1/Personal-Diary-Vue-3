import { defineStore } from "pinia";
import { ref } from "vue";
export const paginationStore = defineStore ('pagination', {
  state:() => ({
    page:{}, 
    perPage:{}, 
    nextPage:'', 
    backPage:'', 
    goToPage:''
  }),
  actions:{
    paginationValue(){
    let page = ref(1)
    const perPage = 22
    ///const quantityPage = window.paginatedArrayLength
    const nextPage = () => {
      if (page.value !== quantityPage) {
        page.value += 1;
      }
    };
    const backPage = () => {
      if (page.value !== 1) {
        page.value -= 1;
      }
    };
    const goToPage = (numPage) => {
      page.value = numPage
    };
    ///console.log('array=', this.paginatedArray)
    console.log('page',page)
    console.log('perPage',perPage)
    console.log('nextPage',nextPage)
    console.log('backPage',backPage)
    console.log('goToPage',goToPage)
    ///return (page, perPage, nextPage, backPage, goToPage)
    
    }
}
})