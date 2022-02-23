<template>
  <div>
    <p>Names</p>
    <input type="text" v-model="search">
    <p>search term - {{search}}</p>
    <div v-for="name in matchingNames" :key="name">{{name}}</div>
  </div>
</template>

<script>
//import { useProduct } from '../utils/useProduct'
import {ref, computed, watch} from 'vue'

export default {
    name: 'Products',
    setup () {
        const search = ref('')
        const names = ref(['mario', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])
        
        watch(search, () => {
            console.log("searching: " + search.value)
        })

        const matchingNames = computed(() => {
            return names.value.filter(name => name.includes(search.value))
        })
        //const { state } = useProduct()

        return {search, names, matchingNames}
    }
}
</script>
