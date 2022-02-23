import { ref, computed } from 'vue';

export default function useProduct() {
    const productsInCart = ref([
        {name: "icecream"},
        {name: "coca-cola"},
    ])
    
    return {
        productsInCart: computed(() => productsInCart.value),
    }
}
