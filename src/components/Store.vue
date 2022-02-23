<template>
    <div>
        <h1>Store</h1>
        <div>Loading: {{loading}}</div>
        <button @click="search">load products</button>
    </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
    setup() {
        const loading = ref(false)
        const products = ref([])

        async function search () {
            loading.value = true
            products.value = [{name: "icecream"}]
            loading.value = false
        }
        
        return {
            loading: computed(() => loading.value),
            products: computed(() => products.value),
            search
        }
    }
}
</script>

<style>

</style>